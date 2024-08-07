import React, { useState } from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({title, info}) => {
    const [infoShow, setInfoShow] = useState(false)
  return (
    <article className='flex flex-col items-center justify-center mt-5 shadow-md border mx-4 py-2 '>
        <header className='flex justify-between w-[90%] items-center'>
            <h4 className='font-semibold py-3 '>{title}</h4>
            <button onClick={()=>{setInfoShow(!infoShow)}} className={infoShow ? "bg-blue-400 text-white p-2 rounded-full font-bold transition-all duration-75" : "bg-cyan-800 text-white p-2 rounded-full font-bold transition-all duration-75"}>{ infoShow ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
        </header>
        {infoShow && <p className='flex justify-items-start font-thin mt-1 bg-slate-100 mx-2'>{info}</p>}
    </article>
  )
}

export default SingleQuestion
