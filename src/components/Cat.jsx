const Cat = ({obj}) => {
  return (
    <div
      className="max-w-1/2 pr-[5%] min-w-1/2 max-h-[434px] min-h-[300px] bg-white flex justify-start items-end
       overflow-hidden
       md:min-h-[400px]
        min lg:min-h-[420px] p-[2%] lg:min-w-1/4  lg:max-w-1/4  lg:pr-[5%] xl:pr-[12%] "
      style={{
        background: `linear-gradient(rgba(0, 0, 0,0.01),rgba(0, 0, 0,0.5)), url("/images/cat.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3 className="font-judson text-2xl pr-9 md:pr-0
      md:text-4xl font-bold text-white">
       { obj.name}
      </h3>
    </div>
  );
};

export default Cat;
