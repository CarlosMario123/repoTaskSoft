import Card from "../componentes/components/Card";
import ImgSetting from "../componentes/components/ImgSetting";
import ContainCard from "../componentes/Contenedores/ContainCard";
import { getMaterias } from "../services/servicesMaterias";
import { useState,useEffect } from "react";
export default function Home() {
  const [urlImg,setUrlImg] = useState("https://1.bp.blogspot.com/-rx1uXrnISXI/YGnWopyc9oI/AAAAAAAAF38/7oaGQGzqDAAzOcDnZbTb-JdVN_4gtapgwCLcBGAsYHQ/s16000/yoututosjeffsew%2Btrb534y564.jpg")
  

   //Verificamos si hay una imagen 
   useEffect(() => {
    const localStorageImg = localStorage.getItem("imagen");
    if (localStorageImg) {
      setUrlImg(localStorageImg);
    }
  }, []);
  return (
    <div className="w-full h-screen p-5 bg-purple-700">
    
      <div className="flex flex-col w-full h-full py-2 bg-purple-100 rounded-md shadow-sm shadow-black">
      <div className="flex px-2">
        <ImgSetting/>
        <h1 className="w-full text-center text-[1.8rem] font-semibold text-purple-950 mb-6">Respositorio de materias Up</h1>
      </div>
       
          <ContainCard>

            {
              getMaterias().map((materia,i)=>{
                 return <Card url={urlImg} texto={materia.name} key={i} ruta={materia.url}/>
              })
            }
       
          </ContainCard>
      </div>
    </div>
  )
}
