

export default function ContainTareas({children}) {
  return (
    <div className="flex flex-wrap justify-center w-full px-4 overflow-auto gap-x-4 gap-y-4">
       {children}
    </div>
  )
}
