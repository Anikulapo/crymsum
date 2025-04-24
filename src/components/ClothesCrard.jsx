import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ClothesCard = ({obj}) => {
  const handleAddToBag = (e) => {
    e.stopPropagation()
    toast.success("Item added to bag!");
  }

  return (
    <div className=" overflow-hidden max-w-[310px] max-h-[600px] ">
      <Link to={`/product/${obj.id}`} className="w-full h-full">
        <div className="relative w-[310px] h-[330px] bg-white flex items-center justify-center overflow-hidden">
          <img
            src={obj.image}
            alt="Green Shirt"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-115"
          />
        </div>
       
          <div className=" text-left border-x border-[#C5C5C580] bg-white p-4 flex flex-col gap-2 w-full h-[150px]">
            <h3 className=" font-judson text-[#202020] font-[500]">
              {obj.title}
            </h3>
            <p className="font-judson text-[#5F5F5F]">{obj.category}</p>
            <p className="text-[#202020] font-[600] font-judson">${obj.price}</p>
          </div>
        </Link>
          <div 
          onClick={handleAddToBag}
          className=" group flex justify-between items-center p-0 relative  ">
            <button
            
             className="bg-[#202020] w-full text-white px-4 py-2 group-hover:bg-[#FF3D00] transition duration-300 ease-in-out cursor-pointer">
              Add to Bag
            </button>
            <img
              src="/images/shopping-bag.svg"
              alt="bag"
              className="group z-10 absolute left-[17%] lg:left-[25%] cursor-pointer"
            />
          </div>

      
    </div>
  );
};

export default ClothesCard;
