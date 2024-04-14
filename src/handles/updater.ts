export function doUpdater (): void {
  return window.ipcRenderer.send('doUpdater')
}