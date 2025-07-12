import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CakeCard from '../components/CakeCard';
import cakeData from '../data/cakes.json';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const carouselItems = [
  {
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Premium Cake Delivery',
    caption: 'Freshly baked cakes delivered to your doorstep'
  },
  {
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Chocolate Heaven',
    caption: 'Indulge in our rich chocolate creations'
  },
  {
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Celebration Cakes',
    caption: 'Make every occasion special with our designs'
  },
  {
    image: 'https://images.unsplash.com/photo-1552689486-f6773047d19f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Custom Creations',
    caption: 'Personalized cakes for your unique events'
  },
  {
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Seasonal Specials',
    caption: 'Limited edition flavors for every season'
  },
  {
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Wedding Cakes',
    caption: 'Elegant designs for your special day'
  },
  {
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Birthday Specials',
    caption: 'Make birthdays unforgettable'
  },
  {
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Exotic Flavors',
    caption: 'Unique taste experiences'
  }
];

const Home = () => {
  const nav = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all-cakes');
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const addToCart = (cake) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, cake];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
    alert(`${cake.name} added to cart!`);
  };

  const filteredCakes = activeCategory === 'all-cakes' 
    ? cakeData 
    : cakeData.filter(cake => cake.category === activeCategory);

  return (
    <div className="page">
      {/* Carousel with Curved Images */}
      <div className="banner">
        <div className="carousel-container">
          <div className="carousel">
            {carouselItems.map((item, index) => (
              <div 
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <div 
                  className="slide-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="slide-content">
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-arrow left-arrow" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className="carousel-arrow right-arrow" onClick={nextSlide}>
            <FaChevronRight />
          </button>
          
          <div className="carousel-dots">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
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
  );
};

export default Home;