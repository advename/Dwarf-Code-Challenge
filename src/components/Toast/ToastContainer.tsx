import React from 'react'

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
    <div>
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
    </div>
  )
}

export {
  ToastContainer,
}
