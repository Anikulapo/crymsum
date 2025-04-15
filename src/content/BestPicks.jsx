import Picks from "../components/picks";
const BestPicks = () => {
  const picks = [
    {
      id: 1,
      img: "/images/red.png",
      name: "Long sleeve Red shirt",
      location: "From United States",
    },
    {
      id: 2,
      img: "/images/white.png",
      name: "White Sweater Casual",
      location: "From Indonesia",
    },
    {
      id: 3,
      img: "/images/pink.png",
      name: "Pink t-shirt Oversized",
      location: "From Indonesia",
    },
    {
      id: 4,
      img: "/images/black.png",
      name: "Black T-shirt Oversized",
      location: "From Indonesia",
    },
  ];

  return (
    <div className="px-[5%] font-judson">
      <h1 className="text-4xl lg:text-7xl font-[400] text-[#222222]">
        Our <br />
        <span className="font-bold ">Best Picks For You</span>
      </h1>

      <div className="flex flex-wrap gap-4 justify-center items-center mt-10">
        {picks.map((obj) => (
          <Picks key={obj.id} obj={obj} />
        ))}
      </div>
    </div>
  );
};

export default BestPicks;
