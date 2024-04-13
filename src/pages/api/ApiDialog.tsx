import { Button, Flex } from 'antd'
import { showOpenDialog } from '@/handles/dialog' 
import { useState } from 'react'

function DialogOpenFilePage () {
  const [filePath, setFilePath] = useState('')

  const showOpenDialogFn = async () => {
    const { canceled, filePaths } = await showOpenDialog({
      title: '选择文件',
      buttonLabel: '确定',
      properties: ['openFile']
    })
    if (!canceled) {
      setFilePath(filePaths[0])
    }
  }

  const [filePathDirectory, setFilePathDirectory] = useState('')

  const showOpenDialogDirectoryFn = async () => {
    const { canceled, filePaths } = await showOpenDialog({
      title: '选择文件夹',
      buttonLabel: '确定',
      properties: ['openDirectory']
    })
    if (!canceled) {
      setFilePathDirectory(filePaths[0])
    }
  }
  
  return (
    <>
      <Flex gap="small" wrap="wrap">
        <Button type="primary" onClick={showOpenDialogFn}>选择文件</Button>
        <div>文件地址：{filePath}</div>
      </Flex>
      <Flex gap="small" wrap="wrap" className="mt-2">
        <Button type="primary" onClick={showOpenDialogDirectoryFn}>选择文件夹</Button>
        <div>文件地址：{filePathDirectory}</div>
      </Flex>
    </>
  )
}

export default DialogOpenFilePage
