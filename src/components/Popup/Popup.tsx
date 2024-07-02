import { useState } from "react";
import { saveJoke } from "../../service"

interface Popup {
  type: any,
  showPopup: boolean,
  description?: any,
  closePopup: () => void
}

export default function Popup({type, showPopup, description, closePopup}: Popup){
  const [jokeDescription, setJokeDescription] = useState('')
  
  const sendJoke = async () => {
    try{
     await saveJoke(jokeDescription);
     alert("Curiosidade enviada!")
    }catch(error: any){
      alert("Ops, houve um problema com o envio. Tente novamente mais tarde.")
    }
  }

  const onchangeJoke = (e: any) => {
    setJokeDescription(e.target.value)
  }

  if(showPopup){
    if(type === "read"){
      return (
        <div className="absolute w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div style={{width: '40vw'}} className="relative bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
            <button onClick={closePopup} style={{height: '2rem'}}
              className="hover:cursor-pointer absolute top-0 right-1 text-gray-300 font-bold rounded-full mr-1">
                X
            </button>
            <div className="text-black text-center flex inline-flex">
              <p>{description}</p>
            </div>
          </div>
        </div>
      )
    } else if (type === "write"){
      return (
      <div className="absolute w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div style={{width: '40vw'}} className="relative bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <button onClick={closePopup}
          className="hover:cursor-pointer absolute top-0 right-1 text-gray-300 font-bold rounded-full mr-1">
            X
        </button>
        <div className=" text-center">
        <textarea value={jokeDescription} onChange={onchangeJoke} className="text-black w-full p-2 rounded-md bg-white" placeholder="Digite sua curiosidade aqui"></textarea>
        <button onClick={sendJoke} className="text-white bg-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Enviar curiosidade
        </button>
        </div>
      </div>
    </div>
    )}
  }  

}
