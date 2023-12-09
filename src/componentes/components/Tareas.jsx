import "../../App.css"

export default function Tareas({url,titulo}) {
  return (
    <a className="flex items-center w-[12rem] h-16 bg-purple-500 justify-center font-semibold font-mono text-[1.1rem] rounded-md cursor-pointer text-center swing"
    href= {url} target="blank">
      {titulo}
    </a>
  )
}
