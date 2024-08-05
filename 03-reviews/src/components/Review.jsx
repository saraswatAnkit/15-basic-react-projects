import React, { useState } from 'react'
import people from '../utils/data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa6";

const Review = () => {
    const [index, setIndex] = useState(0)
    const { name, job, image, text } = people[index]

    const checkNumber = (number) => {
        if(number > people.length-1)
             return 0
        if(number < 0)
         return people.length-1
        
        return number;
    }
    const prevPerson = () => {
        setIndex((index)=>{
            let newIndex = index -1
            return checkNumber(newIndex);
        })
    }
    const nextPerson =() => {
        setIndex((index)=>{
            let newIndex = index + 1
            return checkNumber(newIndex);
        })
    }
    const randomPerson =()=>{
        let randomNumber = Math.floor(Math.random() * people.length)
        if(randomNumber == index){
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
    }

  return (
    <article className='flex flex-col shadow-2xl bg-white rounded-md items-center justify-center max-w-[80vw] lg:h-[67vh] lg:w-[45vw] gap-4 px-5 py-3'>
        <div className='h-[12rem] w-[12rem] relative pt-4'>
            <div className='w-[10.2rem] h-[10.2rem] absolute bg-blue-500 rounded-full ml-3 top-3 mb-1'></div>
            <img src={image} alt={name} className='sm:h-[10.3rem] sm:w-[10.3rem] rounded-full object-cover absolute top-4 max-sm:h-[10.3rem] max-sm:w-[10.3rem]' />
            <span className='bg-blue-500 absolute h-10 w-10 flex items-center justify-center rounded-full left-1 top-6 text-white font-extrabold text-[1.4rem]'>
                <FaQuoteRight />
            </span>
        </div>
            <div className='flex flex-col gap-2'>
            <p className='text-2xl font-semibold'>{name}</p>
            <p className='text-[.9rem] font-semibold text-blue-700 uppercase'>{job}</p>
            </div>
            <p>{text}</p>
            <div className='flex gap-10 text-blue-700 text-[1.4rem]'>
                <button onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button onClick={randomPerson} className='bg-slate-400 py-1 px-4 text-blue-800 rounded-md mb-4 capitalize'>
                surprise me
            </button>
    </article>
  )
}

export default Review
