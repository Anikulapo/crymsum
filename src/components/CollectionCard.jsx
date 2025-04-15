import Arrow from "./Arrow.jsx";
const CollectionCard = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className="bg-[url('/images/model2.png')] bg-cover bg-no-repeat 
                            flex justify-center  items-end py-[2%] w-full max-w-[450px] h-full max-h-[600px]
                            "
      >
        <div className="flex justify-center items-center gap-[45%] text-white w-full">
          <p className="font-judson font-[500] text-xl tracking-[-5%]">
            Men Summer <br />
            Collection
          </p>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
