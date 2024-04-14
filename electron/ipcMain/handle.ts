import { ipcMain, IpcMainInvokeEvent, OpenDialogOptions, SaveDialogOptions } from 'electron'
import { showOpenDialog, showSaveDialog } from '../handles/dialog'

export default function addIpcMainHandleFn () {
  ipcMain.handle('showOpenDialog', (event: IpcMainInvokeEvent, options: OpenDialogOptions) => {
    console.log(event)
    return showOpenDialog(options)
  })

  ipcMain.handle('showSaveDialog', (event: IpcMainInvokeEvent, options: SaveDialogOptions) => {
    console.log(event)
    return showSaveDialog(options)
  })
}
