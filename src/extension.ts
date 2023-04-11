import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );

  vscode.window.onDidChangeTextEditorSelection((event) => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      vscode.window.showInformationMessage("Hello Editor");
    } else {
      vscode.window.showErrorMessage("No Editor");
    }
  });

  context.subscriptions.push(statusBarItem);
}

export function deactivate() {}
