import { ipcMain } from 'electron'
import { showOpenDialog, showSaveDialog, showMessageBox, showErrorBox } from '../handles/dialog'

export default function addIpcMainHandleFn () {
  ipcMain.handle('showOpenDialog', (event: Electron.IpcMainInvokeEvent, options: Electron.OpenDialogOptions) => {
    console.log(event)
    return showOpenDialog(options)
  })

  ipcMain.handle('showSaveDialog', (event: Electron.IpcMainInvokeEvent, options: Electron.SaveDialogOptions) => {
    console.log(event)
    return showSaveDialog(options)
  })

  ipcMain.handle('showMessageBox', (event: Electron.IpcMainInvokeEvent, options: Electron.MessageBoxOptions) => {
    console.log(event)
    return showMessageBox(options)
  })

  ipcMain.handle('showErrorBox', (event: Electron.IpcMainInvokeEvent, title: string, content: string) => {
    console.log(event)
    return showErrorBox(title, content)
  })
}
