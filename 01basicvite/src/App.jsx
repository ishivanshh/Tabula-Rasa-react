import { useState } from "react"

function App() {
  // let counter = 15

  const [counter , setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const subValue = () => {
    setCounter(counter -1)
  }
  
  return (
    <>
    <h1>React Counter Application..</h1>
    <h3>Counter Value : {counter}</h3>
    <button onClick={addValue}> Add Value : </button> {" "}
    <button onClick={subValue} >Remove Value : </button>
    <p>footer : {counter} </p>
    </>
  )
}

export default App
