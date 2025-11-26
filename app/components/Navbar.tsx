import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-red-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">FoodDelivery</h1>
      <div className="space-x-6 text-lg">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/auth">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
