/*BSD 3-Clause License

Copyright (c) 2020, Blockception Ltd
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.*/

import * as vscode from 'vscode';
import { DiagnosticsManager, DiagnosticProvider, Errors } from '../DiagnosticsManager';
import { SyntaxItem } from '../../../general/include';
import { Functions } from '../DiagnosticsFunctions';

export class TeleportDiagnosticProvider implements DiagnosticProvider {

	//provides diagnostics
	provideDiagnostic(item: SyntaxItem, lineIndex: number, collector: vscode.Diagnostic[], dm: DiagnosticsManager, document: vscode.TextDocument): void {

		var First = item.Child;

		if (First == undefined) {
			Errors.Missing('x y z | target/selector', 'teleport', lineIndex, item, collector);
			return;
		}

		var firstChar = First.Text.text.charAt(0);

		switch (firstChar) {
			case '-':
			case '+':
			case '.':
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			case '~':
			case '^':
				this.branchDestination(First, lineIndex, collector, dm, document);
				return;

			default:
			case '"':
			case '@':
				this.branchTarget(First, lineIndex, collector, dm, document);
				return;
		}
	}

	branchTarget(item: SyntaxItem, lineIndex: number, collector: vscode.Diagnostic[], dm: DiagnosticsManager, document: vscode.TextDocument): void {
		var Target = item;

		//<target>
		if (Target == undefined) {
			Errors.Missing('target/selector', 'teleport', lineIndex, item, collector);
			return;
		}

		dm.SelectorDiagnoser.provideDiagnostic(Target, lineIndex, collector, dm, document);

		var Destination = Target.Child;

		//in case that the target was the destination
		if (Destination == undefined)
			return;

		var destText = Destination.Text.text;

		switch (destText.charAt(0)) {
			case '-':
			case '+':
			case '.':
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			case '~':
			case '^':
				this.branchDestination(Target, lineIndex, collector, dm, document);
				return;

			default:
				if (destText == 'true' || destText == 'True' || destText == 'false' || destText == 'False') {
					dm.BooleanDiagnoser?.provideDiagnostic(Destination, lineIndex, collector, dm, document);
					return;
				}

			case '"':
			case '@':
				this.branchTarget(Destination, lineIndex, collector, dm, document);
				return;
		}
	}

	branchDestination(item: SyntaxItem, lineIndex: number, collector: vscode.Diagnostic[], dm: DiagnosticsManager, document: vscode.TextDocument): void {

		var Out = Functions.provideDiagnosticsXYZ('teleport', item, lineIndex, collector, dm, document);

		if (Out[1] == false)
			return;

		var Next = Out[0].Child;

		if (Next == undefined)
			return;

		//if the keyword facing is there
		if (Next.Text.text == "facing") {
			this.branchFacing(Next, lineIndex, collector, dm, document);
			return;
		}

		switch (Next.Text.text.charAt(0)) {
			case '-':
			case '+':
			case '.':
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			case '~':
			case '^':
				//[yRot: value]
				
				dm.CoordinateDiagnoser?.provideDiagnostic(Next, lineIndex, collector, dm, document);

				var XRot = Next.Child;

				//[xRot: value]
				if (XRot == undefined) {
					return;
				}

				dm.CoordinateDiagnoser?.provideDiagnostic(XRot, lineIndex, collector, dm, document);
				Next = XRot;
				break;

			default:
				break;
		}

		var checkForBlocks = Next.Child;

		//[checkForBlocks: Boolean]
		if (checkForBlocks == undefined) {
			return;
		}
		dm.BooleanDiagnoser?.provideDiagnostic(checkForBlocks, lineIndex, collector, dm, document);
	}

	branchFacing(item: SyntaxItem, lineIndex: number, collector: vscode.Diagnostic[], dm: DiagnosticsManager, document: vscode.TextDocument): void {

		var Target = item.Child;

		//<target>
		if (Target == undefined) {
			Errors.Missing('target/selector | position', 'teleport', lineIndex, item, collector);
			return;
		}

		var Tartext = Target.Text.text;

		switch (Tartext.charAt(0)) {
			case '-':
			case '+':
			case '.':
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			case '~':
			case '^':
				var Out = Functions.provideDiagnosticsXYZ('teleport facing', item, lineIndex, collector, dm, document);

				if (Out[1] == false)
					return;

				Target = Out[0];

				break;

			default:
			case '"':
			case '@':
				
				dm.SelectorDiagnoser.provideDiagnostic(Target, lineIndex, collector, dm, document);
				break;
		}

		var checkForBlocks = Target.Child;

		//[checkForBlocks: Boolean]
		if (checkForBlocks == undefined) {
			return;
		}
		dm.BooleanDiagnoser?.provideDiagnostic(checkForBlocks, lineIndex, collector, dm, document);
	}
}
