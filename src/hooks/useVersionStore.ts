import { useAppSelector } from "@/hooks/storeHooks"

const useVersionStore = () => {
  const dialogShow = useAppSelector(state => state.versionStore.dialogShow)

  return {
    dialogShow
  }
}

export default useVersionStore