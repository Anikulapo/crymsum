const Footer = () => {
  return (
    <div className="text-white font-judson">
      <div className="bg-[#202020] pl-[10%] flex flex-wrap gap-12 lg:gap-12  py-[10%] xl:gap-0">
        <div className="lg:w-1/4 xl:w-1/3">
          <h3 className="font-judson leading-6 font-[500]  text-[14px] xl:text-xl">
            Customer Care
          </h3>
          <p className="font-judson leading-6 font-[300]  text-[10px] pr-[45%] xl:pr-[45%] lg:pr-0 py-4 xl:text-[14px]">
            Need help? Email us at <br />
            <a
              href="mailto:tobialasoadura200@gmail.com"
              className="cursor-pointer"
            >
              tobialasoadura200@gmail.com
            </a>{" "}
            We’re here for you, and ready to answer your questions.
          </p>
          <p className="font-judson leading-6 font-[300]  text-[10px] pb-4 xl:text-[14px]">
            24/7 Availability
          </p>
          <ul className="flex gap-3 items-center">
            <li>
              <a
                href="https://www.instagram.com/alash_tobi?igsh=dDN2eDgyenBqaHV3"
                target="blank"
              >
                <img src="/images/insta.svg" alt="insta" />
              </a>
            </li>
            <li>
              <a
                href="https://web.facebook.com/profile.php?id=100072561247044"
                target="blank"
              >
                <img src="/images/face.svg" alt="facebook" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-20 flex-wrap">
          <div className="flex flex-col gap-2 lg:gap-4">
            <h3 className="font-judson leading-6 font-[500]  text-[14px] xl:text-xl">
              Customer Care
            </h3>
            <ul className="flex flex-col gap-2 lg:gap-4">
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px] ">
                Size Guide
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Shipping Information
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Returns & Exchanges
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                FAQ
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Wholesale
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Affiliates
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 lg:gap-4">
            <h3 className="font-judson leading-6 font-[500]  text-[14px] xl:text-xl">
              Supplies
            </h3>
            <ul className="flex flex-col gap-2 lg:gap-4">
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Walk
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Bags
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Wear
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Toys
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Beds
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Bestseller
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 lg:gap-4">
            <h3 className="font-judson leading-6 font-[500]  text-[14px] xl:text-xl">
              Company
            </h3>
            <ul className="flex flex-col gap-2 lg:gap-4">
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                We’re Hiring
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Terms & Conditions
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Privacy Policy
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Blogs
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 lg:gap-4">
            <h3 className="font-judson leading-6 font-[500]  text-[14px] xl:text-xl">
              About
            </h3>
            <ul className="flex flex-col gap-2 lg:gap-4">
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                About us
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                In Ther Press
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Collaborations
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Charities
              </li>
              <li className="font-judson leading-6 font-[300]  text-[10px] xl:text-[14px]">
                Careers
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-[#FFFFFF] bg-[#5F5F5F] px-[10%]">
        <p className="font-judson leading-6 font-[300]  text-[10px]">
          Terms of Service | Privacy Policy | Accessibility
        </p>
        <p className="font-judson leading-6 font-[300]  text-[10px]">
          © Crymsum 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
