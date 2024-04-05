import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks"
import { changeLocale } from '@/store/localeStore'
import { localeType } from '@/types';

const useLocalStore = () => {
  const locale = useAppSelector(state => state.localeStore.value)
  const localeList = useAppSelector(state => state.localeStore.list)
  const dispatch = useAppDispatch()
  const localChange = (val: localeType) => {
    dispatch(changeLocale(val))
  }
  return {
    locale,
    localeList,
    localChange
  }
}

export default useLocalStore
