const Sale = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center  h-[580px] pb-[100px] text-white font-judson font-[400]"
        style={{
          background: `linear-gradient(rgba(0, 0, 0,0.3),rgba(0, 0, 0,0.8)), url("/images/sale.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-center lg:text-[40px] text-3xl font-[400]">
            Don’t delay; buy today.
          </p>
          <h1 className="lg:text-[64px] text-[45px] mb-4 font-[700] text-center mt-8">
            Summer Sale<br />  50% Percent Off
          </h1>
          <button className="text-center px-[45px] py-[10px] bg-white text-black hover:bg-black hover:text-white transition-colors duration-500 cursor-pointer">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sale;
