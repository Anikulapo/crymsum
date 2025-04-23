import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const MyPayments = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [newPaymentMethod, setNewPaymentMethod] = useState("");

  const handleAddPayment = () => {
    if (newPaymentMethod.trim() === "") return;
    setPaymentMethods((prev) => [...prev, newPaymentMethod]);
    setNewPaymentMethod("");
  };

  const handleRemovePayment = (index) => {
    setPaymentMethods((prev) => prev.filter((_, i) => i !== index));
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
          <div className="flex gap-4">
            <input
              type="text"
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
              placeholder="Enter card number"
              value={newPaymentMethod}
              onChange={(e) => setNewPaymentMethod(e.target.value)}
            />
            <button
              className="bg-black text-white px-6 py-2 rounded-md"
              onClick={handleAddPayment}
            >
              Add
            </button>
          </div>

          <ul className="space-y-2">
            {paymentMethods.length === 0 ? (
              <p className="text-[#888] font-inter italic text-sm">No saved payment methods.</p>
            ) : (
              paymentMethods.map((method, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border px-4 py-2 rounded-md"
                >
                  <span>{method}</span>
                  <button
                    className="text-red-500 text-sm font-medium"
                    onClick={() => handleRemovePayment(index)}
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
