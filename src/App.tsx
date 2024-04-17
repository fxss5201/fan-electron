import { Suspense, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { IntlProvider, FormattedMessage } from 'react-intl'
import { Spin, FloatButton } from 'antd'
import useLocalStore from '@/hooks/localStore'
import router from '@/router/index'
import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import zh_CN from 'antd/locale/zh_CN'
import en_GB from 'antd/locale/en_GB'
import localeMessage from '@/locales/index'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import './App.css'

const antLocaleObj = {
  'zh-CN': zh_CN,
  'en-US': en_GB
}

function App() {
  const { locale } = useLocalStore()
  useEffect(() => {
    if (locale === 'zh-CN') {
      dayjs.locale('zh-cn')
    } else {
      dayjs.locale('en')
    }
  }, [locale])

  return (
    <IntlProvider key={locale} locale={locale} messages={localeMessage[locale]}>
      <ConfigProvider theme={{ cssVar: true, hashed: false }} locale={antLocaleObj[locale]}>
        <Suspense fallback={
          <Spin tip={<FormattedMessage id="Loading"></FormattedMessage>} size="large">
            <div className='w-screen h-screen'></div>
          </Spin>
        }>
          <RouterProvider router={router} />
          <FloatButton.BackTop />
        </Suspense>
      </ConfigProvider>
    </IntlProvider>
  )
}

export default App
