import React from 'react'

const Categories = ({ categories, filterItems }) => {
  return (
    <div>
      {
        categories.map((category, index)=>{
            return (
                <button 
                type='button'
                key={index}
                onClick={()=>filterItems(category)}
                className='my-5 mx-2 px-3 py-1 capitalize text-white bg-blue-300 border-none rounded-md font-semibold shadow-white shadow-sm hover:bg-white hover:text-yellow-500 transition-all duration-100 max-sm:px-2 max-sm:text-[.9rem]'
                >
                    {category}
                </button>
            )
        })
      }
    </div>
  )
}

export default Categories
