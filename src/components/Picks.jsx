const Picks = ({obj}) => {
  return (
    <div className=" overflow-hidden max-w-[400px]
                    md:min-w-[48%]
                    xl:min-w-[100px]
                    xl:max-w-[24%]
    ">
      <div className="relative w-full max-h-[434px]
       bg-white flex items-center justify-center overflow-hidden
       ">
        <img
          src={obj.img}
          alt={obj.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-115"
        />
      </div>
      <div className=" text-left bg-white pt-4 flex flex-col gap-2">
        <h3 className=" font-judson text-[#202020] font-[700] text-xl">
          {obj.name}
        </h3>
        <p className="font-judson text-[#5F5F5F]">{obj.location}</p>
        <p className="text-[#202020] font-[600] font-judson">₹48.25</p>
      </div>
    </div>
  );
};

export default Picks;
