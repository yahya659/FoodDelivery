import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactNode } from "react";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "FoodDelivery",
  description: "Best food delivery website built with Next.js & TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
