import { dialog, OpenDialogOptions } from "electron"

export async function showOpenDialog (options: OpenDialogOptions) {
  return dialog.showOpenDialog(options)
}
