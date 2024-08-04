import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://www.course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)  
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour)=>tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try{
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
      console.log(tours);
      
    } catch (error) {
      setLoading(false)
      console.log(error); 
    }
  }

  useEffect(()=>{
    setTimeout(()=>{
      fetchTours()
    },1080)
  },[])

  return (
    <main className=''>
      {
        loading ? <Loading /> : tours.length == 0 ? <div>
          <h2 className='text-[3.5rem] font-bold text-white capitalize mt-10 max-sm:text-[1.4rem]'>no tours left</h2>
          <button onClick={()=>fetchTours()} className='bg-blue-500 text-white rounded-xl py-2 px-4 border-none m-10'>Refresh</button>
        </div> :
        <Tours tours={tours} removeTour={removeTour} /> 
      }
    </main>
  )
}

export default App
