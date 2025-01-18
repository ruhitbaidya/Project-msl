const TopNav = () => {
  return (
    <div className="bg-[#32251F]">
      <div className="container mx-auto px-[10px]">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto">
            <p className="py-[16px] text-white text-[14px] text-center sm:text-left">
              <span>Support- Email: beals@gmail.com </span>
              <span className="sm:ml-[20px]">Phone: +1 905-826-3821 </span>
            </p>
          </div>
          <div className="text-white w-full sm:w-auto text-center sm:text-right">
            <button className="mr-[5px]">EN</button> l{" "}
            <button className="ml-[5px]">BN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
