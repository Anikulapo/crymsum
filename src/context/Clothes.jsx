import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ClothesCard from "../components/ClothesCrard.jsx";
import { Link } from "react-router-dom";

const Clothes = () => {
  const BaseUrl = "https://fakestoreapi.com/";
  const [cloth, setCloth] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const FetchClothes = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BaseUrl}products`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const clothes =  data.filter(
          (item) => item.category == "men's clothing" || item.category == "women's clothing"
        )
        setCloth(clothes)
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    FetchClothes();
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
      {isLoading && (
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
        <div className={ isLoading ? "hidden" : "pt-20 block" }>
          <h1 className="text-3xl mb-6 px-[5%] font-inter font-[500] text-[#222222]">
            My Wishlist ({cloth.length} Items)
          </h1>
          <div className=" flex flex-wrap justify-center gap-8 pb-[10%] ">
            {cloth.map((item) => {
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
        <Footer></Footer>
      </div>
    </>
  );
};

export default Clothes;
