import * as React from 'react'

export const initialState = {
  count: 0,
  data: [
    { url: 'https://google.com/'},
    { url: 'https://yahoo.com/'}
  ]
}
// export type StateType = typeof initialState
export type StateType = {
  count: number,
  data: Array<{
    url: string
  }>
}

export type ActionType = {
  type: string
  payload?: any
}

export const reducer : React.Reducer<StateType, ActionType> = (state, action) => {
  const { ... reduced } = state
  switch (action.type) {
    case 'reset':
      return {
        ...reduced,
        count: 0
      };
    case 'increment':
      return {
        ...reduced,
        count: state.count + 1
      };
    case 'decrement':
      return {
        ...reduced,
        count: state.count - 1
      };
    default:
      throw new Error("Not Implemented");
  }
}
