import React from 'react';
import logo from './logo.svg';
import './App.css';

import {GlobalProvider, GlobalContext} from './store'

const Father: React.FC<{}> = (props) =>{
  const state = React.useContext(GlobalContext)

  return (
    <div>
      <h1>Father : {state.count}</h1>
      {props.children}
    </div>
  )
}

const Child: React.FC<{}> = (props) =>{
  const state = React.useContext(GlobalContext)

  return (
    <div>
      <h2>Child : {state.count}</h2>
      {props.children}
    </div>
  )
}

const GrandChild: React.FC<{}> = (props) =>{
  const state = React.useContext(GlobalContext)

  return (
    <div>
      <h3>Child : {state.count}</h3>
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
