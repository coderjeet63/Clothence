import React, { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const neviagte = useNavigate();

  // 🛒 Cart state with persistence
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ✅ Save cart to localStorage when changed
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ Add to cart function
  const addToCart = (product, size) => {
    if (!size) return; // Must select a size

    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item._id === product._id && item.size === size
      );

      if (existing) {
        return prevCart.map((item) =>
          item._id === product._id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, size, quantity: 1 }];
    });
  };

  // ➖ Remove from cart
  const removeFromCart = (productId, size) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item._id === productId && item.size === size)
      )
    );
  };

  // 🔄 Update quantity
  const updateQuantity = (productId, size, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  // 💲 Calculate subtotal
  const getCartSubtotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartSubtotal,
    neviagte,
  };

  return (
    <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
