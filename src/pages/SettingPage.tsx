import { Form, Select } from 'antd'
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks"
import { useTranslation } from 'react-i18next'
import { changeLocale } from '@/store/localeStore';

type FieldType = {
  local?: string;
};

function SettingPage () {
  const { t } = useTranslation()
  const localeDefault = useAppSelector(state => state.localeStore.value)
  const localeList = useAppSelector(state => state.localeStore.list)
  const dispatch = useAppDispatch()

  const handleLocalChange = (val: string) => {
    dispatch(changeLocale(val))
  }

  return (
    <div className="bg-white">
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
