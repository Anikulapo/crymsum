import Cat from "../components/Cat.jsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../state/categories/categorySlice.js";
import toast from "react-hot-toast";
const Category = () => {
  const words = [
    {
      id: 1,
      name : "Oversized T-Shirts",
      image : "/images/Oversized.jpeg",
    },
    {
      id: 2,
      name : "Classic Fit T-Shirts",
      image : "/images/cat.png",

    },
    {
      id: 3,
      name : "Joggers",
      image : "/images/joggers.jpeg",
    },
    {
      id: 4,
      name : "Jeans",
      image : "/images/jeans.jpeg",
    }

  ]
  const dispatch = useDispatch()
  const allCategory = () => {
    dispatch(setCategory("all"));
    toast.success("Default Category Selected");
  }
  return (
    <div className="  font-judson">
      <h1 className="p-[5%] text-4xl lg:text-7xl font-[400] text-[#222222]">
        Shop Items by <br />
        <span className="font-bold ">category For Men & Women</span>
      </h1>

      <div className="flex flex-wrap">
        {
          words.map((obj) => {
            return (
              <Link to={"/clothes"} className="lg:w-1/4 w-1/2">
                <Cat obj={obj} key={obj.id} click ={allCategory}/>
              </Link>

            );
          })
        }
      </div>
    </div>
  );
};

export default Category;
