import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaCcStripe } from "react-icons/fa";

function PlaceOrder() {
  const { getCartSubtotal, currency, delivery_fee } = useContext(ShopContext);
  const subtotal = getCartSubtotal();
  const total = subtotal + delivery_fee;

  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="flex flex-col lg:flex-row gap-12 px-8 py-8">
      {/* Delivery Information */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-4">
          DELIVERY <span className="font-normal">INFORMATION</span>
        </h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border rounded px-4 py-2 w-1/2"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border rounded px-4 py-2 w-1/2"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="border rounded px-4 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Street"
            className="border rounded px-4 py-2 w-full"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="City"
              className="border rounded px-4 py-2 w-1/2"
            />
            <input
              type="text"
              placeholder="State"
              className="border rounded px-4 py-2 w-1/2"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Zipcode"
              className="border rounded px-4 py-2 w-1/2"
            />
            <input
              type="text"
              placeholder="Country"
              className="border rounded px-4 py-2 w-1/2"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="border rounded px-4 py-2 w-full"
          />
        </div>
      </div>

      {/* Cart Totals */}
      <div className="w-full lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">
          CART <span className="font-normal">TOTALS</span>
        </h2>
        <div className="border rounded-lg p-4 mb-6">
          <div className="flex justify-between py-2 border-b">
            <span>Subtotal</span>
            <span>
              {currency}
              {subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span>Shipping Fee</span>
            <span>
              {currency}
              {delivery_fee.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between py-2 font-semibold">
            <span>Total</span>
            <span>
              {currency}
              {total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Payment Methods */}
        <h3 className="text-sm font-semibold mb-2">PAYMENT METHOD</h3>
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setPaymentMethod("stripe")}
            className={`border rounded-lg px-4 py-2 flex items-center gap-2 ${
              paymentMethod === "stripe" ? "border-blue-500" : ""
            }`}
          >
            <input
              type="radio"
              checked={paymentMethod === "stripe"}
              onChange={() => setPaymentMethod("stripe")}
            />
            <FaCcStripe className="text-blue-500" /> Stripe
          </button>
          <button
            onClick={() => setPaymentMethod("razorpay")}
            className={`border rounded-lg px-4 py-2 flex items-center gap-2 ${
              paymentMethod === "razorpay" ? "border-blue-500" : ""
            }`}
          >
            <input
              type="radio"
              checked={paymentMethod === "razorpay"}
              onChange={() => setPaymentMethod("razorpay")}
            />
            <img
              src="/razorpay-logo.png"
              alt="Razorpay"
              className="h-5 object-contain"
            />
          </button>
          <button
            onClick={() => setPaymentMethod("cod")}
            className={`border rounded-lg px-4 py-2 flex items-center gap-2 ${
              paymentMethod === "cod" ? "border-green-500" : ""
            }`}
          >
            <input
              type="radio"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            <span className="text-green-500 font-semibold">
              CASH ON DELIVERY
            </span>
          </button>
        </div>

        {/* Place Order Button */}
        <button className="bg-black text-white w-full py-3 rounded-lg text-lg">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}

export default PlaceOrder;
