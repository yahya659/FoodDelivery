"use client";

import Link from "next/link";

export default function RestaurantsPage() {
  const restaurants = [
    {
      id: 1,
      name: "Pizza House",
      image: "/images/Pizza House.jpg",
      description: "Italian pizza with fresh ingredients.",
    },
    {
      id: 2,
      name: "Burger Point",
      image: "/images/BurgerPoint.jpg",
      description: "Juicy burgers and crispy fries.",
    },
    {
      id: 3,
      name: "Sushi World",
      image: "/images/Sushi World.jpg",
      description: "Fresh Sushi and Japanese dishes.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            href={
              restaurant.name === "Pizza House"
                ? "/restaurants/pizza-house"
                : restaurant.name === "Burger Point"
                ? "/restaurants/burger-point"
                : "/restaurants/sushi-world"
            }
            className="block"
          >
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{restaurant.name}</h2>
                <p className="text-gray-600">{restaurant.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
