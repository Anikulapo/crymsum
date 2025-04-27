import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectPayments } from "../state/card/paymentSlice.js";
import { addCard, removeCard } from "../state/card/paymentSlice.js";
import toast from "react-hot-toast";



const MyPayments = () => {
  const dispatch = useDispatch()
  const paymentMethods = useSelector(selectPayments)




  const [newPaymentMethod, setNewPaymentMethod] = useState("");
  const [card, setCard] = useState("");

  const handleAddPayment = (e) => {
    e.preventDefault();
    if (newPaymentMethod.trim() === ""|| newPaymentMethod.trim().length < 10 || card.trim() === "" || newPaymentMethod.trim().length > 10) {
      toast.error("Please enter a valid card number and bank name")
    }else{
      const newCard = {
        number: newPaymentMethod,
        card : card,
        id : Date.now(),
      }
      dispatch(addCard(newCard))
      setNewPaymentMethod("");
      setCard("")
    }

    
  };

  const handleRemovePayment = (id) => {
    dispatch(removeCard(id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mt-20 px-[5%] mb-10">
        <h1 className="font-inter text-2xl font-[500] mb-4">My Payments</h1>
        <p className="text-[#5F5F5F] font-inter text-[16px] mb-6">
          View, modify payment methods
        </p>

        <div className="border border-[#C5C5C580] p-6 rounded-xl space-y-6">

            <form
              onSubmit={(e) => handleAddPayment(e)}
             className="flex flex-wrap gap-4">
              <input
                type="text"
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                placeholder="Enter card number"
                value={newPaymentMethod}
                onChange={(e) => setNewPaymentMethod(e.target.value)}
              />
              <input
                  value={card}
                  onChange={(e) => setCard(e.target.value)}
                  placeholder="Enter Bank name"
                  className= "border border-gray-300 px-4 py-2 rounded-md "
                  type="text" />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-md"
              >
                Add
              </button>
            </form>


          <ul className="space-y-2">
            {paymentMethods.length === 0 ? (
              <p className="text-[#888] font-inter italic text-sm">No saved payment methods.</p>
            ) : (
              paymentMethods.map((method) => (
                <li
                  key={method.id}
                  className="flex justify-between items-center border px-4 py-2 rounded-md"
                >
                  <p>{method.number} <br /> <span className="text-[#888] capitalize">-{method.card}</span></p>
                  <button
                    className="text-red-500 text-sm font-medium"
                    onClick={() => handleRemovePayment(method.id)}
                  >
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPayments;
