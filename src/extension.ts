'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "workspace-settings-bug" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.showSetting1', () => {
        if (!vscode.window.activeTextEditor) {
            vscode.window.showErrorMessage('must have an active text editor');
        }
        const uri = vscode.window.activeTextEditor.document.uri;
        const setting = vscode.workspace.getConfiguration('extension', uri).get<string>('setting1');
        vscode.window.showInformationMessage(`extension.setting1 is ${setting}`);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}