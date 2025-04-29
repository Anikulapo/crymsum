import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser  } from "../state/user/userSlice";
import toast from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim().length === 11
    ) {
      const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
      };
      dispatch(addUser(newUser));
      toast.success("Signup successful!");
      setName("");
      setEmail("");
      setPhone("");
    } else {
      toast.error("Please enter valid details !");
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center font-inter">
          Signup
        </h2>
        <form onSubmit={(e) => handleSignup(e)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-green-600  cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
