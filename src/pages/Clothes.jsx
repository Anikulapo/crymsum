import { useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ClothesCard from "../components/ClothesCrard.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../state/product/productSlice.js";

const Clothes = () => {
  const { items, status, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products when the component mounts
    // The fetchProducts function will handle loading and error states internally
  }, [dispatch]);

  return (
    <>

        <Header />

      {status === "loading" && (
        <div className="pt-20">
          <h1 className="text-3xl mb-6 px-[5%] font-inter font-[500] text-[#222222]">
            Loading.....
          </h1>
          <div className=" flex w-full h-full items-center justify-center pt-[5%] pb-[10%]">
            <img src="/images/load.svg" alt="Loading" />
          </div>
        </div>
      )}
      {error ? (
        <div className=" flex w-screen h-screen items-center justify-center ">
          <h1 className="lg:text-3xl mb-6 font-inter text-center font-[500] text-[#222222] pt-[10%]">
            Sorry An Error Occured <br /> Please Try Again
          </h1>
        </div>
      ) : (
        <div className={ (status === "loading" || status === "failed")  ? "hidden" : "pt-20 block" }>
          <h1 className="text-3xl mb-6 px-[5%] font-inter font-[500] text-[#222222]">
            My Wishlist ({items.length} Items)
          </h1>
          <div className=" flex flex-wrap justify-center gap-8 pb-[10%] ">
            {items.map((item) => {
              return (
              <Link to={`/product/${item.id}`} key={item.id}>
                <ClothesCard obj={item} />
              </Link>
            );
            })}
          </div>
        </div>
      )}
      <div className={error ? "mt-20" : "mt-4"}>
        <Footer/>
      </div>
    </>
  );
};

export default Clothes;
