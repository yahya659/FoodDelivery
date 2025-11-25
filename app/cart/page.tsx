"use client";

import { useCart } from "../../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-red-500 font-bold">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>

        <Link
          href="/checkout"
          className="mt-4 inline-block px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
