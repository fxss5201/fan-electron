import { shell } from 'electron'

export function openExternal (url: string, options?: Electron.OpenExternalOptions | undefined) {
  return shell.openExternal(url, options)
}
