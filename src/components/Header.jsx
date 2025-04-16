import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  // const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  //   if (e.target.value) {
  //     const results = data.filter(item =>
  //       item.name.toLowerCase().includes(e.target.value.toLowerCase())
  //     );
  //     setSearchResults(results);
  //   } else {
  //     setSearchResults([]);
  //   }

  // };
  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   const results = data.filter(item =>
  //     item.name.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setSearchResults(results);
  // };
  //   setSearch('');

  return (
    <>
      <div className="px-[5%] py-4 flex w-full items-center border-b border-[#C5C5C580] fixed bg-white z-30 justify-between">
        <h1 className="font-judson text-[30px] leading-[100%] font-[700]">
          CRYMSUM
        </h1>
        <div className="flex items-center h-full ">
          <form className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search by product, category or collection"
              className="border border-[#C5C5C580] px-10 py-2 md:w-[300px] lg:w-[400px] text-[14px] lg:text-[12px] font-judson font-[400] placeholder:font-judson placeholder:font-[400] placeholder:text-[#7E7E7ECC] lg:placeholder:text-[12px]  focus:outline-none focus:border-[#000000] focus:ring-0"
              onFocus={handleClick}
            />
            <img
              src="images/search-normal.svg"
              alt="search"
              className="w-7cursor-pointer absolute z-10 top-1/2 left-3 transform -translate-y-1/2"
            />
          </form>
          <ul className="flex items-center gap-5 h-full">
            <li>
              <img
                src="images/search-normal.svg"
                alt="search"
                className="w-5 lg:w-7 cursor-pointer md:hidden"
                onClick={toggleDropdown}
              />
            </li>
            <li>
              <img
                src="images/shopping-cart.svg"
                alt="cart"
                className="w-5 lg:w-7 cursor-pointer"
              />
            </li>
            <li>
              <img
                src="images/heart.svg"
                alt="wish"
                className="w-5 lg:w-7 cursor-pointer"
              />
            </li>
            <li>
              <img
                src="images/user.svg"
                alt="profile"
                className="w-5 lg:w-7 cursor-pointer"
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Search Dropdown Mobile */}
      <div
        className={` px-[5%] py-12 bg-[#eeeeee] fixed w-full h-full z-50 transform lg:hidden ${
          isOpen ? "translate-y-0" : "translate-y-[-100%]"
        } transition-transform duration-500 ease-in-out`}
      >
        <img
          src="images/X.svg"
          alt="close"
          className="w-5 absolute z-10 top-[2%] right-[5%] cursor-pointer"
          onClick={toggleDropdown}
        />
        <div className="flex items-center justify-between">
          <form className="relative w-full">
            <input
              type="text"
              placeholder="Search by product, category or collection"
              className="border border-[#C5C5C580] rounded-full px-10 py-2 w-full text-[14px] font-judson font-[400] placeholder:font-judson placeholder:font-[400] placeholder:text-[#7E7E7ECC] focus:outline-none focus:border-[#000000] focus:ring-0"
            />
            <img
              src="images/search-normal.svg"
              alt="search"
              className="w-5 cursor-pointer absolute z-10 top-1/2 left-3 transform -translate-y-1/2"
            />
          </form>
        </div>
      </div>

      {/* Search Dropdown laptop */}
      <div className="bg-[rgba()]"></div>
    </>
  );
};

export default Header;
