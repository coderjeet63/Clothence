import React from "react";
import { assets } from "../assets/assets";

function Hero() {
  return (
    <section className="flex border border-gray-300 ">
      {/* Left Section */}
      <div className="w-[45%] bg-white flex flex-col justify-center px-12 py-16">
        <p className="text-sm font-semibold tracking-wider text-gray-500 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-gray-400"></span> OUR BESTSELLERS
        </p>
        <h1 className="text-6xl font-light mt-3">
          Latest <span className="font-semibold">Arrivals</span>
        </h1>
        <button className="mt-6 flex items-center gap-2 text-sm font-medium tracking-wider hover:underline underline-offset-4">
          SHOP NOW <span className="w-8 h-[1px] bg-gray-400"></span>
        </button>
      </div>

      {/* Right Section */}
      <div className="w-[55%] bg-pink-100 flex justify-center items-center">
        <img
          src={assets.hero_img}
          alt="Latest Arrivals"
          className="object-cover h-full"
        />
      </div>
    </section>
  );
}

export default Hero;
