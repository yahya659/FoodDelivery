type Props = {
  name: string;
  image: string;
};

const CategoryCard = ({ name, image }: Props) => {
  return (
    <div className="relative w-40 h-40 rounded-xl overflow-hidden shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* الصورة */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover brightness-90 hover:brightness-75 transition duration-300"
      />

      
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
        <h3 className="text-white text-lg font-bold">{name}</h3>
      </div>

    
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-2 text-center">
        <h3 className="text-white font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
