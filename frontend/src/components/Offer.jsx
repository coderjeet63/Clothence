import React from 'react';

function Offer() {
    const handleSubmit = (event)=>{
        event.preventDefault()
    }
  return (
    <div className="py-8 flex flex-col items-center">
      <p className="text-black text-center text-4xl font-bold mb-4">
        Subscribe now & get 20% off
      </p>
      
      <div className="flex ">
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          className="py-2 px-4 w-96 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 "
        />
        <button onSubmit= {handleSubmit} className=" bg-blue-400 hover:to-blue-700 text-white px-4 py-2 rounded-r-md">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Offer;
