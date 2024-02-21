import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCounter] = useState(0);

  const addValue = () => {
    count = count + 1;
    if(count > 20){
      count = 20;
      return;
    }
    setCounter(count);
  }

  const reduceValue = () => {
    count = count - 1;
    if(count < 0){
      count = 0;
      return;
    }
    setCounter(count);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {count}</h2>
      
      <button onClick={addValue}>Add Vaue</button>
      <br />
      <br />
      <button onClick={reduceValue}>Reduce Value</button>
    </>
  )
}

export default App
