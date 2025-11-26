"use client";

import { useCart } from "../../../context/CartContext";

const sushiItems = [
  {
    id: 1,
    name: "Salmon Sushi Roll",
    price: 8.99,
    image: "/images/Salmon Sushi Roll.jpg",
    description: "Fresh salmon with avocado and cucumber",
  },
  {
    id: 2,
    name: "Tuna Nigiri",
    price: 9.49,
    image: "/images/Tuna Nigiri.jpg",
    description: "Sliced tuna on seasoned rice",
  },
  {
    id: 3,
    name: "California Roll",
    price: 7.99,
    image: "/images/California Roll.jpg",
    description: "Crab, avocado & cucumber roll",
  },
  {
    id: 4,
    name: "Vegetable Sushi",
    price: 6.49,
    image: "/images/Vegetable Sushi.jpg",
    description: "Fresh veggies rolled with rice and seaweed",
  },
];

export default function SushiWorldMenu() {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">🍣 Sushi World – Menu</h1>
      <p className="text-gray-600 mb-6">
        The freshest sushi and Japanese dishes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sushiItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-red-500 font-bold">${item.price}</span>
                <button
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image,
                    })
                  }
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
