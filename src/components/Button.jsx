import React from 'react'

const Button = ({name , func }) => {
  return (
    <div >
     <button onClick={func}  className=' px-3 py-1 h-[50px] w-[150px] border rounded-lg font-bold bg-gray-600 text-white hover:bg-white hover:text-gray-600 hover:border-gray-600 hover:border-2'>{name}</button>
 </div> 
 )
}

export default Button