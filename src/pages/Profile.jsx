import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import AccountInfo from "../components/AccountInfo.jsx"; 
import { Link } from "react-router-dom";

const Profile = () => {


    const accountDetails = [
        {
           link : "/order",
           title : "My Order",
            details : "View all your orders and track their status.",
        },
        {
            link : "/cart",
            title : "My Cart",
             details : "View all your orders and track their status.",
         },
         {
            link : "/payment",
            title : "My Payments",
             details : "View, modify payment methods",
         },
         {
            link : "",
            title : "My Profile",
             details : "Edit personal info, change password",
         },
         {
            link : "/wish",
            title : "My Wishlist",
             details : "View, modify and track orders",
         },
         {
            link : "/address",
            title : "My Addresses",
             details : "Edit, add or remove addresses",
         },
    ]
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="mt-20 mx-[5%]">
        <h1 className="font-inter font-[500] text-2xl">Account Information</h1>
      </div>
      <div className="flex-wrap gap-5 flex justify-center items-center mt-8 mb-16 mx-[5%]
                      md:grid md:justify-normal md:grid-cols-2 lg:grid-cols-3 ">
        {accountDetails.map((item) => (<Link to={item.link} key={item.title}>
          <AccountInfo key={item.title} title={item.title} details={item.details} />
        </Link>))}
      </div>
      <Footer />
    </div>
  );
}

export default Profile;