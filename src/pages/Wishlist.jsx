import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import ClothesCard from "../components/ClothesCrard.jsx";
import { selectWish } from "../state/wish/wishSlice.js";
import { useSelector } from "react-redux";


const Wishlist = () => {
    const item = useSelector(selectWish);

    return (
        <>
        <Header />
  
        
            <div className="pt-20">
                <h1 className="text-3xl mb-6 px-[5%] font-inter font-[500] text-[#222222]">
                  WishList ({item.length} Items)
                </h1>
                <div className=" flex flex-wrap justify-center gap-25 md:gap-15 lg:gap-8 pb-[10%] ">
                    {item.length === 0 ? (
                        <div className="w-full h-[400px] flex flex-col items-center justify-center mb-6">
                        <p className="text-[#5F5F5F] font-inter text-xl lg:text-5xl">
                          No items in your wishlist.
                        </p>
                      </div>
                    ) : (
                        item.map((item) => {
                        return <ClothesCard obj={item} key={item.id} />;
                        })
                    )}
                </div>
            </div>
  
      
          <Footer />
  
      </>
    );
};

export default Wishlist;