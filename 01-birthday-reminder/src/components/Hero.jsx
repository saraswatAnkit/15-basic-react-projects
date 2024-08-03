import React from 'react'

const Hero = ({people}) => {
  return (
    <div className='flex flex-col gap-2'>
      {people.map((person)=>(
        <article key={person.id} className='flex gap-12 left-0 border items-center w-[45vw] lg:w-[30vw] sm:gap-2'>
          <img src={person.image} alt={person.name} className='w-20 h-20 rounded-full object-cover left-0 lg-w-[2rem] sm-h-5 sm-w-5' />
          <div>
            <h4 className='font-semibold lg:text-xl md:text-xl sm:text-[1rem] capitalize'>{person.name}</h4>
            <p className='sw:text-[.5rem]'>{person.age} years</p>
          </div>
        </article>
    ))}
    </div>
  )
}

export default Hero
