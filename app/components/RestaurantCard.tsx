type Props = {
  name: string;
  image: string;
  rating: number;
};

const RestaurantCard = ({ name, image, rating }: Props) => {
  return (
    <div className="w-60 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
      <img src={image} alt={name} className="w-full h-36 object-cover" />
      <div className="p-2">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">Rating: {rating} ⭐</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
