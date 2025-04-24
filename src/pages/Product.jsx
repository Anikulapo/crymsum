import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ProductCard from '../content/ProductCard.jsx';
import { useParams } from 'react-router-dom';
import {  useSelector } from "react-redux";



const Product = () => {
  const { items } = useSelector((state) => state.product);
  const { id } = useParams();
  const product = items.find((item) => item.id === parseInt(id));
  

  return(
    <div>
      <Header/>


     

      <div className='flex items-center justify-center'>
        <ProductCard obj={product}/>
      </div>

      <Footer />
    </div>
  )
};

export default Product;
