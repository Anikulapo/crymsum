import Arrow from "./Arrow.jsx";
const CollectionCard = ({ obj }) => {
  return (
    <div
      style={{ backgroundImage: `url(${obj.img})` }}
      className={` bg-cover bg-no-repeat 
                            flex justify-center  items-end py-[2%] w-full  h-full max-h-[680px] px-[5%]
                            hover:scale-105 cursor-pointer relative`}
    >

      <div className="group
                      flex 
                      xl:justify-center justify-between items-center 
                      lg:gap-[4%] xl:gap-[30%]  text-white w-full">

        <p className="group font-judson font-[500] text-xl tracking-[-5%]">
          {obj.name.toUpperCase()}
        </p>
        <div className="group">
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
