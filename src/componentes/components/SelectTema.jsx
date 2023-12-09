import { useState } from "react"
import servicesTema from "../../services/temas/servicesTema"
import Tema from "./Tema"

export default function SelectTema() {
const [datos,setDatos] = useState(servicesTema())
  return (
    <div className="flex flex-wrap justify-center w-full px-6 py-4 gap-y-4 gap-x-6">
        {
            datos.map((imagen,i)=>{
                return <Tema url={imagen} key={i}/>
            })
        }
    </div>
  )
}
