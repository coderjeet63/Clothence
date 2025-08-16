import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const[visible , setVisible] = useState(false) ;

       const  location = useLocation() ;

       useEffect(()=>{
          if(location.pathname==='/collection'){
            setVisible(true)
          }
          else {
            setVisible(false)
          }
       } , [location])

  if (!showSearch) return null;

  return   (
    <div className="w-full bg-gray-50 py-4 px-6 flex items-center justify-center border-b border-gray-200">
      <div className="relative w-full max-w-3xl">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
        {/* Search icon inside input on left */}
        <img
          src={assets.search_icon}
          alt="Search Icon"
          className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none opacity-50"
        />
        {/* Close (x) icon on right */}
        <button
          onClick={() => {
            setShowSearch(false);
            setSearch(""); // clear search on close
          }}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
          aria-label="Close search"
        >
          &#10005;
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
