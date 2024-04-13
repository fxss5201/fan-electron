import { ipcRenderer, contextBridge } from 'electron'
import { version } from './../package.json'

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('ipcRenderer', {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args
    return ipcRenderer.on(channel, (event, ...args) => listener(event, ...args))
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args
    return ipcRenderer.off(channel, ...omit)
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args
    return ipcRenderer.send(channel, ...omit)
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args
    return ipcRenderer.invoke(channel, ...omit)
  }

  // You can expose other APTs you need here.
  // ...
})

contextBridge.exposeInMainWorld('versions', {
  app: version,
  node: process.versions.node,
  chrome: process.versions.chrome,
  electron: process.versions.electron
  // 除函数之外，我们也可以暴露变量
})
