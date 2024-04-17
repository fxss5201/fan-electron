import { ipcMain } from 'electron'
import { openExternal } from '../handles/shell'

export default function addIpcMainOnFn () {
  ipcMain.on('openExternal', (event: Electron.IpcMainEvent, url: string, options?: Electron.OpenExternalOptions | undefined) => {
    console.log(event)
    return openExternal(url, options)
  })
}
