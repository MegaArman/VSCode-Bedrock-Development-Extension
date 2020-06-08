import * as vscode from 'vscode';
import { DiagnosticsManager,DiagnosticProvider, Errors } from '../DiagnosticsManager';
import { SyntaxItem } from '../../../general/include';

export class MeDiagnosticProvider implements DiagnosticProvider {

	//provides diagnostics
	provideDiagnostic(item: SyntaxItem, lineIndex: number, collector: vscode.Diagnostic[], dm: DiagnosticsManager, document: vscode.TextDocument) : void {
		var Message = item.Child;

		//<message: message>
		if (Message == undefined) {
			Errors.Missing('string', 'me', lineIndex, item, collector);
			return;
		}
	}
}