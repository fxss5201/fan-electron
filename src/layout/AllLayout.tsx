import { Outlet, ScrollRestoration } from 'react-router-dom';
import RouterExtend from '@/router/RouterExtend';
import { AliveScope } from 'react-activation';
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useIntl } from 'react-intl'
import { Modal } from 'antd'
import useVersionStore from '@/hooks/useVersionStore'
import { useEffect } from 'react';
import { doUpdater } from '@/handles/updater';

const AllLayout = () => {
  const [modal, contextHolder] = Modal.useModal()
  const intl = useIntl()
  const version = useVersionStore()
  
  useEffect(() => {
    const confirm = () => {
      modal.confirm({
        title: intl.formatMessage({id: 'app updates'}),
        icon: <ExclamationCircleOutlined />,
        content: intl.formatMessage({id: 'Discovered a new version, do you want to update it?'}),
        okText: intl.formatMessage({id: 'button.okText'}),
        cancelText: intl.formatMessage({id: 'button.cancelText'}),
        onOk() {
          doUpdater()
        },
      });
    }

    if (version !== window.versions.app) {
      confirm()
    }
  }, [version, modal, intl])

  return (
    <>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
      <AliveScope>
        <RouterExtend>
          <Outlet />
        </RouterExtend>
      </AliveScope>
      {contextHolder}
    </>
  )
};

export default AllLayout;
