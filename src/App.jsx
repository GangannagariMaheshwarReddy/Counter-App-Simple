import { useState } from "react"
import "./App.css"
function App() {

  const[ count , setCount ] =  useState(0)

  function increase() {
    setCount(count + 1)
  }

  function decrease() {
    setCount(count - 1)
  }

  return (
    <>
      <h2>My Counter App</h2>
      <button onClick = { () => increase() }> + </button>
      <h2>{count}</h2>
      <button onClick = { () => decrease() }> - </button>
    </>
  )
}

export default App

