import CollectionCard from "../components/CollectionCard";
import { useDispatch } from "react-redux";
import { setCategory } from "../state/categories/categorySlice.js";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Collection = () => {
  const dispatch = useDispatch();

  const maleCategory = () => {
    dispatch(setCategory("men's clothing"));
    toast.success("Male Category Selected");
  };
  const femaleCategory = () => {
    dispatch(setCategory("women's clothing"));
    toast.success("Female Category Selected");
  };
  const collect = [
    {
      id: 1,
      img: "/images/model.png",
      name: "men summer collection",
    },
    {
      id: 2,
      img: "/images/model4.png",
      name: "women sport collection",
    },
    {
      id: 3,
      img: "/images/model2.png",
      name: "women new sport collection",
    },
    {
      id: 4,
      img: "/images/model3.png",
      name: "women flexible collection",
    },
    {
      id: 5,
      img: "/images/model1.png",
      name: "men casual  collection",
    },
  ];
  return (
    <div className=" font-judson overflow-hidden">
      <h1 className="px-[5%] text-xl md:text-4xl lg:text-5xl xl:text-7xl font-[400] text-[#222222] mb-20">
        Explore Our Must Have <br />
        <span className="font-bold ">summer Collections And Stay Trendy</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-[680px] gap-5 mb-20">
        <div className="flex flex-col h-full gap-5 w-full">
          <div onClick={maleCategory} className="flex h-full cursor-pointer">
            <Link to={"/clothes"} className="w-full h-full">
              <CollectionCard obj={collect[0]} />
            </Link>
          </div>

          <div onClick={femaleCategory} className="flex h-full cursor-pointer">
            <Link to={"/clothes"} className="w-full h-full">
              <CollectionCard obj={collect[1]} />
            </Link>
          </div>
        </div>
        <div onClick={femaleCategory} className="flex h-full cursor-pointer">
          <Link to={"/clothes"} className="w-full h-full">
            <CollectionCard obj={collect[2]} />
          </Link>
        </div>
        <div className="flex flex-col h-full gap-5">
          <div onClick={femaleCategory} className="flex h-full cursor-pointer">
            <Link to={"/clothes"} className="w-full h-full">
              <CollectionCard obj={collect[3]} />
            </Link>
          </div>
          <div onClick={maleCategory} className="flex h-full cursor-pointer">
            <Link to={"/clothes"} className="w-full h-full">
              <CollectionCard obj={collect[4]} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
