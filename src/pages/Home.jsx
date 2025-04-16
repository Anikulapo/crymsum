import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Sale from "../content/Sale.jsx";
import BestPicks from "../content/BestPicks.jsx";
import Category from "../content/category.jsx";
import Design from "../content/Design.jsx";
import Collection from "../content/Collection";
import Studio from "../content/Studio.jsx";
const Home = () => {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="flex items-center justify-center pt-18 bg-[#202020] pb-1">
        <p className="font-judson text-white font-[400] ">
          FREE SHIPPING ON ORDERS ABOVE RS. 2500
        </p>
      </div>
      <div>
        <Studio />
      </div>
      <div className="py-20">
        <BestPicks />    
      </div>
      <div className="pb-25">
        <Design />
      </div>
      <div className="pb-25">
        <Category />
      </div>
      <div className="pb-25">
        <Sale />
      </div>
      <div className="pb-25">
        <Collection />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
