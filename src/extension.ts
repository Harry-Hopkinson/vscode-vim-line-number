import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "vim-line-numbers.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello World from vim-line-numbers!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
