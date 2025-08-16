import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
      const { setShowSearch}  =    useContext(ShopContext)

  return (
    <nav className="bg-white px-4 py-2 flex items-center justify-between ">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Navigation Links (hidden on mobile) */}
      <ul className="hidden md:flex gap-8 font-medium text-gray-700 flex-1 justify-center">
        <li>
          <Link to="/" className="hover:text-blue-600 transition">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/collection" className="hover:text-blue-600 transition">
            COLLECTION
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600 transition">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-600 transition">
            CONTACT
          </Link>
        </li>
        <li>
          <Link to="/admin" className="hover:text-blue-600 transition">
            Admin Panel
          </Link>
        </li>
      </ul>

      {/* Right Side Icons */}
      <div className="flex items-center gap-6" >
        {/* Search */}
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          onClick={()=>setShowSearch(true)}
        />
        {/* Profile */}
        <Link to="/login">
          <img
            src={assets.profile_icon}
            alt="Profile"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />
        </Link>
        {/* Cart */}
        <Link to="/cart">
          <img
            src={assets.cart_icon}
            alt="Cart"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />
        </Link>

        {/* Hamburger Icon (visible on mobile) */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={assets.menu_icon} // make sure you have a hamburger icon in assets
            alt="Menu"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 font-medium text-gray-700">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/collection" onClick={() => setMenuOpen(false)}>
                COLLECTION
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/admin" onClick={() => setMenuOpen(false)}>
                Admin Panel
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
