import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  GithubFilled,
  // LogoutOutlined,
  SettingFilled
} from '@ant-design/icons'
import { PageContainer, ProLayout } from '@ant-design/pro-components'
import { Suspense, useState } from 'react'
import { routers } from '@/router/index'
// import { Dropdown } from 'antd'
import { Spin, Tooltip } from "antd"
import { homepage } from './../../package.json'
import config from '@/config/index'
import { useTranslation } from 'react-i18next';

const HomeLayout = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const [collapsed, setCollapsed] = useState(false)

  const onCollapseFn = (val: boolean) => {
    setCollapsed(val)
  }

  const settingClickFn = () => {
    navigate('/setting')
  }

  const githubClickFn = () => {
    window.ipcRenderer.send('open-url', homepage)
  }

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        className="min-h-screen"
        title={config.title}
        logo={config.logo}
        siderWidth={216}
        route={routers}
        fixSiderbar={true}
        collapsed={collapsed}
        location={{
          pathname,
        }}
        onCollapse={onCollapseFn}
        actionsRender={() => {
          return [
            <Tooltip title="设置" placement={collapsed ? 'right' : 'top'}>
              <SettingFilled key="SettingFilled" onClick={settingClickFn} />
            </Tooltip>,
            <Tooltip title="Github" placement={collapsed ? 'right' : 'top'}>
              <GithubFilled key="GithubFilled" onClick={githubClickFn} />
            </Tooltip>,
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
        // avatarProps={{
        //   src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        //   title: '七妮妮',
        //   size: 'small',
        //   render: (props, dom) => {
        //     return (
        //       <Dropdown
        //         menu={{
        //           items: [
        //             {
        //               key: 'logout',
        //               icon: <LogoutOutlined />,
        //               label: '退出登录',
        //             },
        //           ],
        //         }}
        //       >
        //         {dom}
        //       </Dropdown>
        //     );
        //   },
        // }}
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
