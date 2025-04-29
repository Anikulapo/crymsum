
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import {  removeUser, selectUser } from "../state/user/userSlice.js";
import Signup from "../content/SignIn.jsx";

const MyProfile = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeUser());
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mt-20 px-[5%] mb-10">
        <h1 className="font-inter text-2xl font-[500] ">My Profile</h1>
        {user.length == 1 && (<p className="text-[#5F5F5F] font-inter text-[16px] mb-6">
          User Info
        </p>)}
        {user.length == 0 && (
          <Signup />
        )}

        <ul className="space-y-2">
          {user.length === 0 ? (
            <p className="text-[#888] font-inter italic text-sm"></p>
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
