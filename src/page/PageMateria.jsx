import { getData } from '../services/servicesByMateria';
import { useParams } from 'react-router-dom';
import { getName } from '../services/servicesByMateria';
import ContainTareas from '../componentes/Contenedores/ContainTareas';
import Tareas from '../componentes/components/Tareas';
import { useState } from 'react';
import useCustomTimeout from '../hooks/useCustomTimeout';
import EfectoFrente from '../componentes/components/EfectoFrente';
import { Link } from 'react-router-dom';
export default function PageMateria() {
   const {isReady} = useCustomTimeout(1500);
    const {id} = useParams();
    const [data,setdata] = useState(getData(id))



    if(!isReady){
        return <EfectoFrente texto={getName(id)}/>
    }
  return (
    <div className='w-full h-screen p-5 bg-purple-700'>
      <div className='flex flex-col w-full h-full py-2 bg-purple-100 rounded-md shadow-sm shadow-black'>
        <div className='flex px-4'>
          <Link to={"/"} className='text-2xl'>Regresar</Link>
        <h1 className='w-full text-center text-[1.8rem] font-semibold text-purple-950 mb-6'>{getName(id)}</h1>
        </div>
        
         <ContainTareas>
            {
                data.map((info,i)=>{
                     return <Tareas titulo={info.titulo} url={info.url} key={i}/>
                })
            }

         </ContainTareas>
      </div>
    </div>
  )
}
