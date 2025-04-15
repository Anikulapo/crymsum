import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import ClothesCard from "../components/ClothesCrard.jsx";

const Wishlist = () => {
    return (
        <div>
            <Header />
            <div className="pt-20">
                
                <h1 className="text-3xl mb-6 px-[5%] font-inter font-[500] text-[#222222]">My Wishlist (6 Items)</h1>
                    <div className=" flex flex-wrap gap-8 px-[5%] pb-[10%]" >
                        {/* Example usage of ClothesCard */}
                        <ClothesCard />
                        <ClothesCard />
                        <ClothesCard />
                        <ClothesCard />
                    </div>
                
            </div>
            <Footer />
        </div>
    );
};

export default Wishlist;