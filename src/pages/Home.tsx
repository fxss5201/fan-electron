import { useTranslation } from 'react-i18next'

function HomePage () {
  const { t } = useTranslation()
  
  return (
    <div>{t('Welcome to React')}</div>
  )
}

export default HomePage
