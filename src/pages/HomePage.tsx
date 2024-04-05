import { useTranslation } from '@/hooks/useTranslation'

function HomePage () {
  const { t } = useTranslation()
  
  return (
    <div>{t('Welcome to React')}</div>
  )
}

export default HomePage
