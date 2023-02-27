import React from 'react'
import { X } from 'react-feather'
export default function Chip(prop) {
  return (
    <div style={{backgroundColor:prop.color}} className="w-fit flex justify-center items-center  gap-2 px-3 py-1 border rounded-3xl text-sm font-inter">
      
           {prop.text}
    {prop.close && <X className='w-4 h-4' onClick={prop.close? prop.onClose():""}/>}
   
    </div>
  )
}
