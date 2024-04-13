import { OpenExternalOptions } from 'electron'

export function openExternal (url: string, options?: OpenExternalOptions | undefined): void {
  return window.ipcRenderer.send('openExternal', url, options)
}