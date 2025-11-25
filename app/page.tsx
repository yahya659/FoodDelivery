import CategoryCard from "./components/CategoryCard";
import RestaurantCard from "./components/RestaurantCard";
import ProductCard from "./components/ProductCard";
import { categories, restaurants, featuredProducts } from "../data";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-10">
      
      {/* بانر رئيسي */}
      <div className="bg-red-500 text-white rounded-lg p-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Delicious Food, Delivered Fast!</h1>
        <p className="text-lg">Order from your favorite restaurants in seconds.</p>
      </div>

      {/* أقسام الطعام */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} name={cat.name} image={cat.image} />
          ))}
        </div>
      </section>

      {/* المطاعم */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Restaurants</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {restaurants.map((rest) => (
            <RestaurantCard key={rest.id} name={rest.name} image={rest.image} rating={rest.rating} />
          ))}
        </div>
      </section>

      {/* الطعام المميز */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {featuredProducts.map((prod) => (
            <ProductCard key={prod.id} name={prod.name} price={prod.price} image={prod.image} />
          ))}
        </div>
      </section>
    </div>
  );
}
