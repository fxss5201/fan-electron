import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Spin, FloatButton } from 'antd'
import { useTranslation } from 'react-i18next'
import router from '@/router/index'
import './App.css'

function App() {
  const { t } = useTranslation()
  return (
    <div>
      <Suspense fallback={
        <Spin tip={t('Loading')} size="large">
          <div className='w-screen h-screen'></div>
        </Spin>
      }>
        <RouterProvider router={router} />
        <FloatButton.BackTop />
      </Suspense>
    </div>
  )
}

export default App
