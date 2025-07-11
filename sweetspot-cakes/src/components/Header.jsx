import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const nav = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [location, setLocation] = useState('Hyderabad');

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartCount(JSON.parse(savedCart).length);
    }
  }, []);

  useEffect(() => {
    const handleCartUpdate = () => {
      const savedCart = localStorage.getItem('cart');
      setCartCount(savedCart ? JSON.parse(savedCart).length : 0);
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <header className="header">
      <div className="top">
        <h1 className="logo" onClick={() => nav('/')}>SwEeTsPoT</h1>
        
        <div className="right">
          <div className="loc">
            <span>Deliver To</span>
            <select 
              className="select" 
              value={location}
              onChange={handleLocationChange}
            >
              <option>Hyderabad</option>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>New Delhi</option>
              <option>Bangalore</option>
              <option>Chennai</option>
              <option>Trivandrum</option>
              <option>Ahmedabad</option>
              <option>Jaipur</option>
              <option>Lucknow</option>
              <option>Kolkata</option>
              <option>Indore</option>
              <option>Ranchi</option>
            </select>
          </div>
          
          <input 
            type="text" 
            placeholder="Search for cakes!" 
            className="search" 
          />
          
          <div className="icons">
            <span onClick={() => nav('/track')}>Track Order</span>
            <span onClick={() => nav('/gifts')}>Gifts</span>
            <span onClick={() => nav('/connect')}>Connect</span>
            <span onClick={() => nav('/cart')}>Cart ({cartCount})</span>
            <span onClick={() => nav('/login')}>Sign In</span>
          </div>
        </div>
      </div>
      
      <div className="cats">
        <span onClick={() => nav('/cakes')}>Cakes</span>
        <span onClick={() => nav('/combos')}>Combos</span>
        <span onClick={() => nav('/birthday')}>Birthday</span>
        <span onClick={() => nav('/anniversary')}>Anniversary</span>
        <span onClick={() => nav('/everyday-specials')}>Everyday Specials</span>
      </div>
    </header>
  );
};

export default Header;