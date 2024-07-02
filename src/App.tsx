import { useState } from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import './App.css'
import Cards from './components/Cards/Cards'
import Popup from './components/Popup/Popup'

function App() {
  const [showPopup, setShowPopup] = useState(false)

  const closePopup = () => {
    setShowPopup(false)
  }

  const [popupDescription, setPopupDescription] = useState("")



  return (
    <>
    <Header/>
    <Popup type='read' showPopup={showPopup} closePopup={closePopup} description={popupDescription} />
    <Banner />
    <Cards setShowPopup={setShowPopup} setPopupDescription={setPopupDescription} />
    </>
  )
}

export default App
