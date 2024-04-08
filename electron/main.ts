import { app, BrowserWindow, ipcMain, IpcMainEvent, Menu, IpcMainInvokeEvent, OpenDialogOptions } from 'electron'
import path from 'node:path'
import { autoUpdater } from 'electron-updater'
import handleOpenUrl from './handles/handleOpenUrl'
import handleFileOpen from './handles/handleFileOpen'

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')
const isDev = process.env.NODE_ENV === 'development'

let win: BrowserWindow | null
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']


function sendStatusToWindow(text: string) {
  (win as BrowserWindow).webContents.send('message', text);
}

function createWindow() {
  win = new BrowserWindow({
    // mac标题栏
    titleBarStyle: 'hiddenInset',
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  win.webContents.openDevTools();

  if (!isDev) {
    Menu.setApplicationMenu(null)
  }

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', {
      versions: process.versions,
      platform: process.platform
    })
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'))
  }
}

autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...');
})
autoUpdater.on('update-available', (info) => {
  console.log(info)
  sendStatusToWindow('Update available.');
})
autoUpdater.on('update-not-available', (info) => {
  console.log(info)
  sendStatusToWindow('Update not available.');
})
autoUpdater.on('error', (err) => {
  sendStatusToWindow('Error in auto-updater. ' + err);
})
autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
  sendStatusToWindow(log_message);
})
autoUpdater.on('update-downloaded', (info) => {
  console.log(info)
  sendStatusToWindow('Update downloaded');
});

app.on('ready', function()  {
  autoUpdater.checkForUpdatesAndNotify();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(() => {
  ipcMain.on('open-url', (event: IpcMainEvent, url: string) => {
    console.log(event)
    handleOpenUrl(url)
  })

  ipcMain.handle('dialog:openFile', (event: IpcMainInvokeEvent, options: OpenDialogOptions) => {
    console.log(event)
    return handleFileOpen(options)
  })

  createWindow()
})
