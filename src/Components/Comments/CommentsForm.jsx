import React, { useState } from 'react'

const CommentsForm = ({btnLabel, formSubmitHandler}) => {
  const [value, setValue] = useState("");
  
    const SubmitHandler = (e) =>{
        e.preventDefault();
        formSubmitHandler(value);
        setValue("");
    }

   

  return (

   <form onSubmit={SubmitHandler}>
    <div className='flex flex-col items-end p-4 rounded-lg border-primary'>
        <textarea rows={5}
         className='w-full focus:outline-none' 
         placeholder='Leave your comment here'
         value={value}
         onChange={(e)=>setValue(e.target.value)} />
         
         <button type='submit' className="px-6 py-2.5 rounded-lg bg-primary text-white font-semibold mt-2">{btnLabel}</button>
    </div>
   </form>
  )
}

export default CommentsForm