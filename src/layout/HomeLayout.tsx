import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  GithubFilled,
  SettingFilled,
} from '@ant-design/icons'
import { PageContainer, ProLayout } from '@ant-design/pro-components'
import { Suspense, useState } from 'react'
import { routers } from '@/router/index'
import { Spin, Tooltip, Drawer } from "antd"
import { homepage } from './../../package.json'
import config from '@/config/index'
import { FormattedMessage, useIntl } from 'react-intl'
import useLocalStore from '@/hooks/localStore'
import type { ProSettings } from '@ant-design/pro-components'
import { openExternal } from '@/handles/shell'
import SettingPage from '@/pages/SettingPage'

const HomeLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const { locale } = useLocalStore()
  const intl = useIntl()

  const [collapsed, setCollapsed] = useState(false)

  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
    menu: { locale: true },
  }

  const onCollapseFn = (val: boolean) => {
    setCollapsed(val)
  }

  // const settingClickFn = () => {
  //   navigate('/setting')
  // }

  const githubClickFn = () => {
    openExternal(homepage)
  }

  const [drawerOpen, setDrawerOpen] = useState(false)
  const showDrawer = () => {
    setDrawerOpen(true)
  }
  const onDrawerClose = () => {
    setDrawerOpen(false)
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
        formatMessage={(message) => intl.formatMessage(message)}
        title={intl.formatMessage({id: config.title})}
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
            <Tooltip title={<FormattedMessage id="menu.setting"></FormattedMessage>} placement='bottom'>
              <SettingFilled key="SettingFilled" onClick={showDrawer} />
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
            <Spin tip={<FormattedMessage id="Loading"></FormattedMessage>} size="large">
              <div className='w-full h-80'></div>
            </Spin>
          }>
            <Outlet />
          </Suspense>
        </PageContainer>
      </ProLayout>
      <Drawer title={intl.formatMessage({id: 'menu.setting'})} onClose={onDrawerClose} open={drawerOpen} width="50%">
        <SettingPage></SettingPage>
      </Drawer>
    </div>
  );
};

export default HomeLayout
