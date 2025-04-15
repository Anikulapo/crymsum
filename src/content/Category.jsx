import Cat from "../components/Cat.jsx";
const Category = () => {
  const words = [
    {
      id: 1,
      name : "Oversized T-Shirts",
    },
    {
      id: 2,
      name : "Classic Fit T-Shirts",

    },
    {
      id: 3,
      name : "Joggers",
    },
    {
      id: 4,
      name : "Jeans",
    }

  ]
  return (
    <div className="  font-judson">
      <h1 className="p-[5%] text-4xl lg:text-7xl font-[400] text-[#222222]">
        Shop Items by <br />
        <span className="font-bold ">category For Men & Women</span>
      </h1>

      <div className="flex flex-wrap">
        {
          words.map((obj) => {
            return (<Cat obj={obj} key={obj.id}/>
            );
          })
        }
      </div>
    </div>
  );
};

export default Category;
