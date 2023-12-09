import { Link } from "react-router-dom"

export default function Card({url,texto,ruta}) {
  return (
    <div className="flex flex-col w-[12rem] bg-white items-center rounded-md h-[13rem] shadow-sm shadow-black hover:scale-110 duration-300">
      <img src={url} alt="" className="w-full h-32 rounded-t-md" />
       <p className="mt-2 font-semibold">{texto}</p>
       <Link to={ruta} className="w-[5rem] text-white bg-purple-600 text-center rounded-md mt-3">Ir</Link>
    </div>
  )
}
