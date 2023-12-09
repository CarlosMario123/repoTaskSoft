import { Link } from "react-router-dom"
import SelectTema from "../componentes/components/SelectTema"

export default function Configuracion() {
  return (
    <div className="w-full h-screen p-5 bg-purple-700">
     <div className='flex flex-col w-full h-full py-2 bg-purple-100 rounded-md shadow-sm shadow-black'>
     <div className='flex justify-center px-4'>
          <Link to={"/"} className='text-2xl'>Regresar</Link>
        <h1 className='w-full text-center text-[1.8rem] font-semibold text-purple-950 mb-6'>Configuraciones</h1>
        </div>
      <h2 className="px-10 text-2xl font-semibold">Seleciona una imagen para tus cards</h2>
        <SelectTema/>
     </div>
      
    </div>
  )
}
