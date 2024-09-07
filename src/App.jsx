import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(10)
  let addvalue=()=>{
    setcounter(counter+1)
  }
  let removeValue=()=>{
    setcounter(counter-1)
  }

  

  return (
  <>
    <h1>I am creating a project of counter increament and decreament value using hook</h1>
    <h2>Counter value :{counter}</h2>

    <button onClick={addvalue}>add counter :{counter}</button>
    <br />
    <br />
    <button onClick={removeValue}>remove counter :{counter}</button>

  </>
  )
  }

export default App
