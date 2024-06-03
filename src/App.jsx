import { useState } from 'react'
import './App.css'
import Clock from './components/Clock'

function App() {
  const [count, setCount] = useState(1)
  const clocks = Array.from({ length: count }).map((_, i) => (
    <>
      <Clock key={i} />
    </>
  ))
  const addClock = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>ZUOHAI ZHANG</h1>
      {clocks}
      <button onClick={addClock}>Add a Clock</button>
    </>
  )
}


export default App
