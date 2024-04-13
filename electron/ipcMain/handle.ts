import { ipcMain, IpcMainInvokeEvent, OpenDialogOptions } from 'electron'
import { showOpenDialog } from '../handles/dialog'

export default function addIpcMainHandleFn () {
  ipcMain.handle('showOpenDialog', (event: IpcMainInvokeEvent, options: OpenDialogOptions) => {
    console.log(event)
    return showOpenDialog(options)
  })
}
