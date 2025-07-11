import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CakeCard from '../components/CakeCard'
import cakeData from '../data/cakes.json'

const Home = () => {
  const nav = useNavigate()
  const [activeCategory, setActiveCategory] = useState('all-cakes')

  const addToCart = (cake) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || []
    const updatedCart = [...existingCart, cake]
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    window.dispatchEvent(new Event('cartUpdated'))
    alert(`${cake.name} added to cart!`)
  }

  const filteredCakes = activeCategory === 'all-cakes' 
    ? cakeData 
    : cakeData.filter(cake => cake.category === activeCategory)

  return (
    <div className="page">
      <div className="banner">
        <h1>Online Cake Delivery</h1>
        <p>Baked Fresh, Delivered Fresh</p>
      </div>
      
      <div className="types">
        {['all-cakes', 'vanilla-cakes', 'chocolate-cakes', 'pineapple-cakes', 'exotic-cakes', 'mango-cakes'].map((type) => (
          <span 
            key={type}
            className={activeCategory === type ? 'active' : ''}
            onClick={() => setActiveCategory(type)}
          >
            {type.split('-')[0].charAt(0).toUpperCase() + type.split('-')[0].slice(1)}
          </span>
        ))}
      </div>
      
      <div className="title">
        <h2>EXPLORE CAKES</h2>
        <p>"Bite into Happiness – Explore Our Delicious Cake Collection!"</p>
      </div>
      
      <div className="grid">
        {filteredCakes.map(cake => (
          <CakeCard 
            key={cake.id} 
            cake={cake} 
            onAdd={() => addToCart(cake)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home