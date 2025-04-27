import Option from "../components/Option.jsx";
import { useSelector, useDispatch} from "react-redux";
import { selectPayments } from "../state/card/paymentSlice.js";
import { useState } from "react";
import {placeOrder} from "../state/cart/cartSlice.js";
import { Link } from "react-router-dom";

const SelectPay = ({open, close}) => {
    const dispatch = useDispatch()
  const paymentOptions = useSelector(selectPayments);
  const [selectedOption, setSelectedOption] = useState(null);
  const submitOrder = () => {
      dispatch(placeOrder());
      close();
    };

  return (
    <div 
    onClick={close}
    className={`inset-0 absolute z-100 bg-[rgba(0,0,0,.5)] h-[200%] md:h-screen flex justify-center items-center font-inter ${open ? "visible": "invisible"}`}>
      <div
      onClick={e => e.stopPropagation()}
       className={`bg-white md:p-20 p-5 flex flex-col items-center rounded-lg gap-10 relative transition-all ${open ? "visible scale-100": "scale-125 invisible"}`}>
        <h1>Select Your Payment Option</h1>
        <div className="flex flex-wrap md:gap-10 gap-5 justify-center items-center">
            {paymentOptions.length > 0 ? (paymentOptions.map((obj) => (
                <Option
                    key={obj.id}
                    obj={obj}
                    isSelected={selectedOption === obj.id}
                    onSelect={() => setSelectedOption(obj.id)}
                />
            ))): (<h1>No Payment Plans Avaliable Please <Link to={"/payment"}><span className="text-blue-600">Insert</span></Link> them</h1>)}
          
        </div>
        {selectedOption && (
            <div className="absolute w-[80%] bottom-[5%]">
                <button
                className="  w-full mt-6 bg-black text-white py-2 rounded-lg text-sm font-inter cursor-pointer hover:bg-green-600 transition-colors duration-300"
                onClick={submitOrder}
              >
                Proceed to Checkout
              </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default SelectPay;
