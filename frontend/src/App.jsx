import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Order from './pages/Order';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="container-global">
      
      {/* ---- Normal User Layout ---- */}
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <NavBar />
              <SearchBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/order" element={<Order />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/product/:id" element={<Product />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>

      {/* ---- Admin Layout (without navbar/footer) ---- */}
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>

    </div>
  );
}

export default App;
