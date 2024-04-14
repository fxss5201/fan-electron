import { useAppSelector } from "@/hooks/storeHooks"

const useVersionStore = () => {
  const version = useAppSelector(state => state.versionStore.value)

  return version
}

export default useVersionStore