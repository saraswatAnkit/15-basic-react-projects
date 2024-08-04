import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTour}) => {
  return (
    <section>
        <div>
            <h2 className='text-[2.7rem] font-semibold uppercase mb-8 text-white'>our tours</h2>
        </div>
        <div className='flex flex-col gap-7 justify-center items-center'>
            {tours.map((tour)=>(
                <Tour key={tour.id} {...tour} removeTour={removeTour} />
            ))}
        </div>
    </section>
  )
}

export default Tours
