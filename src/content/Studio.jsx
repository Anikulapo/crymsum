const Studio = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-end  h-[580px] pb-[100px] text-white font-judson font-[400]"
        style={{
          background: `linear-gradient(rgba(0, 0, 0,0.3),rgba(0, 0, 0,0.8)), url("/images/friends.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-xl font-[400]">NEW IN</p>
          <h1 className="lg:text-5xl text-[35px] mb-4 font-[400]">
            STUDIO COLLECTION
          </h1>
          <button
            className="text-center px-[35px] py-[13px] bg-white text-black hover:bg-black
           hover:text-white transition-colors duration-500 cursor-pointer text-sm tracking-[3px]"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Studio;
