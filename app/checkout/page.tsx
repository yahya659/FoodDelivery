"use client";

import { useCart } from "../../context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, total, removeFromCart, updateQuantity } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يمكن إرسال الطلب للباك إند لاحقًا
    console.log("Order info:", { name, address, phone, cart });
    setOrderPlaced(true);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl font-bold text-green-600">
          Thank you for your order !
        </h2>
        <h3 className="text-3xl font-bold text-gray-600">Ms/Mr :{name}</h3>
        <p className="text-lg">Your food will be delivered soon........</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      {/* قائمة السلة */}
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

      {/* إجمالي السعر */}
      <div className="mt-6 text-right">
        <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
      </div>

      {/* نموذج معلومات المستخدم */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4 mt-6"
      >
        <h2 className="text-xl font-bold mb-2">Delivery Information</h2>

        <input
          type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />

        <input
          type="text"
          placeholder="Address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
