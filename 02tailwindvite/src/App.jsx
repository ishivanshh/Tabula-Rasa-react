import { useState } from 'react'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 class = 'text-3xl font-bold underline bg-red-700'>IPL 20205</h1>
    <Card/>
    </>
  )
}

export default App
