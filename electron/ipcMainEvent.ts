import { shell, ipcMain, IpcMainEvent } from 'electron'

ipcMain.on('open-url', (event: IpcMainEvent, url: string) => {
  shell.openExternal(url);
})
