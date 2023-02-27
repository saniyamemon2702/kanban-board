import React from 'react'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'
import Chip from './Chip'
import { useState } from 'react';
import Dropdown from './Dropdown';

export default function Card(props) {
const [showDropdown, setShowDropdown] = useState(false);

  return (
    // main container
    <div className='bg-white p-2 rounded-md mb-2'>
        {/* container for labels and ... */}
    <div className='flex card_top '>
        {/* container for labels */}
        {
            props.card?.labels?.map((label,index) => {
                return <Chip key={index} text={label.text} color={label.color} close={false} />
            })
        }
        {/* <Chip text='label 1' color='green' close={false} /> */}
       
        <div className='flex-1 '></div>
        <div className='relative' onClick={()=>setShowDropdown(true)}>
          <MoreHorizontal  />
           {showDropdown && (
            <Dropdown  onClose={() => setShowDropdown(false)}>
              <div className="font-inter ">
                <p>Delete Card</p>
              </div>
            </Dropdown>)
          }
          
        </div>
    </div>
    {/* container for title and description */}
    <div className='card_body p-2'>
    <p className='text-green-800 font-bold  font-inter text-md text-left '>{ props.card?.title }</p>
    <p className='text-green-800 font-bold  font-inter text-base text-left my-2'>{ props.card?.description }</p>
    </div>
    {/* container for footer */}
    <div className='card_footer flex justify-between item-center'>
    {
        props.card?.date &&  <p className='font-inter w-fit text-sm p-1 flex items-center gap-1'><Clock className='h-4 w-4 '/> {props.card?.date}</p> 
    }   
        <p className='font-inter w-fit text-sm p-1 flex items-center gap-1'><CheckSquare className='h-4 w-4 '/> 1/4 </p>
    </div>
    
</div>
  )
}
