import type { Config } from '@/types/config'

const config: Config = {
  locale: 'zhCN', // 设置默认语言，可选值 zhCN/enGb
  isShowToggleLang: true,
  watermark: ['aaa'],
  // 没权限时跳转的 path ，默认值为'/403'，'/403' 或者 '/404'
  noAccessPath: '/403',
}

export default config
