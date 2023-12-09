import "../../App.css"

export default function EfectoFrente({texto}) {
  return (
    <div className="flex items-center justify-center w-full h-screen">
         <p className="text-5xl font-bold slide-fwd-center scale-in-center">{texto}</p>
    </div>
  )
}
