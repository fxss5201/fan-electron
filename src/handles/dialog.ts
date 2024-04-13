import { OpenDialogOptions, OpenDialogReturnValue } from "electron"

export function showOpenDialog (options: OpenDialogOptions): Promise<OpenDialogReturnValue> {
  return window.ipcRenderer.invoke('showOpenDialog', options)
}
