interface Popup {
  type: string,
  showPopup: boolean,
  description?: any,
  closePopup: () => void
}

export default function Popup({type, showPopup, description, closePopup}: Popup){
  if(showPopup){
    if(type === "read"){
      return (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div style={{height: '40vh', width: '40vw'}} className="relative bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
            <button onClick={closePopup} style={{height: '2rem'}}
              className="absolute top-0 right-0 text-gray-300 font-bold rounded-full mr-1">
                X
            </button>
            <div className="text-black text-center flex inline-flex" style={{height: '100%'}}>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )
    } else if (type === "insert"){
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <button onClick={closePopup}
          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full">
        </button>
        <div className="text-black text-center">
        </div>
      </div>
    </div>
    }
  }  

}
