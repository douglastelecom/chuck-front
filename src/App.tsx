import { useState } from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import './App.css'
import Cards from './components/Cards/Cards'
import Popup from './components/Popup/Popup'

function App() {
  const [showPopup, setShowPopup] = useState(false)
  const [popupType, setPopupType] = useState("read")

  const closePopup = () => {
    setShowPopup(false)
  }

  const [popupDescription, setPopupDescription] = useState("")



  return (
    <>
    <Header/>
    <Popup type={popupType} showPopup={showPopup} closePopup={closePopup} description={popupDescription} />
    <Banner />
    <Cards setShowPopup={setShowPopup} setPopupDescription={setPopupDescription} setPopupType={setPopupType} />
    </>
  )
}

export default App
