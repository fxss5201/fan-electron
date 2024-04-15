import { dialog, OpenDialogOptions, SaveDialogOptions, MessageBoxOptions } from "electron"

export async function showOpenDialog (options: OpenDialogOptions) {
  return dialog.showOpenDialog(options)
}

export async function showSaveDialog (options: SaveDialogOptions) {
  return dialog.showSaveDialog(options)
}

export async function showMessageBox (options: MessageBoxOptions) {
  return dialog.showMessageBox(options)
}
