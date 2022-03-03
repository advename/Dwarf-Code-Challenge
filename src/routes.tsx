import React from 'react'
import type { RouteObject } from 'react-router-dom'

import { Home } from './pages/Home/Home'

export const routes = (/* paramaters influencing the routes array */): RouteObject[] => [
  {
    path   : '/',
    element: <Home />,
  },
  {
    path   : '/contact',
    element: <Home />,
  },
]
