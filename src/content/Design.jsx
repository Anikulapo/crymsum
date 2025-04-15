const Design = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-end  h-[400px] pb-[100px] text-white font-judson font-[400]
        bg-[url('/images/hand.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="flex flex-col items-center justify-center max-w-[500px]">
          <p className="text-center text-3xl font-[400]">Design Your World</p>
          <h1 className="lg:text-5xl text-[35px] mb-4 font-[400] text-center">
            Unleash your creativity with custom t-shirts
          </h1>
          <button
            className="text-center px-[35px] py-[7px]
        bg-white text-black hover:bg-black hover:text-white transition-colors cursor-pointer
        text-[20px] tracking-[5px] font-judson font-[400]"
          >
            Start Designing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Design;
