import { useState } from 'react'

import { Button } from './components/Button'
import './App.css'

function App() {
  const [ counter, setCounter] = useState(0)

  function handleIncrement() {
    setCounter(counter + 1);
  }

  function handleDecrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <h2>{counter}</h2>
      <Button className="decrement" content=" - Decrement " handleClick={handleDecrement}/>
      <Button className="increment" content=" + Increment " handleClick={handleIncrement}/>
    </div>
  )
}

export default App
