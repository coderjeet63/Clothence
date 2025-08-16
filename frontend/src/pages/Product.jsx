import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Card from "../components/Card";

function Product() {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);

  const product = products.find((p) => p._id === id);
  const relatedProducts = products.filter(
    (pro) =>
      pro.category === product?.category &&
      pro.subCategory === product?.subCategory &&
      pro._id !== product?._id
  );

  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    if (product && product.image.length > 0) {
      setMainImage(product.image[0]);
    }
  }, [product]);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const rating = 4.5;
  const totalStars = 5;

  return (
    <>
      <div className="flex gap-6 p-8 max-w-6xl mx-auto">
        {/* Thumbnails */}
        <div className="flex flex-col gap-4">
          {product.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} ${index + 1}`}
              className={`w-20 h-20 object-cover cursor-pointer border ${
                mainImage === img ? "border-black" : "border-gray-200"
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* Main image */}
        <div className="flex-1">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full max-w-[400px] h-auto object-cover rounded"
          />
        </div>

        {/* Product details */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>

          {/* Stars */}
          <div className="flex items-center mb-2">
            {[...Array(totalStars)].map((_, i) => (
              <span
                key={i}
                className={i + 1 <= rating ? "text-red-500" : "text-gray-300"}
              >
                ★
              </span>
            ))}
            <span className="ml-2 text-gray-600">(122)</span>
          </div>

          <div className="text-3xl font-bold mb-4">${product.price}</div>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Size selection */}
          <div className="mb-6">
            <div className="mb-2 font-semibold">Select Size</div>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-4 py-2 cursor-pointer ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart button */}
          <button
            disabled={!selectedSize}
            onClick={() => addToCart(product, selectedSize)}
            className={`px-6 py-3 bg-black text-white font-semibold ${
              !selectedSize
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-800"
            }`}
          >
            ADD TO CART
          </button>

          <div className="mt-6 text-gray-500 text-sm">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <p className="text-3xl font-semibold text-gray-800 px-8 mt-8 border-b-2 border-gray-200 pb-2">
        RELATED PRODUCTS
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 mt-6">
        {relatedProducts.map((pro) => (
          <div
            key={pro._id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 p-4"
          >
            <Card
              id={pro._id}
              img={pro.image[0]}
              name={pro.name}
              price={pro.price}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
