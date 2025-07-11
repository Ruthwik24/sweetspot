import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const clearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    setCartItems([]);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item, index) => index !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="page">
      <div className="title">
        <h2>YOUR CART ({cartItems.length})</h2>
        <p>"Review your delicious selections before checkout!"</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button onClick={() => navigate('/')} className="add-btn">
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="grid">
            {cartItems.map((item, index) => (
              <div className="card" key={index}>
                <div className="img-container">
                  <img src={item.image} alt={item.name} className="img" />
                </div>
                <div className="details">
                  <h3 className="name">{item.name}</h3>
                  <p className="price">₹{item.price}</p>
                  <button 
                    onClick={() => removeItem(index)} 
                    className="add-btn" // Styled like "Add to Cart"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="total">
              <span>Total:</span>
              <span>₹{calculateTotal()}</span>
            </div>
            <div className="cart-actions">
              <button onClick={clearCart} className="clear-cart">
                Clear Cart
              </button>
              <button className="checkout">Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
