import { useState } from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import './App.css'
import Cards from './components/Cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Banner />
    <Cards />
    </>
  )
}

export default App
