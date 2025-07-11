import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CakeCard from '../components/CakeCard';
import cakeData from '../data/cakes.json';

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query')?.toLowerCase() || '';
    const filtered = cakeData.filter(cake => 
      cake.name.toLowerCase().includes(query) || 
      cake.category.toLowerCase().includes(query)
    );
    setResults(filtered);
  }, [location.search]);

  return (
    <div className="page">
      <div className="title">
        <h2>SEARCH RESULTS</h2>
        {results.length > 0 ? (
          <p>Found {results.length} matching cakes</p>
        ) : (
          <p>No cakes found matching your search</p>
        )}
      </div>
      
      <div className="grid">
        {results.map(cake => (
          <CakeCard 
            key={cake.id} 
            cake={cake} 
            onAdd={() => {
              const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
              const updatedCart = [...existingCart, cake];
              localStorage.setItem('cart', JSON.stringify(updatedCart));
              window.dispatchEvent(new Event('cartUpdated'));
              alert(`${cake.name} added to cart!`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;