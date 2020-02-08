import * as React from 'react'

import {reducer, StateType, ActionType, initialState} from './reducer'

type StoreWithAction =  {
  state: StateType
  dispatch: React.Dispatch<ActionType>
}

export const stateContext = React.createContext<StateType>(initialState)

export const dispatchContext = React.createContext<React.Dispatch<ActionType>>(()=>true)

export const defaultInitialize = (state: StateType) : StateType => {
  console.log('defaultInitalize()', state)
  return state
}


type GlobalProviderProps = {
  value?: StateType
  init?: (state: StateType) => StateType
}

export const GlobalProvider : React.FC<GlobalProviderProps> = (props) => {
  const {value, init} = props
  const [state, dispatch] = React.useReducer(reducer, value ? value : initialState, init ? init : defaultInitialize)

  console.log('GlobalProvider')

  return (
    <dispatchContext.Provider value={dispatch} >
      <stateContext.Provider value={state} >
        {props.children}
      </stateContext.Provider>
    </dispatchContext.Provider>
  )
}