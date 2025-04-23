import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const MyProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSaveChanges = () => {
    // Logic to save profile updates
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mt-20 px-[5%] mb-10">
        <h1 className="font-inter text-2xl font-[500] mb-4">My Profile</h1>
        <p className="text-[#5F5F5F] font-inter text-[16px] mb-6">
          Edit personal info, change password
        </p>

        <div className="border border-[#C5C5C580] p-6 rounded-xl space-y-6">
          <div>
            <label className="block font-inter text-[14px] mb-2">Name</label>
            <input
              type="text"
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-inter text-[14px] mb-2">Email</label>
            <input
              type="email"
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-inter text-[14px] mb-2">New Password</label>
            <input
              type="password"
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-black text-white py-2 px-6 rounded-md"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;
