interface localeFile {
  [key: string]: string
}

const modules = import.meta.glob<localeFile>(['./pages/**/*.ts', './en-US.ts', './zh-CN.ts'], {
  import: 'default',
  eager: true
})

const locales = {
  'en-US': {},
  'zh-CN': {}
}

for (const path in modules) {
  if (path.includes('en-US')) {
    Object.assign(locales['en-US'], modules[path])
  } else if (path.includes('zh-CN')) {
    Object.assign(locales['zh-CN'], modules[path])
  }
}

export default locales
