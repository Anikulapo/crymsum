import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const MyAddresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    // Prevent adding empty address
    if (newAddress.trim() === "") return;
    setAddresses((prev) => [...prev, newAddress]);
    setNewAddress("");
  };

  const handleRemove = (index) => {
    setAddresses((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mt-20 px-[5%] mb-10">
        <h1 className="font-inter text-2xl font-[500] mb-4">My Addresses</h1>
        <p className="text-[#5F5F5F] font-inter text-[16px] mb-6">
          Edit, add or remove addresses
        </p>

        <div className="border border-[#C5C5C580] p-6 rounded-xl space-y-6">
          <div className="flex gap-4">
            <form action="" className="flex gap-4 w-full " onSubmit={handleAdd}>
              <input
                type="text"
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                placeholder="Enter new address"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
              />
              <button
                className="bg-black text-white px-6 py-2 rounded-md"
                onClick={handleAdd}
              >
                Add
              </button>
            </form>
          </div>

          <ul className="space-y-2">
            {addresses.length === 0 ? (
              <p className="text-[#888] font-inter italic text-sm">No saved addresses.</p>
            ) : (
              addresses.map((address, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border px-4 py-2 rounded-md"
                >
                  <span>{address}</span>
                  <button
                    className="text-red-500 text-sm font-medium"
                    onClick={() => handleRemove(index)}
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

export default MyAddresses;
