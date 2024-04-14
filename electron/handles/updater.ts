import { app } from 'electron'
import { autoUpdater } from 'electron-updater'

export function doUpdater () {
  autoUpdater.quitAndInstall()
  app.quit()
}