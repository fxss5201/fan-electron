import { Button, Flex } from 'antd'
import handleFileOpen from '@/handles/handleFileOpen'
import { useState } from 'react'

function DialogOpenFilePage () {
  const [filePath, setFilePath] = useState('')

  const handleFileOpenFn = async () => {
    const filePath = await handleFileOpen({
      title: '选择文件',
      buttonLabel: '确定',
      properties: ['openFile']
    })
    setFilePath(filePath)
  }

  const [filePathDirectory, setFilePathDirectory] = useState('')

  const handleFileOpenDirectoryFn = async () => {
    const filePath = await handleFileOpen({
      title: '选择文件夹',
      buttonLabel: '确定',
      properties: ['openDirectory']
    })
    setFilePathDirectory(filePath)
  }
  
  return (
    <>
      <Flex gap="small" wrap="wrap">
        <Button type="primary" onClick={handleFileOpenFn}>选择文件</Button>
        <div>文件地址：{filePath}</div>
      </Flex>
      <Flex gap="small" wrap="wrap" className="mt-2">
        <Button type="primary" onClick={handleFileOpenDirectoryFn}>选择文件夹</Button>
        <div>文件地址：{filePathDirectory}</div>
      </Flex>
    </>
  )
}

export default DialogOpenFilePage
