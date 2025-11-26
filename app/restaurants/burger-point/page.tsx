"use client";

import { useCart } from "../../../context/CartContext";

const burgerItems = [
  {
    id: 1,
    name: "Classic Beef Burger",
    price: 5.99,
    image: "/images/Classic Beef Burger.jpg",
    description: "Juicy beef patty with cheese and lettuce",
  },
  {
    id: 2,
    name: "Chicken Crispy Burger",
    price: 6.49,
    image: "/images/Chicken Crispy Burger.jpg",
    description: "Crispy fried chicken breast with lettuce & sauce",
  },
  {
    id: 3,
    name: "Double Cheeseburger",
    price: 7.99,
    image: "/images/Double Cheeseburger.jpg",
    description: "Two beef patties with double cheese & pickles",
  },
  {
    id: 4,
    name: "Veggie Burger",
    price: 5.49,
    image: "/images/Veggie Burger.jpg",
    description: "Grilled veggie patty with fresh salad & sauce",
  },
];

export default function BurgerPointMenu() {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">🍔 Burger Point – Menu</h1>
      <p className="text-gray-600 mb-6">The tastiest burgers made with love.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {burgerItems.map((item) => (
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
