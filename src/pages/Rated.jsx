import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ClothesCard from "../components/ClothesCrard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../state/product/productSlice.js";
import { Rings } from "react-loader-spinner";

const Rated = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const { items, status, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products when the component mounts
  }, [dispatch]);

  useEffect(() => {
    setFilteredItems(items.filter((item) => item.rating.rate >= 4.0));
  }, [items]);

  return (
    <>
      <div className="overflow-hidden">
        <Header />
        {status === "loading" && (
          <div className="pt-20 overflow-hidden">
            <div className=" flex w-screen h-screen items-center justify-center pt-[5%] pb-[10%]">
              <Rings
                visible={true}
                height="100"
                width="100"
                color="#000000"
                ariaLabel="rings-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          </div>
        )}
        {error ? (
          <div className=" flex w-screen h-screen items-center justify-center overflow-hidden">
            <h1 className="lg:text-3xl mb-6 font-inter text-center font-[500] text-[#222222] pt-[10%]">
              Sorry An Error Occured <br /> Please Try Again
            </h1>
          </div>
        ) : (
          <div
            className={
              status === "loading" || status === "failed"
                ? "hidden"
                : "pt-20 block"
            }
          >
            <h1 className="text-3xl mb-6 px-[5%] font-inter font-[500] text-[#222222]">
              Best Picks ({filteredItems.length} Items)
            </h1>
            <div className=" flex flex-wrap justify-center md:justify-start gap-25 md:gap-15 lg:gap-8 pb-[10%] md:px-[5%]">
              {filteredItems.map((item) => {
                return <ClothesCard obj={item} key={item.id} />;
              })}
            </div>
          </div>
        )}
        <div className={error ? "mt-20" : "mt-4"}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Rated;
