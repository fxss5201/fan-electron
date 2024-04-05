export default function handleOpenUrl (url: string) {
  window.ipcRenderer.send('open-url', url)
}