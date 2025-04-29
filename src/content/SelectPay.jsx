
import { Link } from "react-router-dom";


const SelectPay = ({ open, close }) => {


  return (
    <div
      onClick={close}
      className={`inset-0 absolute z-100 bg-[rgba(0,0,0,.5)] h-[200%] md:h-screen flex justify-center items-center font-inter ${
        open ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white md:p-20 p-5 flex flex-col items-center rounded-lg gap-10 relative transition-all ${
          open ? "visible scale-100" : "scale-125 invisible"
        }`}
      >
        <h1>Select Your Payment Option</h1>
        <div className="flex flex-wrap md:gap-10 gap-5 justify-center items-center">
          <h1>
            No User{" "}
            <Link to={"/me"}>
              <span className="text-blue-600">Create User</span>
            </Link>{" "}

          </h1>
        </div>
      </div>
    </div>
  );
};

export default SelectPay;
