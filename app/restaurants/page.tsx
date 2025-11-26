
// "use client";

// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function RestaurantsPage() {
//   const router = useRouter();

//   const restaurants = [
//     {
//       id: 1,
//       name: "Pizza House",
//       image: "/images/Pizza House.jpg",
//       description: "Italian pizza with fresh ingredients.",
//       location: "Sana'a - Algeria Street",
//       address: "Near Al Saeed Market",
//       offers: "Buy 1 Pizza, Get 1 Free",
//       workingHours: "10:00 AM - 12:00 AM",
//     },
//     {
//       id: 2,
//       name: "Burger Point",
//       image: "/images/BurgerPoint.jpg",
//       description: "Juicy burgers and crispy fries.",
//       location: "Sana'a - Hadda Street",
//       address: "Beside Hadda Center",
//       offers: "20% off on all meals every Friday",
//       workingHours: "11:00 AM - 2:00 AM",
//     },
//     {
//       id: 3,
//       name: "Sushi World",
//       image: "/images/Sushi World.jpg",
//       description: "Fresh Sushi and Japanese dishes.",
//       location: "Sana'a - Zubairi Street",
//       address: "Opposite to Al Maktab Mall",
//       offers: "Free Drink with every Sushi Combo",
//       workingHours: "1:00 PM - 11:00 PM",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-3xl font-bold mb-6">Restaurants</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
// {restaurants.map((restaurant) => (
//   <Link
//     key={restaurant.id}
//     href={
//       restaurant.name === "Pizza House"
//         ? "/restaurants/pizza-house" // ← هنا البطاقة تنتقل للـ PizzaHouseMenu
//         : `/menu/${restaurant.id}`
//     }
//     className="block"
//   >
//     <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
//       <img
//         src={restaurant.image}
//         alt={restaurant.name}
//         className="w-full h-48 object-cover rounded-t-lg"
//       />
//       <div className="p-4">
//         <h2 className="text-xl font-bold">{restaurant.name}</h2>
//         <p className="text-gray-600">{restaurant.description}</p>
//       </div>
//     </div>
//   </Link>
// ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RestaurantsPage() {
  const router = useRouter();

  const restaurants = [
    {
      id: 1,
      name: "Pizza House",
      image: "/images/Pizza House.jpg",
      description: "Italian pizza with fresh ingredients.",
      location: "Sana'a - Algeria Street",
      address: "Near Al Saeed Market",
      offers: "Buy 1 Pizza, Get 1 Free",
      workingHours: "10:00 AM - 12:00 AM",
    },
    {
      id: 2,
      name: "Burger Point",
      image: "/images/BurgerPoint.jpg",
      description: "Juicy burgers and crispy fries.",
      location: "Sana'a - Hadda Street",
      address: "Beside Hadda Center",
      offers: "20% off on all meals every Friday",
      workingHours: "11:00 AM - 2:00 AM",
    },
    {
      id: 3,
      name: "Sushi World",
      image: "/images/Sushi World.jpg",
      description: "Fresh Sushi and Japanese dishes.",
      location: "Sana'a - Zubairi Street",
      address: "Opposite to Al Maktab Mall",
      offers: "Free Drink with every Sushi Combo",
      workingHours: "1:00 PM - 11:00 PM",
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
      : restaurant.name === "Sushi World"
      ? "/restaurants/sushi-world"
      : `/menu/${restaurant.id}`
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
