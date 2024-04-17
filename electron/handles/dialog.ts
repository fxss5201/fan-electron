import { dialog } from "electron"

export async function showOpenDialog (options: Electron.OpenDialogOptions) {
  return dialog.showOpenDialog(options)
}

export async function showSaveDialog (options: Electron.SaveDialogOptions) {
  return dialog.showSaveDialog(options)
}

export async function showMessageBox (options: Electron.MessageBoxOptions) {
  return dialog.showMessageBox(options)
}

export async function showErrorBox (title: string, content: string) {
  return dialog.showErrorBox(title, content)
}


