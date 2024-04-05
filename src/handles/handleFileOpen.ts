import { OpenDialogOptions } from "electron"

export default function handleFileOpen (options: OpenDialogOptions) {
  return window.ipcRenderer.invoke('dialog:openFile', options)
}