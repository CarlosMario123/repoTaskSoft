import React from 'react'

export default function ContainCard({children}) {
  return (
    <div className='flex flex-wrap justify-center w-full h-full px-4 pt-4 overflow-auto gap-x-4 gap-y-4'>
      {children}
    </div>
  )
}
