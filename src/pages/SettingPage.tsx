import { Card, Space, Form, Select } from 'antd'
import { FormattedMessage, useIntl } from 'react-intl'
import useLocalStore from '@/hooks/localStore'
import { useState } from 'react';

type FieldType = {
  local?: string;
};

type ItemVersionType = 'app' | 'chrome' | 'node' | 'electron'
const itemVersionList: ItemVersionType[] = ['app', 'chrome', 'node', 'electron']

function SettingPage () {
  const { locale: localeDefault, localeList, localChange: handleLocalChange } = useLocalStore()
  const intl = useIntl()
  const [versionsMap] = useState(window.versions)

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <Card size="small" title={intl.formatMessage({id: 'language'})}>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 4 }}
          autoComplete="off"
          initialValues={{local: localeDefault}}
        >
          <Form.Item<FieldType>
            label={<FormattedMessage id='changeLanguage'></FormattedMessage>}
            name="local"
          >
            <Select options={localeList} onChange={handleLocalChange} />
          </Form.Item>
        </Form>
      </Card>
      <Card size="small" title={intl.formatMessage({id: 'version'})}>
        {
          itemVersionList.map(item => {
            return (
              <p className="flex">
                <div className="w-32 text-right mr-2">
                  <FormattedMessage id='itemVersion' values={{ name: item }}></FormattedMessage>
                </div>
                <div>{versionsMap[item]}</div>
              </p>
            )
          })
        }
      </Card>
    </Space>
  )
}

export default SettingPage
