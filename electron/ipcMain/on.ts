import { ipcMain, IpcMainEvent, OpenExternalOptions } from 'electron'
import { openExternal } from '../handles/shell'

export default function addIpcMainOnFn () {
  ipcMain.on('openExternal', (event: IpcMainEvent, url: string, options?: OpenExternalOptions | undefined) => {
    console.log(event)
    return openExternal(url, options)
  })
}
