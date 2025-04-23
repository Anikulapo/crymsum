import { useState } from "react";

const ProductCard = ({obj}) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  return (
    <div className="px-[10%] lg:py-[10%] py-30 md:pt-[15%] grid lg:grid-cols-2 gap-20 font-inter  relative">
      <div className="flex gap-2 absolute 
                      left-[5%]
                      md:left-10 
                      lg:top-[11%] lg:left-[5%] top-20 
                      items-center justify-center ">
        <p className="font-europa font-bold text-[10px] cursor-pointer">Home</p>
        <img src="/images/path.svg" alt="slash" className="w-3 " />
        <p className="font-europa font-bold text-[10px] cursor-pointer">
          {obj.title}
        </p>
      </div>
      <div className="rounded-sm w-">
        <img
          src="/images/prod.png"
          alt="Product Image"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl">{obj.category}</h1>
        <p>${obj.price}</p>
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

        <p className="text-[#5F5F5F]">
          Experience unprecedented performance with our latest Premium Laptop
          Pro. Featuring a stunning display, powerful processor, and all-day
          battery life.
        </p>

        <div className="flex justify-between items-center p-0 relative">
          <button
            onClick={() => alert("This Button was clicked")}
            className="
        bg-[#202020] w-full text-white px-4 py-2 hover:bg-[#FF3D00] 
        transition duration-300 ease-in-out cursor-pointer"
          >
            Add to Bag
          </button>
          <img
            src="/images/shopping-bag.svg"
            alt="bag"
            className="z-10 absolute 
                      left-[25%]
                     
                      md:left-[37%]
                      lg:left-[25%]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
