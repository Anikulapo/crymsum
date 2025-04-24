
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ClothesCard from "../components/ClothesCrard.jsx";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';


const Search = () => {
  const { items} = useSelector((state) => state.product);


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');



  const filteredProducts = items.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header />

      
          <div className="pt-20">
              <h1 className="text-3xl mb-6 px-[5%] font-inter font-[500] text-[#222222]">
                All Products ({filteredProducts.length} Items)
              </h1>
              <div className=" flex flex-wrap justify-center gap-25 md:gap-15 lg:gap-8 pb-[10%] ">
                {filteredProducts.map((item) => {
                  return <ClothesCard obj={item} key={item.id} />;
                })}
              </div>
          </div>

    
        <Footer />

    </>
  );
};

export default Search;
