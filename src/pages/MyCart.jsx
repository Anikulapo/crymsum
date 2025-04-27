
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../state/cart/cartSlice.js";
import {
  selectCartItems,
  selectTotalPrice,
  changeSize,
} from "../state/cart/cartSlice.js";
import SelectPay from "../content/SelectPay.jsx";
import { useState } from "react";


const MyCart = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const totalPrice = useSelector(selectTotalPrice);




  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };



  const increase = (id) => {
    dispatch(increaseItemQuantity(id));
  };

  const decrease = (id) => {
    dispatch(decreaseItemQuantity(id));
  };

  const submit = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mt-20 px-[5%] mb-10">
        <h1 className="font-inter text-2xl font-[500] mb-6 lg:text-4xl">
          My Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="w-full h-[400px] flex flex-col items-center justify-center mb-6">
            <p className="text-[#5F5F5F] font-inter text-xl lg:text-5xl">
              Your cart is currently empty.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border border-[#C5C5C580] p-4 rounded-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div>
                      <p className="font-inter font-medium text-[16px]">
                        {item.title}
                      </p>
                      <p className="text-[#5F5F5F] font-inter text-[14px]">
                        Price: ₹{item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex gap-2 items-center">
                        <button
                          className="border border-gray-300 px-2 py-1 text-sm cursor-pointer"
                          onClick={() => decrease(item.id)}
                        >
                          -
                        </button>
                        <span className="font-inter text-[14px]">
                          {item.quantity}
                        </span>
                        <button
                          className="border border-gray-300 px-2 py-1 text-sm cursor-pointer"
                          onClick={() => increase(item.id)}
                        >
                          +
                        </button>
                      </div>

                      <div>
                        <select
                          value={item.size}
                          onChange={(e) =>
                            dispatch(
                              changeSize({
                                id: item.id,
                                size: e.target.value,
                              })
                            )
                          }
                        >
                          <option value="XS">Extra Small</option>
                          <option value="S">Small</option>
                          <option value="M">Medium</option>
                          <option value="L">Large</option>
                          <option value="XL">Extra Large</option>
                          <option value="XXL">Huge</option>
                        </select>
                      </div>
                      <button
                        className="text-red-500 text-sm font-inter underline cursor-pointer"
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
              <h2 className="font-inter font-[500] text-lg mb-4">
                Order Summary
              </h2>
              <div className="flex justify-between font-inter text-[14px] mb-2">
                <p>Subtotal</p>
                <p>₹{totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-inter text-[14px] mb-4">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between font-inter text-[16px] font-medium border-t pt-3">
                <p>Total</p>
                <p>₹{totalPrice.toFixed(2)}</p>
              </div>
              <button
                className="w-full mt-6 bg-black text-white py-2 rounded-lg text-sm font-inter cursor-pointer hover:bg-green-600 transition-colors duration-300"
                onClick={submit}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>

        <SelectPay
        open ={open}
        close={submit}
        />


      <Footer />
    </div>
  );
};

export default MyCart;
