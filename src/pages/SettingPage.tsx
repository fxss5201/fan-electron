import { Form, Select } from 'antd'
import { FormattedMessage } from 'react-intl'
import useLocalStore from '@/hooks/localStore'

type FieldType = {
  local?: string;
};

function SettingPage () {
  const { locale: localeDefault, localeList, localChange: handleLocalChange } = useLocalStore()

  return (
    <div>
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
    </div>
  )
}

export default SettingPage
