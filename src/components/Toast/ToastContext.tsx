import React, { createContext, useContext, useReducer } from 'react'

import { ToastItemType } from './ToastItem'

type State = {
  toasts: ToastItemType[];
};

type Action = {
  type: 'ADD_TOAST';
  toast: ToastItemType;
  label?: string;
};

const initialState: State = { toasts: [] }

const ToastStateContext    = createContext<State>(initialState)
const ToastDispatchContext = createContext<React.Dispatch<Action>>(() => initialState)

/**
 * @param {State} state
 * @param {Action} action
 * @returns {State & { toasts: ToastItemType[] }}
 */
function ToastReducer (state: State, action: Action): State & { toasts: ToastItemType[] } {
  switch (action.type) {
    case 'ADD_TOAST': {
      return {
        ...state,
        toasts: [...state.toasts, action.toast],
      }
    }
    // room for more actions if needed
    default: {
      throw new Error('Unhandable action type on the Toast. Check your arguments')
    }
  }
}

/**
 *
 * @param {{ children: JSX.Element }} options
 * @param {JSX.Element} options.children
 * @returns {JSX.Element}
 */
export function ToastProvider ({ children }: { children: JSX.Element }): JSX.Element {
  const [state, dispatch] = useReducer(ToastReducer, { toasts: [] })
  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  )
}

export const useToastStateContext = (): State => useContext(ToastStateContext)
export const useToastDispatchContext = (): React.Dispatch<Action> => useContext(ToastDispatchContext)
