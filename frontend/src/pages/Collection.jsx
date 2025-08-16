  import React, { useContext, useEffect, useState} from "react";
import { ShopContext } from "../context/ShopContext";
import Card from "../components/Card";

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceType, setPriceType] = useState("");
  
  // Category filter handler
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== value));
    }
  };

  // Type filter handler
  const handleTypeChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedTypes((prev) => [...prev, value]);
    } else {
      setSelectedTypes((prev) => prev.filter((type) => type !== value));
    }
  };

  // Price sort handler
  const handlePrice = (e) => {
    setPriceType(e.target.value);
  };

  useEffect(() => {
    console.log("Selected Categories:", selectedCategories);
    console.log("Selected Types:", selectedTypes);
    console.log("Price Sort:", priceType);
    console.log("Search term:", search);
  }, [selectedCategories, selectedTypes, priceType, search]);

  // Filter products based on category, type AND search term
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const matchType =
      selectedTypes.length === 0 || selectedTypes.includes(product.subCategory);

    // Case-insensitive search match on product name
    const matchSearch =
      search.trim() === "" ||
      product.name.toLowerCase().includes(search.trim().toLowerCase());

    return matchCategory && matchType && matchSearch;
  });

  // Sort filtered products by price
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (priceType === "Low") {
      return a.price - b.price;
    } else if (priceType === "High") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="flex max-w-7xl mx-auto px-4 py-8 gap-8">
      {/* Sidebar Filters */}
      <aside className="w-64 shrink-0">
        <h2 className="text-lg font-semibold mb-6">FILTERS</h2>

        {/* Categories */}
        <div className="mb-6 border border-gray-300 rounded-md p-4">
          <h3 className="font-semibold mb-3">CATEGORIES</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="Men"
                onChange={handleCategoryChange}
                checked={selectedCategories.includes("Men")}
              />
              Men
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="Women"
                onChange={handleCategoryChange}
                checked={selectedCategories.includes("Women")}
              />
              Women
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="Kids"
                onChange={handleCategoryChange}
                checked={selectedCategories.includes("Kids")}
              />
              Kids
            </label>
          </div>
        </div>

        {/* Type */}
        <div className="border border-gray-300 rounded-md p-4">
          <h3 className="font-semibold mb-3">TYPE</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="Topwear"
                onChange={handleTypeChange}
                checked={selectedTypes.includes("Topwear")}
              />
              Topwear
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="Bottomwear"
                onChange={handleTypeChange}
                checked={selectedTypes.includes("Bottomwear")}
              />
              Bottomwear
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="Winterwear"
                onChange={handleTypeChange}
                checked={selectedTypes.includes("Winterwear")}
              />
              Winterwear
            </label>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            ALL <span className="text-gray-500 font-normal">COLLECTIONS</span>
          </h2>
          <select
            className="border border-gray-300 rounded-md px-3 py-2"
            onChange={handlePrice}
            value={priceType}
          >
            <option value="">Sort by</option>
            <option value="Low">Low to High</option>
            <option value="High">High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <Card
              key={product._id}
              id={product._id}
              img={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Collection;
