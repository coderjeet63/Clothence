// src/components/OurPolicy.jsx
import React from "react";
import { assets } from "../assets/assets";

function OurPolicy() {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: "Easy Exchange Policy",
      description: "We offer hassle free exchange policy",
    },
    {
      icon: assets.quality_icon,
      title: "7 Days Return Policy",
      description: "We provide 7 days free return policy",
    },
    {
      icon: assets.support_img,
      title: "Best Customer Support",
      description: "We provide 24/7 customer support",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className=" px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={policy.icon}
              alt={policy.title}
              className="w-16 h-16 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {policy.title}
            </h3>
            <p className="text-gray-600 mt-2">{policy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurPolicy;
