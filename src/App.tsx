import { useState } from 'react'
import HeaderChuck from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderChuck />
    </>
  )
}

export default App
