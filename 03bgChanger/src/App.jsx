import { useState } from 'react'

import './App.css'

function App() {
  const [color , setcolor] = useState("olive")

  function changeColor (color) {
    setcolor(color)
  }

  return (
    <div class="w-full h-screen duration-200 bg-amber-200" style={{backgroundColor: color}}>
      <div class="fixed flex flex-wrap justify-center bottom-40 px-50">
        <div class="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl">
          <button onClick={() => changeColor("red")} class= "outline-none px-4 py-1 rounded-full shadow-lg text-black">Red</button>
          <button onClick={() => changeColor("blue")}class= "outline-none px-4 py-1 rounded-full shadow-lg text-black">Blue</button>
          <button onClick={() => changeColor("pink")}class= "outline-none px-4 py-1 rounded-full shadow-lg text-black">Pink</button>
       </div>
      </div>
    </div>
  )
}

export default App
