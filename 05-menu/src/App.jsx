import { useState } from 'react'
import './App.css'
import Categories from './components/Categories'
import items from './components/data.json'
import Menu from './components/Menu'
const allCategories = ['all', ...new Set(items.map((item)=>item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=>item.category === category);
    setMenuItems(newItems)
  }

  return (
    <main>
      <section>
        <div>
          <h2 className='text-white uppercase font-semibold text-5xl border-b-4 border-blue-200 mt-5 mb-4 py-7'>our menu</h2>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
