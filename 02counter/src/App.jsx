import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  let addValue = () => {
    console.log("clicked", counter);
    setCounter(counter+1)
  }

  let removeValue = () => {
    setCounter(counter-1)
  }
  

  return (
    <>
       
        <h1>chai aur react</h1>
        <h2>counter value: {counter}</h2>

        <button
        onClick={addValue}
        >add value {counter}</button>
        <br />
        <button
        onClick={removeValue}
        >remove value {counter}</button>
        <p>footer : {counter}</p>
    </>
  )
}

export default App
