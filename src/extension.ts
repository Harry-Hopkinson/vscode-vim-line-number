import { ExtensionContext, window, StatusBarAlignment } from "vscode";

export function activate(context: ExtensionContext) {
  const statusBarItem = window.createStatusBarItem(
    StatusBarAlignment.Right,
    100
  );

  window.onDidChangeTextEditorSelection(() => {
    const editor = window.activeTextEditor;
    if (editor) {
      const position = editor.selection.active;
      const lineNumber = position.line + 1;
      const characterNumber = position.character + 1;
      const document = editor.document;
      const totalLines = document.lineCount;
      const percentage = ((lineNumber / totalLines) * 100).toFixed(0);
      statusBarItem.text = `Line ${lineNumber}:${characterNumber} ${percentage}% down`;
      statusBarItem.show();
    }
  });

  context.subscriptions.push(statusBarItem);
}
