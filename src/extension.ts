'use strict';
import * as vscode from 'vscode';
import Formatter from './formatter';

export function activate(context: vscode.ExtensionContext) {

  var formatter = new Formatter();

  vscode.workspace.onWillSaveTextDocument(() => {
    formatter.getConfig().get('beforeSave') && vscode.commands.executeCommand('xandeer.aligncode')
  })

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand( "xandeer.aligncode", (editor)=>{
      formatter.process( editor );
    } )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
