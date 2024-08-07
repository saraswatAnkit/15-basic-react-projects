import { useState } from 'react'
import './App.css'
import  data  from './data.json'
import SingleQuestion from './SingleQuestion'

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <main className='flex items-center justify-center'>
      <div className='bg-white mt-7 pb-7 flex flex-col gap-5 shadow-2xl max-lg:w-[87vw] max-md:w-[78vw] rounded-md lg:w-[60vw]'>
        <h3 className='uppercase font-semibold text-[2.5rem] mt-5'>question</h3>
        <section>
          {questions.map((question)=>(
            <SingleQuestion key={question.id} {...question} />
            ))}
        </section>
      </div>
    </main>
  )
}

export default App
