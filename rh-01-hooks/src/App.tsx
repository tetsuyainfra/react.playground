import React from 'react';
import logo from './logo.svg';
import './App.css';


const Counter = () => {
  const [count, setCount] = React.useState(0)
  return <div>
    <input type="button" onClick={()=>{setCount(count - 1)}} value="-"/>
    <input type="button" onClick={()=>{setCount(count + 1)}} value="+"/>
    <br />
    <input type="text" value={count} />
  </div>
}


const App = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
