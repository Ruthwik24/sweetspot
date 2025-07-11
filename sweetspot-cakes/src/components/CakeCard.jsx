import { useState } from 'react'

const CakeCard = ({ cake, onAdd }) => {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAdd()
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="card">
      <div className="img-container">
        <img src={cake.image} alt={cake.name} className="img" />
      </div>
      <div className="details">
        <h3 className="name">{cake.name}</h3>
        <p className="price">₹{cake.price}</p>
        <button 
          onClick={handleAdd} 
          className={`add-btn ${added ? 'added' : ''}`}
          disabled={added}
        >
          {added ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

export default CakeCard