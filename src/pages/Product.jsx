import { useState } from "react";

const Product = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  return (
    <div className="px-[10%] py-[5%] grid grid-cols-2 gap-20 font-inter ">
      <div className="rounded-sm">
        <img
          src="/images/prod.png"
          alt="Product Image"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl">Premium Laptop Pro</h1>
        <p>$1299.99</p>
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
            className="
        bg-[#202020] w-full text-white px-4 py-2 hover:bg-[#FF3D00] 
        transition duration-300 ease-in-out cursor-pointer"
          >
            Add to Bag
          </button>
          <img
            src="/images/shopping-bag.svg"
            alt="bag"
            className="z-10 absolute left-[17%] lg:left-[25%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
