import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser, selectUser } from "../state/user/userSlice.js";

const MyProfile = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim().length === 11
    ) {
      const add = {
        id: 1,
        name: name,
        email: email,
        phone: phone,
      };
      dispatch(addUser(add));
      toast.success("Details Entered Successfully");
      setEmail("");
      setName("");
    } else {
      toast.error("Invalid Parameters");
    }
  };

  const handleRemove = () => {
    dispatch(removeUser());
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mt-20 px-[5%] mb-10">
        <h1 className="font-inter text-2xl font-[500] mb-4">My Profile</h1>
        <p className="text-[#5F5F5F] font-inter text-[16px] mb-6">
          User Info
        </p>
        {user.length == 0 && (
          <form
            action=""
            className="border border-[#C5C5C580] p-6 rounded-xl space-y-6"
          >
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
              <label className="block font-inter text-[14px] mb-2">
                Phone Number
              </label>
              <input
                type="text"
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                placeholder="Enter your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button
              className="bg-black text-white py-2 px-6 rounded-md"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
          </form>
        )}

        <ul className="space-y-2">
          {user.length === 0 ? (
            <p className="text-[#888] font-inter italic text-sm">No User</p>
          ) : (
            user.map((method) => (
              <li
                key={method.id}
                className="flex justify-between items-center border px-4 py-2 rounded-md"
              >
                <p>
                  {method.name} <br />{" "}
                  <span className="text-[#888]">-{method.email}</span>
                </p>
                <button
                  className="text-red-500 text-sm font-medium"
                  onClick={handleRemove}
                >
                  Remove This User
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;
