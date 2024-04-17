import { Button, Flex } from 'antd'
import { showOpenDialog, showSaveDialog, showMessageBox, showErrorBox } from '@/handles/dialog' 
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

  type messageBoxType = 'info' | 'error' | 'question' | 'warning'
  const messageBoxTypes: messageBoxType[] = ['info', 'error', 'question', 'warning']
  const showMessageBoxFn = async (type: messageBoxType) => {
    const { response } = await showMessageBox({
      title: intl.formatMessage({id: 'messageBox title'}),
      message: intl.formatMessage({id: 'messageBox message'}),
      type,
      // buttons: [intl.formatMessage({id: 'button.okText'}), intl.formatMessage({id: 'button.cancelText'})]
      buttons: ['ok', 'cancel']
    })
    alert(`response: ${response}`)
  }
  const showMessageBoxCheckboxFn = async () => {
    const { response, checkboxChecked } = await showMessageBox({
      title: intl.formatMessage({id: 'messageBox title'}),
      message: intl.formatMessage({id: 'messageBox message'}),
      checkboxLabel: 'checkboxLabel',
      checkboxChecked: false,
      // buttons: [intl.formatMessage({id: 'button.okText'}), intl.formatMessage({id: 'button.cancelText'})]
      buttons: ['ok', 'cancel']
    })
    alert(`response: ${response}, checkboxChecked: ${checkboxChecked}`)
  }

  const showErrorBoxFn = async () => {
    await showErrorBox(intl.formatMessage({id: 'ErrorBox title'}), intl.formatMessage({id: 'ErrorBox content'}))
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

      <div className="mb-2">
        <div className="text-xl pb-2 border-b border-slate-300">showMessageBox</div>
        <div className="pt-2">
          <Flex gap="small" wrap="wrap">
            {messageBoxTypes.map(item => {
              return (
                <Button key={item} type="primary" onClick={() => showMessageBoxFn(item)}>
                  <FormattedMessage id='open messageBox' values={{name: item}}></FormattedMessage>
                </Button>
              )
            })}
          </Flex>
          <div className="mt-2">
            <Button type="primary" onClick={showMessageBoxCheckboxFn}>
              <FormattedMessage id='open messageBox checkbox'></FormattedMessage>
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div className="text-xl pb-2 border-b border-slate-300">showErrorBox</div>
        <div className="pt-2">
          <Button type="primary" onClick={showErrorBoxFn}>
            <FormattedMessage id='open showErrorBox'></FormattedMessage>
          </Button>
        </div>
      </div>
    </>
  )
}

export default DialogOpenFilePage
