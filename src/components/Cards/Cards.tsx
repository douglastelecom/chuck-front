import { getJoke } from "../../service"

interface Card {
  setShowPopup: (value: boolean) => void
  setPopupDescription: (description: any) => void
  setPopupType: (type: string) => void
}

export default function Cards({setShowPopup, setPopupDescription, setPopupType}: Card) {
  const onclickread = async () => {
    // debugger
    const joke = await getJoke()
    setPopupType("read")
    setShowPopup(true)
    setPopupDescription(joke)
  }
  const onclickwrite = async () => {
    setPopupType("write")
    setShowPopup(true)
  }
    return (
      <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center">
        <div onClick={onclickread} className="hover:cursor-pointer bg-white shadow-lg rounded-lg p-6 m-5 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center justify-center">
          <img className="h-1/4 w-1/4" src="./src/assets/svg/interrogation.svg" alt="Ícone SVG"/>
          <h2 className="text-xl font-semibold mb-2 text-center text-black">Ler uma curiosidade</h2>
          <p className="text-gray-700 text-center">Conheça algumas das hitórias mais incríveis do mestre Norris...</p>
        </div>
        <div onClick={onclickwrite} className="hover:cursor-pointer bg-white shadow-lg rounded-lg p-6 m-5 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center justify-center">
        <img className="h-1/4 w-1/4" src="./src/assets/svg/hand-and-pen.svg" alt="Ícone SVG"/>
          <h2 className="text-xl font-semibold mb-2 text-center text-black">Cadastrar uma curiosidade</h2>
          <p className="text-gray-700 text-center">Sabe de algo novo? Conte-nos!</p>
        </div>
      </div>
    </div>
    )
}
