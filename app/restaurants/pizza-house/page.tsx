"use client";

import { useCart } from "../../../context/CartContext";

const pizzaItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 7.99,
    image:
      "/images/Margherita Pizza.jpg",
    description: "Classic pizza with tomato sauce, mozzarella cheese & basil",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    price: 9.49,
    image:
      "/images/Pepperoni Pizza.jpg",
    description: "Loaded with pepperoni & cheese",
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    price: 10.99,
    image:
      "/images/BBQ Chicken Pizza.jpg",
    description: "Grilled chicken, BBQ sauce, onions & mozzarella",
  },
  {
    id: 4,
    name: "Veggie Supreme",
    price: 8.79,
    image:
      "/images/Veggie Supreme.jpg",
    description: "Bell pepper, tomatoes, olives & mushrooms",
  },
];


export default function PizzaHouseMenu() {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">🍕 Pizza House – Menu</h1>
      <p className="text-gray-600 mb-6">
        The best pizzas made with fresh ingredients.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzaItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
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



