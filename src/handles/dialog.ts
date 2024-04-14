import { OpenDialogOptions, OpenDialogReturnValue, SaveDialogOptions, SaveDialogReturnValue } from "electron"

export function showOpenDialog (options: OpenDialogOptions): Promise<OpenDialogReturnValue> {
  return window.ipcRenderer.invoke('showOpenDialog', options)
}

export function showSaveDialog (options: SaveDialogOptions): Promise<SaveDialogReturnValue> {
  return window.ipcRenderer.invoke('showSaveDialog', options)
}
