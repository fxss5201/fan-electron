import { shell, OpenExternalOptions } from 'electron'

export function openExternal (url: string, options?: OpenExternalOptions | undefined) {
  return shell.openExternal(url, options)
}
