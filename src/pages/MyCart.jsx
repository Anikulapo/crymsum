import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Stylish Dog Jacket",
      image: "/images/product5.jpg",
      quantity: 2,
      price: 45,
    },
    {
      id: 2,
      name: "Pet Feeding Bowl Set",
      image: "/images/product6.jpg",
      quantity: 1,
      price: 30,
    },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mt-20 px-[5%] mb-10">
        <h1 className="font-inter text-2xl font-[500] mb-6">My Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-[#5F5F5F] font-inter text-[16px]">Your cart is currently empty.</p>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 border border-[#C5C5C580] p-4 rounded-xl">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  <div className="flex flex-col justify-between w-full">
                    <div>
                      <p className="font-inter font-medium text-[16px]">{item.name}</p>
                      <p className="text-[#5F5F5F] font-inter text-[14px]">Price: ${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex gap-2 items-center">
                        <button
                          className="border border-gray-300 px-2 py-1 text-sm"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="font-inter text-[14px]">{item.quantity}</span>
                        <button
                          className="border border-gray-300 px-2 py-1 text-sm"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="text-red-500 text-sm font-inter underline"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="border border-[#C5C5C580] p-6 rounded-xl h-fit">
              <h2 className="font-inter font-[500] text-lg mb-4">Order Summary</h2>
              <div className="flex justify-between font-inter text-[14px] mb-2">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-inter text-[14px] mb-4">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between font-inter text-[16px] font-medium border-t pt-3">
                <p>Total</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <button className="w-full mt-6 bg-black text-white py-2 rounded-lg text-sm font-inter">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyCart;
