import React from 'react'

import './styles/index.scss'

import { ToastProvider } from './components/Toast'
import { Header } from './partials/Header'

/**
 * @returns {JSX.Element}
 */
function App (): JSX.Element {
  return (
    <ToastProvider>
      <>
        <Header />
        asdasdsad
      </>

    </ToastProvider>
  )
}

export default App
