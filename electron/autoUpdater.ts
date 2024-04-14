import { app, dialog, BrowserWindow } from 'electron'
import { UpdateDownloadedEvent, UpdateInfo, autoUpdater } from 'electron-updater'
import log from 'electron-log'

function checkUpdate(win: BrowserWindow){
  //检测更新
  autoUpdater.checkForUpdates()
  
  //监听'error'事件
  autoUpdater.on('error', (err) => {
    console.log(err)
  })
  
  //监听'update-available'事件，发现有新版本时触发
  autoUpdater.on('update-available', (res: UpdateInfo) => {
    console.log(res)
  })
  
  //默认会自动下载新版本，如果不想自动下载，设置autoUpdater.autoDownload = false
  
  //监听'update-downloaded'事件，新版本下载完成时触发
  autoUpdater.on('update-downloaded', (res: UpdateDownloadedEvent) => {
    log.info(res)
    // 统一采用前端页面提示
    dialog.showMessageBox({
      type: 'info',
      title: '应用更新',
      message: '发现新版本，是否更新？',
      buttons: ['是', '否']
    }).then((buttonIndex) => {
      if(buttonIndex.response == 0) {  //选择是，则退出程序，安装新版本
        autoUpdater.quitAndInstall()
        app.quit()
      }
    })
    win.webContents.on('did-finish-load', () => {
      win.webContents.send('updater', {
        version: res.version
      })
    })
  })
}

export default checkUpdate
