import type { Config } from '@/types/config'
import logo from '@/assets/logo.png'

const config: Config = {
  title: '泛应用',
  logo: logo,

  locale: 'zh-CN', // 设置默认语言，可选值 zh-CN/en-US
  isShowToggleLang: true,
  watermark: ['aaa'],
  // 没权限时跳转的 path ，默认值为'/403'，'/403' 或者 '/404'
  noAccessPath: '/403',
}

export default config
