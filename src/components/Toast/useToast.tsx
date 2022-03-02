import { useToastDispatchContext } from './ToastContext'

import { ToastItemType } from './ToastItem'

/**
 * UseToast hook type definition.
 *
 * The "options" argument may contain a lifespan (time until to hide the message again) and title key.
 */
export type UseToastType = {
  /** Method that creates an info toast message. Accepts the message with options as an argument. */
  info: (message: ToastItemType['message'], options?: Partial<ToastItemType>) => void;
  /** Method that creates a success toast message. Accepts the message with options as an argument. */
  success: (message: ToastItemType['message'], options?: Partial<ToastItemType>) => void;
  /** Method that creates a warning toast message. Accepts the message with options as an argument. */
  warning: (message: ToastItemType['message'], options?: Partial<ToastItemType>) => void;
  /** Method that creates an error toast message. Accepts the message with options as an argument. */
  error: (message: ToastItemType['message'], options?: Partial<ToastItemType>) => void;
};

/**
 * Toast Hook.
 *
 * @example
 * function Component () {
 *   const toast = useToast()
 *   toast.info('Hello World')
 *   toast.error('This error is visible for 10 seconds', {
 *     lifespan: 10_000,
 *     title   : 'Important Error',
 *   })
 * }
 * @returns {UseToastType} Object with 4 methods: "info()", "warning()",
 * "success()" and "error()". Each one of them accepts a message parameter and options.
 */
export function useToast (): UseToastType {
  const dispatch            = useToastDispatchContext()
  const toast: UseToastType = {} as UseToastType

  for (const status of [
    'info',
    'success',
    'warning',
    'error',
  ]) {
    toast[status as keyof UseToastType] = (message, options = {}): void => {
      const id                  = Math.random().toString(36).slice(2, 11)
      const { lifespan, title } = options
      dispatch({
        type : 'ADD_TOAST',
        toast: {
          type: status.toUpperCase() as ToastItemType['type'], message, id, lifespan, title,
        },
      })
    }
  }

  return toast
}
