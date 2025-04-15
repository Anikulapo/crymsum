const ClothesCard = () => {
  return (
    <div className=" overflow-hidden max-w-[310px]">
      <div className="relative w-full max-h-[330px] bg-white flex items-center justify-center overflow-hidden">
        <img
          src="/images/card.png"
          alt="Green Shirt"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-115"
        />
      </div>
      <div className=" text-left border-x border-[#C5C5C580] bg-white p-4 flex flex-col gap-2">
        <h3 className=" font-judson text-[#202020] font-[500]">
          TSS Originals: Dark Paisley
        </h3>
        <p className="font-judson text-[#5F5F5F]">Men Relaxed Shirts</p>
        <p className="text-[#202020] font-[600] font-judson">₹48.25</p>
      </div>
      <div className="flex justify-between items-center p-0 relative">
        <button className="bg-[#202020] w-full text-white px-4 py-2 hover:bg-[#FF3D00] transition duration-300 ease-in-out cursor-pointer">
          Add to Bag
        </button>
        <img
          src="/images/shopping-bag.svg"
          alt="bag"
          className="z-10 absolute left-[17%] lg:left-[25%]"
        />
      </div>
    </div>
  );
};

export default ClothesCard;
