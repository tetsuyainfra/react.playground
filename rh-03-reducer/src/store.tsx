import * as React from 'react'

import {reducer, StateType, ActionType, initialState} from './reducer'

type StoreWithAction =  {
  state: StateType
  dispatch: React.Dispatch<ActionType>
}
export const GlobalContext = React.createContext<StoreWithAction>({
  state: initialState,
  dispatch: () => {}
})



export const GlobalProvider : React.FC<{value: StateType}> = (props) => {
  const [state, dispatch] = React.useReducer(reducer, props.value)

  return <GlobalContext.Provider value={{ state: state, dispatch: dispatch}}>
    {props.children}
  </GlobalContext.Provider>
}