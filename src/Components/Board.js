import React from 'react'
import Card from '../UI/Card'
import './Boards.css'
import { useState } from 'react';
import { MoreHorizontal } from 'react-feather';
import Editable from '../UI/Editable';
import Dropdown from '../UI/Dropdown';

export default function Board(props) {
  let colors = ['green', 'blue', 'orange', 'pink'];
  console.log(colors);

  

  // to show/hide dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  console.log(showDropdown);

  return (
    // whole board
    <div className='w-80 flex flex-col gap-5 h-fit p-3 bg-gray-200'>
      {/* board heading (title) */}
      <div className='flex  p-2 bg-green-200'>
        <p className={`text-${colors} font-bold  font-inter text-2xl flex flex-1 text-left px-2`}>{props.board?.title} &nbsp; &nbsp; <span>{ ` ${props.board?.cards?.length}`}</span></p>

        <div className='relative' onClick={()=>setShowDropdown(true)}>
          <MoreHorizontal  />
           {showDropdown && (
            <Dropdown  onClose={() => setShowDropdown(false)}>
              <div className="font-inter ">
                <p>Delete Board</p>
              </div>
            </Dropdown>)
          }
          
        </div>
    </div>
        {/* board body */ }
  <div className='bg-green-100 p-2 bg-[#f8f8f8] flex flex-1 flex-col custom-scroll gap-2 border border-b-2 h-screen overflow-y-auto '>
    {/* card */}
    {props.board?.cards?.map((card) => {  
      return <Card id={card.id} card={card} />
    })}



    <Editable />
  </div>
    </div >
  )
}
