import { Form, Select } from 'antd'
import { useTranslation } from 'react-i18next'
import useLocalStore from '@/hooks/localStore'

type FieldType = {
  local?: string;
};

function SettingPage () {
  const { t } = useTranslation()
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
          label={t('changeLanguage')}
          name="local"
        >
          <Select options={localeList} onChange={handleLocalChange} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default SettingPage
