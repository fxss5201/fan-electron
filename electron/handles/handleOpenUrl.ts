import { shell } from 'electron'

export default function handleOpenUrl (url: string) {
  shell.openExternal(url)
}
