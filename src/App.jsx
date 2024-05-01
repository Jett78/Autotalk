import { useState } from 'react'
import './App.css'
import Most_read_section from "./components/Most_read_section"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Most_read_section />
    </>
  )
}

export default App
