import React from 'react';
import logo from './logo.svg';
import './App.css';

import {GlobalProvider, GlobalContext} from './store'

import {initialState, reducer} from './reducer'

const Father: React.FC<{}> = (props) =>{
  const {state, dispatch} = React.useContext(GlobalContext)

  return (
    <div>
      <h1>
        Father : {state.count}
        <input type="button" onClick={()=>{dispatch({type: 'increment'})}} value="+"/>
        <input type="button" onClick={()=>{dispatch({type: 'decrement'})}} value="-"/>
        <input type="button" onClick={()=>{dispatch({type: 'reset'})}} value="reset"/>
      </h1>
      {props.children}
    </div>
  )
}

const Child: React.FC<{}> = (props) =>{
  const {state, dispatch} = React.useContext(GlobalContext)

  return (
    <div>
      <h1>
        Child : {state.count}
        <input type="button" onClick={()=>{dispatch({type: 'increment'})}} value="+"/>
        <input type="button" onClick={()=>{dispatch({type: 'decrement'})}} value="-"/>
        <input type="button" onClick={()=>{dispatch({type: 'reset'})}} value="reset"/>
      </h1>
      {props.children}
    </div>
  )
}

const GrandChild: React.FC<{}> = (props) =>{
  const {state, dispatch} = React.useContext(GlobalContext)

  return (
    <div>
      <h1>
        GrandChild : {state.count}
        <input type="button" onClick={()=>{dispatch({type: 'increment'})}} value="+"/>
        <input type="button" onClick={()=>{dispatch({type: 'decrement'})}} value="-"/>
        <input type="button" onClick={()=>{dispatch({type: 'reset'})}} value="reset"/>
      </h1>
      {props.children}
    </div>
  )
}


const Family: React.FC<{}> = (props) =>{
  return  (
      <Father>
        <Child>
          <GrandChild />
        </Child>
        <Child />
        <Child />
      </Father>
      )
}

const App = () => {
  return (
    <div className="App">
      <GlobalProvider value={{count: 100, data: []}}>
        <Family />
      </GlobalProvider>
    </div>
  );
}

export default App;
