import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './components/Cart';
import Connect from './components/Connect';
import TrackOrder from './components/TrackOrder';
import Gifts from './components/Gifts';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/track" element={<TrackOrder />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/cakes" element={<Home />} />
        <Route path="/combos" element={<Home />} />
        <Route path="/birthday" element={<Home />} />
        <Route path="/anniversary" element={<Home />} />
        <Route path="/everyday-specials" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;