import { contenidoBD } from "./ContenidosMaterias/servicesBd";
import { contenidoDi } from "./ContenidosMaterias/servicesDI";
export function getName(id){
   let name = ""

   switch(id){
    case "BD":
        name = "Base de datos";
        break;
    case "DI":
         name = "Diseño de interfaces";
         break;
    case "PW":
        name = "Programacion web"
        break;     
   }
   return name;
}


export function getData(id){
    let data =  []
 
    switch(id){
     case "BD":
         data = contenidoBD();
         break;
     case "DI":
          data = contenidoDi();
          break;
     case "PW":
          data = "Programacion web"
         break;     
    }
    return data;
 }