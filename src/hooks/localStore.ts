import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks"
import { changeLocale } from '@/store/localeStore'

const useLocalStore = () => {
  const locale = useAppSelector(state => state.localeStore.value)
  const localeList = useAppSelector(state => state.localeStore.list)
  const dispatch = useAppDispatch()
  const localChange = (val: string) => {
    dispatch(changeLocale(val))
  }
  return {
    locale,
    localeList,
    localChange
  }
}

export default useLocalStore
