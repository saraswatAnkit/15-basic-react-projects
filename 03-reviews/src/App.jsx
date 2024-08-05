import { useState } from 'react'
import './App.css'
import Review from './components/Review'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='flex w-full h-[90vh] justify-center items-center'>
      <Review />
    </section>
  )
}

export default App
