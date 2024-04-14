import { Button, Flex } from 'antd'
import { showOpenDialog, showSaveDialog } from '@/handles/dialog' 
import { useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

function DialogOpenFilePage () {
  const intl = useIntl()
  const [filePath, setFilePath] = useState('')

  const showOpenDialogFn = async () => {
    const { canceled, filePaths } = await showOpenDialog({
      title: intl.formatMessage({id: 'Choose File'}),
      buttonLabel: intl.formatMessage({id: 'button.okText'}),
      properties: ['openFile']
    })
    if (!canceled) {
      setFilePath(filePaths[0])
    }
  }

  const [filePathDirectory, setFilePathDirectory] = useState('')

  const showOpenDialogDirectoryFn = async () => {
    const { canceled, filePaths } = await showOpenDialog({
      title: intl.formatMessage({id: 'Choose Folder'}),
      buttonLabel: intl.formatMessage({id: 'button.okText'}),
      properties: ['openDirectory']
    })
    if (!canceled) {
      setFilePathDirectory(filePaths[0])
    }
  }

  const [fileSavePath, setFileSavePath] = useState('')
  const showSaveDialogFn = async () => {
    const { canceled, filePath } = await showSaveDialog({
      title: intl.formatMessage({id: 'Choose File'}),
      buttonLabel: intl.formatMessage({id: 'button.okText'})
    })
    if (!canceled) {
      setFileSavePath(filePath as string)
    }
  }
  
  return (
    <>
      <div className="mb-2">
        <div className="text-xl pb-2 border-b border-slate-300">showOpenDialog</div>
        <div className="pt-2">
          <Flex gap="small" wrap="wrap">
            <Button type="primary" onClick={showOpenDialogFn}>
              <FormattedMessage id='Choose File'></FormattedMessage>
            </Button>
            <div className="leading-8"><FormattedMessage id='File address'></FormattedMessage>{filePath}</div>
          </Flex>
          <Flex gap="small" wrap="wrap" className="mt-2">
            <Button type="primary" onClick={showOpenDialogDirectoryFn}>
              <FormattedMessage id='Choose Folder'></FormattedMessage>
            </Button>
            <div className="leading-8"><FormattedMessage id='File address'></FormattedMessage>{filePathDirectory}</div>
          </Flex>
        </div>
      </div>

      <div className="mb-2">
        <div className="text-xl pb-2 border-b border-slate-300">showSaveDialog</div>
        <div className="pt-2">
          <Flex gap="small" wrap="wrap">
            <Button type="primary" onClick={showSaveDialogFn}>
              <FormattedMessage id='save File'></FormattedMessage>
            </Button>
            <div className="leading-8"><FormattedMessage id='File address'></FormattedMessage>{fileSavePath}</div>
          </Flex>
        </div>
      </div>
    </>
  )
}

export default DialogOpenFilePage
