import React, { useEffect, useState } from 'react'

import { Toast as BSToast } from 'react-bootstrap'

type ToastTypeInfo = 'INFO'
type ToastTypeSuccess = 'SUCCESS'
type ToastTypeWarning = 'WARNING'
type ToastTypeError = 'ERROR'

/**
 * UseToast hook type definition.
 */
type ToastItemType = {
  /** ID of the specific toast modal item. */
  id: string;
  /** Title of the modal box. */
  title?: string;
  /** Modal type. */
  type: ToastTypeInfo | ToastTypeSuccess | ToastTypeWarning | ToastTypeError;
  /** Message. */
  message: string | JSX.Element;
  /** Lifetime in ms. */
  lifespan?: number;
};

/**
 * Mapping of types and their Bootstrap color variants.
 */
const typeVariants = {
  INFO   : 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR  : 'danger',
}

/**
 * Single Toast Modal box.
 *
 * @param {ToastItemType} options
 * @param {ToastItemType.title} options.title
 * @param {ToastItemType.type} options.type
 * @param {ToastItemType.message} options.message
 * @param {ToastItemType.lifespan} options.lifespan
 * @returns {JSX.Element}
 */
function ToastItem ({ title, type = 'INFO', message, lifespan = 4000 }: ToastItemType): JSX.Element {
  const [show, setShow] = useState(true)

  const getTitle = (): string => {
    return title || type.charAt(0).toUpperCase() + type.slice(1)
  }

  return (
    <BSToast
      autohide
      bg={typeVariants[type]}
      delay={lifespan}
      onClose={(): void => setShow(false)}
      show={show}
    >
      <BSToast.Header>
        <strong className='me-auto'>
          {getTitle()}
        </strong>
      </BSToast.Header>
      {message
        && (
          <BSToast.Body>
            {message}
          </BSToast.Body>
        )}
    </BSToast>
  )
}

export type {
  ToastItemType,
}

export {
  ToastItem,
}
