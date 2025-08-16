import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const { cart, currency, removeFromCart, updateQuantity  , neviagte} = useContext(ShopContext);

  const shippingFee = 10;
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingFee;

  if (cart.length === 0) {
    return <div className="p-8 text-lg">Your cart is empty.</div>;
  }

  return (
    <div className="px-8 py-12">
      <h2 className="text-3xl font-semibold mb-8 uppercase">
        Your <span className="text-pink-600">Cart</span>
      </h2>

      {/* Cart Items */}
      <div className="border-b pb-6 mb-6">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-6 mb-6"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4 flex-1">
              <img
                src={item.image && item.image[0]}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-500">{currency}{item.price}</p>
              </div>
              <span className="border px-3 py-1">{item.size}</span>
            </div>

            {/* Quantity Input */}
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item._id, item.size, parseInt(e.target.value))
              }
              className="border w-16 text-center"
            />

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item._id, item.size)}
              className="text-gray-500 hover:text-red-500"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* Cart Totals */}
      <div className="max-w-sm ml-auto border p-6 rounded-md">
        <h3 className="text-xl font-semibold mb-4 uppercase">Cart Totals</h3>
        <div className="flex justify-between border-b pb-2 mb-2">
          <span>Subtotal</span>
          <span>{currency}{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b pb-2 mb-2">
          <span>Shipping Fee</span>
          <span>{currency}{shippingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>{currency}{total.toFixed(2)}</span>
        </div>

        <button onClick={() => neviagte('/place-order')} className="bg-black text-white w-full py-3 mt-4 hover:bg-gray-800">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
