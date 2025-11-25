// "use client";

// import ProductCard from "../components/ProductCard";
// import { featuredProducts, categories } from "../../data";
// import { useState } from "react";

// export default function Menu() {
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");

//   const filteredProducts =
//     selectedCategory === "All"
//       ? featuredProducts
//       : featuredProducts.filter((p) =>
//           p.name.toLowerCase().includes(selectedCategory.toLowerCase())
//         );

//   return (
//     <div className="container mx-auto px-4 py-6 space-y-6">
//       <h1 className="text-3xl font-bold mb-4">Our Menu</h1>

//       {/* فلتر الأقسام */}
//       <div className="flex space-x-4 mb-6">
//         <button
//           className={`px-4 py-2 rounded ${
//             selectedCategory === "All" ? "bg-red-500 text-white" : "bg-gray-200"
//           }`}
//           onClick={() => setSelectedCategory("All")}
//         >
//           All
//         </button>
//         {categories.map((cat) => (
//           <button
//             key={cat.id}
//             className={`px-4 py-2 rounded ${
//               selectedCategory === cat.name ? "bg-red-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => setSelectedCategory(cat.name)}
//           >
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       {/* قائمة المنتجات */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             name={product.name}
//             price={product.price}
//             image={product.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import ProductCard from "../components/ProductCard";
import { featuredProducts, categories } from "../../data";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { addToCart } = useCart(); // استدعاء دالة إضافة للسلة

  const filteredProducts =
    selectedCategory === "All"
      ? featuredProducts
      : featuredProducts.filter((p) =>
          p.name.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>

      {/* فلتر الأقسام */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === "All" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`px-4 py-2 rounded ${
              selectedCategory === cat.name ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* قائمة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="relative">
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
            />
            {/* زر Add to Cart */}
            <button
              onClick={() => addToCart(product)}
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
