import * as React from 'react'

import {StateType, initialState} from './reducer'

export const GlobalContext = React.createContext<StateType>(initialState)


export const GlobalProvider : React.FC<{value: StateType}> = (props) => {
  return <GlobalContext.Provider value={props.value}>
    {props.children}
  </GlobalContext.Provider>
}