const AccountInfo = (props) => {
  return (
    <div className="w-full border-[#C5C5C580] border px-4 py-[17px]">
      <h3 className="font-inter pb-2 text-[16px] leading-6 font-[500]">{props.title}</h3>
      <p className="font-inter leading-5 font-normal text-[#5F5F5F] text-[14px]">{props.details}</p>
    </div>
  );
};

export default AccountInfo;
