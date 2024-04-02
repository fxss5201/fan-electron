import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Spin, FloatButton } from 'antd'
import { useTranslation } from 'react-i18next'
import router from '@/router/index'
import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import './App.css'

dayjs.locale('zh-cn')

function App() {
  const { t } = useTranslation()
  return (
    <ConfigProvider theme={{ cssVar: true, hashed: false }} locale={zhCN}>
      <Suspense fallback={
        <Spin tip={t('Loading')} size="large">
          <div className='w-screen h-screen'></div>
        </Spin>
      }>
        <RouterProvider router={router} />
        <FloatButton.BackTop />
      </Suspense>
    </ConfigProvider>
  )
}

export default App
