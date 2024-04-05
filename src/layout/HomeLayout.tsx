import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  GithubFilled,
  // LogoutOutlined,
  SettingFilled,
} from '@ant-design/icons'
import { PageContainer, ProLayout } from '@ant-design/pro-components'
import { Suspense, useState } from 'react'
import { routers } from '@/router/index'
// import { Dropdown } from 'antd'
import { Spin, Tooltip } from "antd"
import { homepage } from './../../package.json'
import config from '@/config/index'
import { useTranslation } from '@/hooks/useTranslation'
import useLocalStore from '@/hooks/localStore'
import type { ProSettings } from '@ant-design/pro-components'
import handleOpenUrl from '@/handles/handleOpenUrl'

const HomeLayout = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const { locale } = useLocalStore()

  const [collapsed, setCollapsed] = useState(false)

  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  }

  const onCollapseFn = (val: boolean) => {
    setCollapsed(val)
  }

  const settingClickFn = () => {
    navigate('/setting')
  }

  const githubClickFn = () => {
    handleOpenUrl(homepage)
  }

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        className="min-h-screen"
        locale={locale}
        title={config.title}
        logo={config.logo}
        siderWidth={216}
        route={routers}
        fixSiderbar={true}
        collapsed={collapsed}
        {...settings}
        location={{
          pathname,
        }}
        onCollapse={onCollapseFn}
        actionsRender={() => {
          return [
            <Tooltip title="设置" placement='bottom'>
              <SettingFilled key="SettingFilled" onClick={settingClickFn} />
            </Tooltip>,
            <Tooltip title="Github" placement='bottom'>
              <GithubFilled key="GithubFilled" onClick={githubClickFn} />
            </Tooltip>,
            <div className="w-4"></div>
          ];
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              navigate(item.path || '/');
            }}
          >
            {dom}
          </div>
        )}
      >
        <PageContainer>
          <Suspense fallback={
            <Spin tip={t('Loading')} size="large">
              <div className='w-full h-80'></div>
            </Spin>
          }>
            <Outlet />
          </Suspense>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default HomeLayout
