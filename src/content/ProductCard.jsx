import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../state/categories/categorySlice.js";
import { addToCart } from "../state/cart/cartSlice.js";
import { selectCartItems } from "../state/cart/cartSlice.js";


const ProductCard = ({ obj }) => {
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  const Category = (category) => {
    dispatch(setCategory(category));
    toast.success(`${category} Category Selected`);
  };
  const handleAddToBag = (e, product, size) => {
    e.stopPropagation();
    const pack = {
      ...product,
      size: size,
      quantity : quantity 
    };
    dispatch(addToCart(pack));
  };
  const increase = () => {
    setQuantity(quantity + 1);
    };
  
    const decrease = () => {
      if(quantity > 1){
        setQuantity(quantity - 1);
      }
      else{
        toast.error("Quantity can't be less than 1")
      }
    };

  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="px-[10%] lg:py-[12%] py-30 md:pt-[15%] grid lg:grid-cols-2 gap-20 font-inter  relative">
      <div
        className="flex gap-2 absolute 
                      left-[5%]
                      md:left-10 
                      lg:top-[8%] lg:left-[5%] top-20 
                      items-center justify-center "
      >
        <Link to={"/"}>
          <p className="font-europa font-bold text-[8px]  md:text-[15px] cursor-pointer">
            Home
          </p>
        </Link>
        <img src="/images/path.svg" alt="slash" className="w-3 " />
        <Link to={"/clothes"}>
          <div onClick={() => Category(obj.category)}>
            <p className="font-europa font-bold text-[8px] md:text-[15px]  cursor-pointer capitalize">
              {obj.category}
            </p>
          </div>
        </Link>
        <img src="/images/path.svg" alt="slash" className="w-3 " />
        <p className="font-europa font-bold text-[8px] md:text-[15px]  cursor-pointer">
          {obj.title}
        </p>
      </div>
      <div className="rounded-sm w-">
        <img src={obj.image} alt="Product Image" className="rounded-xl" />
      </div>
      <div className="lg:flex lg:justify-center lg:pt-20">
        <div className="flex flex-col gap-10">
          <h1 className="lg:text-5xl text-3xl">{obj.title}</h1>
          <p>₹{obj.price}</p>
          <div className="flex flex-col gap-4">
            <h3>Size</h3>
            <ul className="flex gap-2 flex-wrap">
              {sizes.map((size) => (
                <li key={size}>
                  <button
                    className={`border px-6 py-1 rounded-lg cursor-pointer transition duration-300 ease-in-out ${
                      selectedSize === size
                        ? "bg-[#3c3c9b] text-white border-[#3c3c9b]"
                        : "border-gray-500 hover:text-[#3c3c9b] hover:bg-[#a6def5] hover:border-[#3c3c9b]"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 items-center">
            <button
              className="border border-gray-300 px-2 py-1 text-sm cursor-pointer"
              onClick={decrease}
            >
              -
            </button>
            <span className="font-inter text-[14px]">{quantity}</span>
            <button
              className="border border-gray-300 px-2 py-1 text-sm cursor-pointer"
              onClick={increase}
            >
              +
            </button>
          </div>

          <p className="text-[#5F5F5F]">{obj.description}</p>
          {cartItems.find((item) => item.id === obj.id) ? (
            <div className=" group flex justify-between items-center p-0 relative  ">
              <button className="bg-green-600 w-full text-white px-4 py-2   cursor-pointer">
                Added to Bag
              </button>
            </div>
          ) : (
            <div className=" group flex justify-between items-center p-0 relative  ">
              <button
                onClick={(e) => handleAddToBag(e, obj)}
                className="bg-[#202020] w-full text-white px-4 py-2 group-hover:bg-[#FF3D00] transition duration-300 ease-in-out cursor-pointer"
              >
                Add to Bag
              </button>
              <img
                src="/images/shopping-bag.svg"
                alt="bag"
                className="group z-10 absolute left-[17%] lg:left-[25%] cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
