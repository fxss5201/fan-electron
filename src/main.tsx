import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store'
import { setVersion } from './store/versionStore.ts'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})

window.ipcRenderer.on('updater', (_event, message) => {
  console.log('message', message)
  store.dispatch(setVersion(message.version))
})
