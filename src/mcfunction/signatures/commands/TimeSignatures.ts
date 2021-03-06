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

import { SignatureManager, SignatureItemProvider } from "../SignatureManager";
import * as vscode from "vscode";
import { SyntaxItem } from "../../../general/include";
import { SignatureHelp, ParameterInformation, SignatureInformation } from "vscode";
import { newItem } from "../Functions";

//No branching commands
export class TimeSignatureProvider implements SignatureItemProvider {

   public All: SignatureInformation[];

   public Add: SignatureInformation;
   public Set: SignatureInformation;
   public Query: SignatureInformation;

   constructor() {
      this.Add = newItem('time add <amount: int>', 'Changes or queries the world\'s game time.', [
         new ParameterInformation('add', ''),
         new ParameterInformation('<amount: int>', '')
      ]);

      this.Set = newItem('time set <time: TimeSpec|amount: int>', 'Changes or queries the world\'s game time.', [
         new ParameterInformation('set', ''),
         new ParameterInformation('<time: TimeSpec|amount: int>', '')
      ]);

      this.Query = newItem('time query <daytime|gametime|day>', 'Changes or queries the world\'s game time.', [
         new ParameterInformation('query', ''),
         new ParameterInformation('<daytime|gametime|day>', '')
      ]);

      this.All = [
         this.Add,
         this.Set,
         this.Query
      ]
   }

   provideSignature(Item: SyntaxItem, Sm: SignatureManager): vscode.ProviderResult<SignatureHelp> {

      var Mode = Item.Child;

      if (Mode == undefined) {
         var Out = new SignatureHelp();
         Out.signatures = this.All;
         Out.activeParameter = 0;
         return Out;
      }

      var Child = undefined;

      switch (Mode.Text.text) {
         case 'add':
            Child = this.Add;
            break;

         case 'set':
            Child = this.Set;
            break;

         case 'query':
            Child = this.Query;
            break;
      }

      var Count = Item.Count();

      if (Child == undefined) {
         var Out = new SignatureHelp();
         Out.signatures = this.All;
         Out.activeParameter = Count;
         return Out;
      }

      if (Count > Child.parameters.length)
         return undefined;

      Child.activeParameter = Count;

      var Out = new SignatureHelp();
      Out.signatures = [Child];
      Out.activeParameter = Count;

      return Out;
   }
}
