import { useState } from 'react'
// import './App.css'
import data from './utils/data'
import Hero from './components/Hero'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <main className='h-screen w-full bg-pink-400 flex items-center justify-center m-0 p-0'>
     <section className='flex flex-col justify-center items-center w-[56vw] lg:w-[40vw] bg-white shadow-black sm:m-0'>
      <h3 className='text-[1.2rem] uppercase mt-5 mb-10 text-3xl font-bold'>{people.length} birthdays today</h3>
      <Hero people={people} />
      <button className='font-extrabold uppercase bg-blue-700 text-white pt-2 pb-2 pr-4 pl-4 rounded-sm m-4' onClick={()=>setPeople([])}>clear all</button>
     </section>
    </main>
  )
}

export default App
