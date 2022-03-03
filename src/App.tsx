import React, { useMemo } from 'react'

import { useRoutes } from 'react-router-dom'

import { Header } from './partials/Header'

import { routes } from './routes'

import './styles/index.scss'
/**
 * @returns {JSX.Element}
 */
function App (): JSX.Element {
  const constructedRoutes = useMemo(() => routes(), [])
  const routing           = useRoutes(constructedRoutes)

  return (
    <>
      <Header />
      {routing}
    </>

  )
}

export default App
