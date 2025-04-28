import { Link } from "react-router-dom"; // For navigation links
import { useNavigate } from "react-router-dom"; // For programmatic navigation
import { useState, useEffect } from "react"; // React hooks for state and lifecycle
import { useDispatch, useSelector } from "react-redux"; // For dispatching actions and accessing Redux state
import { fetchProducts } from "../state/product/productSlice.js"; // Action to fetch products from API/store
import { selectTotalQuantity } from "../state/cart/cartSlice.js";
import { reset, selectCartItems } from "../state/cart/cartSlice.js";

const Header = () => {
  const cart = useSelector(selectCartItems)
  const count = useSelector(selectTotalQuantity); // Get total quantity of items in cart from Redux store
  // State for filtered search results
  const [filteredItems, setFilteredItems] = useState([]);
  // State for search input
  const [search, setSearch] = useState("");
  // State to show/hide search result box
  const [active, setActive] = useState(false);
  // State to toggle mobile search dropdown
  const [isOpen, setIsOpen] = useState(false);
  // Extract product items from Redux store
  const { items } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  // Fetch product data on initial mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter product list as search input changes
  useEffect(() => {
    if (search.trim() !== "") {
      const results = items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      setFilteredItems([]);
    }
  }, [search, items]);

  // Ensure scrolling is enabled by default when component mounts
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  useEffect(()=>{
    dispatch(reset())
  },[cart, dispatch])

  const navigate = useNavigate();

  // Toggle mobile search dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearch(""); // Clear search input on toggle
  };

  // Activate search overlay and disable scrolling
  const handleClickOn = () => {
    setActive(true);
    document.body.style.overflow = "hidden";
  };

  // Deactivate search overlay and enable scrolling
  const handleClickOff = () => {
    setActive(false);
    document.body.style.overflow = "auto";
    setSearch(""); // Clear search input when closing
  };

  // Handle form submit for search
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`); // Navigate to search results page
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      {/* Header container */}
      <div className="px-[5%] py-4 flex w-full items-center border-b border-[#C5C5C580] fixed bg-white z-30 justify-between">
        {/* Logo */}
        <Link to={"/"}>
          <h1 className="font-judson text-[30px] leading-[100%] font-[700]">
            CRYMSUM
          </h1>
        </Link>

        {/* Navigation and Search */}
        <div className="flex items-center h-full ">
          {/* Overlay for search focus */}
          <div
            onClick={handleClickOff}
            className={`absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.5)]  shadow-lg z-20 ${
              active ? "unset" : "hidden"
            } `}
          ></div>

          {/* Desktop Search Form */}
          <form
            onSubmit={handleSubmit}
            className="hidden md:block relative z-50"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by product, category or collection"
              className={`border border-[#C5C5C580] px-10 py-2 md:w-[300px] lg:w-[400px] text-[14px]
               lg:text-[12px] font-judson font-[400] placeholder:font-judson placeholder:font-[400]
                placeholder:text-[#7E7E7ECC] lg:placeholder:text-[12px]  focus:outline-none 
                focus:border-[#000000] focus:ring-0 ${active && "bg-white"}`}
              onFocus={handleClickOn}
            />
            {/* Search Icon */}
            <img
              src="/images/search-normal.svg"
              alt="search"
              className="w-7cursor-pointer absolute top-1/2 left-3 transform -translate-y-1/2 "
            />
            {/* Search result dropdown */}
            {active && (
              <div className="absolute top-12 left-0 w-full bg-white border border-[#C5C5C580]  shadow-lg z-50">
                <ul className="max-h-60">
                  {filteredItems.length > 0 ? (
                    <ul className="max-h-60 overflow-y-auto">
                      {filteredItems.map((item) => (
                        <Link to={`/product/${item.id}`} key={item.id}>
                          <li className="p-2 text-black hover:bg-gray-100 flex gap-5">
                            <img src={item.image} alt="" className="w-8" />
                            <p className="p-2 text-gray-500">{item.title}</p>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  ) : (
                    <p className="p-2 text-gray-500">No results found</p>
                  )}
                </ul>
              </div>
            )}
          </form>

          {/* Icons section */}
          <ul className="flex items-center gap-5 h-full">
            {/* Mobile Search Icon */}
            <li>
              <img
                src="/images/search-normal.svg"
                alt="search"
                className="w-5 lg:w-7 cursor-pointer md:hidden"
                onClick={toggleDropdown}
              />
            </li>
            {/* Cart Icon */}
            <Link to={"/cart"}>
              <li className="relative">
                <img
                  src="/images/shopping-cart.svg"
                  alt="cart"
                  className="w-5 lg:w-7 cursor-pointer"
                />
                {count > 0 && (
                  <div className="absolute top-[-15%] right-[-15%] bg-black text-white rounded-full md:w-4 md:h-4 w-3 h-3 flex items-center justify-center text-[12px] font-judson font-[500] z-200">
                    {count}
                  </div>
                )}
              </li>
            </Link>
            {/* Wishlist Icon */}
            <Link to={"/wish"}>
              <li>
                <img
                  src="/images/heart.svg"
                  alt="wish"
                  className="w-5 lg:w-7 cursor-pointer"
                />
              </li>
            </Link>
            {/* Profile Icon */}
            <Link to={"/profile"}>
              <li>
                <img
                  src="/images/user.svg"
                  alt="profile"
                  className="w-5 lg:w-7 cursor-pointer"
                />
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Search Dropdown for Mobile */}
      <div
        className={` px-[5%] py-12 bg-[white] fixed w-full h-full z-50 transform lg:hidden ${
          isOpen ? "translate-y-0" : "translate-y-[-100%]"
        } transition-transform duration-500 ease-in-out`}
      >
        {/* Close Button */}
        <img
          src="/images/X.svg"
          alt="close"
          className="w-5 absolute z-10 top-[2%] right-[5%] cursor-pointer"
          onClick={toggleDropdown}
        />
        {/* Search Form */}
        <div className="flex items-center justify-between">
          <form onSubmit={handleSubmit} className="relative w-full">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search by product, category or collection"
              className="border border-[#C5C5C580] rounded-full px-10 py-2 w-full text-[14px] font-judson font-[400] placeholder:font-judson placeholder:font-[400] placeholder:text-[#7E7E7ECC] focus:outline-none focus:border-[#000000] focus:ring-0"
            />
            {/* Search Icon */}
            <img
              src="/images/search-normal.svg"
              alt="search"
              className="w-5 cursor-pointer absolute z-10 top-1/2 left-3 transform -translate-y-1/2"
            />
            {/* Search Result Dropdown */}
            <div className="absolute top-12 left-0 w-full z-50">
              <ul className="max-h-60">
                {filteredItems.length > 0 ? (
                  <ul className="max-h-60 overflow-y-auto">
                    {filteredItems.map((item) => (
                      <Link to={`/product/${item.id}`} key={item.id}>
                        <li className="p-2 text-black hover:bg-gray-100 flex gap-5">
                          <img src={item.image} alt="" className="w-8" />
                          <p className="p-2 text-gray-500">{item.title}</p>
                        </li>
                      </Link>
                    ))}
                  </ul>
                ) : (
                  <p className="p-2 text-gray-500">No results found</p>
                )}
              </ul>
            </div>
          </form>
        </div>
      </div>

      {/* Placeholder for desktop search dropdown (unused/empty) */}
      <div className="bg-[rgba()]"></div>
    </>
  );
};

export default Header;
