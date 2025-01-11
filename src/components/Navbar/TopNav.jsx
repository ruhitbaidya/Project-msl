const TopNav = () => {
  return (
    <div className="bg-[#32251F]">
      <div className="container mx-auto px-[10px]">
        <div className="flex justify-between items-center">
          <div>
            <p className="py-[16px] text-white text-[14px]">
              <span>Support- Email: beals@gmail.com </span>{" "}
              <span>Phone: +1 905-826-3821 </span>
            </p>
          </div>
          <div className="text-white">
            <button className="mr-[5px]">EN</button> l{" "}
            <button className="ml-[5px]">BN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
