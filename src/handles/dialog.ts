export function showOpenDialog (options: Electron.OpenDialogOptions): Promise<Electron.OpenDialogReturnValue> {
  return window.ipcRenderer.invoke('showOpenDialog', options)
}

export function showSaveDialog (options: Electron.SaveDialogOptions): Promise<Electron.SaveDialogReturnValue> {
  return window.ipcRenderer.invoke('showSaveDialog', options)
}

export function showMessageBox (options: Electron.MessageBoxOptions): Promise<Electron.MessageBoxReturnValue> {
  return window.ipcRenderer.invoke('showMessageBox', options)
}
