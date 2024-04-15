import { ipcMain, IpcMainInvokeEvent } from 'electron'
import { showOpenDialog, showSaveDialog, showMessageBox } from '../handles/dialog'

export default function addIpcMainHandleFn () {
  ipcMain.handle('showOpenDialog', (event: IpcMainInvokeEvent, options: Electron.OpenDialogOptions) => {
    console.log(event)
    return showOpenDialog(options)
  })

  ipcMain.handle('showSaveDialog', (event: IpcMainInvokeEvent, options: Electron.SaveDialogOptions) => {
    console.log(event)
    return showSaveDialog(options)
  })

  ipcMain.handle('showMessageBox', (event: IpcMainInvokeEvent, options: Electron.MessageBoxOptions) => {
    console.log(event)
    return showMessageBox(options)
  })
}
