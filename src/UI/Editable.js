import React from 'react'
import { X } from 'react-feather'

export default function Editable(props) {
    const [showEdit, setShowEdit] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("")


    return (
        <div className={`editable p-1 bg-gray-200 border rounded-sm w-full flex items-center justify-center ${props.editClass || ""} `}>{
            showEdit ? (
                <form className='flex gap-2 items-center justify-center' onSubmit={(event) => {
                    event.preventdefault()
                    if (props.onSubmit) props.onSubmit(inputValue)
                }}>
                    <input type="text" placeholder={props.placeholder || "Enter Text"} defaultValue={props.text} 
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}/>
                    <div className='flex gap-2 items-center justify-center'>
                        <button className='bg-green-500 text-white p-2 rounded-md'>{props.buttonText || "Add"}</button>
                        <X onClick={() => setShowEdit(false)} />
                    </div>
                </form>) : (<p className={`font-inter w-full text-center${props.displayClass || ""} `} onClick={() => setShowEdit(true)}>{props.text || "Add Item"}</p>)
        }


        </div>
    )
}
