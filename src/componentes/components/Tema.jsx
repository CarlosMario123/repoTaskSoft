import { useState } from "react"
import useCustomTimeout from "../../hooks/useCustomTimeout"
export default function Tema({url}) {
    const [time,setTime] = useState(0)
     const {isReady,updateDelay} = useCustomTimeout(time);
    const asignarImagen = ()=>{
        localStorage.setItem("imagen",url)
           setTime(1)
         updateDelay(1000);

    }


  return (
    <div className="relative">
    {
    
 <img src = {url} className={` h-[12rem]  w-[12rem] cursor-pointer hover:scale-110 duration-300   }`} onClick={asignarImagen}/> 
    }
    {!isReady && <p className="absolute text-2xl font-bold text-purple-600 top-1/2">Imagen asignada</p>}
    </div>
      
  )
}
