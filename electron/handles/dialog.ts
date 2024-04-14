import { dialog, OpenDialogOptions, SaveDialogOptions } from "electron"

export async function showOpenDialog (options: OpenDialogOptions) {
  return dialog.showOpenDialog(options)
}

export async function showSaveDialog (options: SaveDialogOptions) {
  return dialog.showSaveDialog(options)
}
