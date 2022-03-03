import React from 'react'

import { ToastContainer as BSToastContainer } from 'react-bootstrap'
import { ToastItem } from './ToastItem'

import { useToastStateContext } from './ToastContext'

/**
 * ToastContainer Component.
 *
 * The wrapper around multiple toast modal items.
 *
 * @returns {JSX.Element}
 */
function ToastContainer (): JSX.Element {
  const { toasts } = useToastStateContext()
  return (
    <BSToastContainer
      position='bottom-end'
      style={{ margin: '10px' }}
    >
      {toasts
        && toasts.map((toast) => (
          <ToastItem
            id={toast.id}
            key={toast.id}
            lifespan={toast.lifespan}
            message={toast.message}
            type={toast.type}
          />
        ))}
    </BSToastContainer>
  )
}

export {
  ToastContainer,
}
