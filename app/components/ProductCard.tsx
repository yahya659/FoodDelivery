type Props = {
  name: string;
  price: number;
  image: string;
};

const ProductCard = ({ name, price, image }: Props) => {
  return (
    <div className="w-52 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
      <img src={image} alt={name} className="w-full h-36 object-cover" />
      <div className="p-2">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-red-500 font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
