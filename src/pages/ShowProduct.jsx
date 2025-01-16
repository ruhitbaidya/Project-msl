import headImage from "../assets/productHeader.png";
import TabCom from "../components/Products/TabCom";
import Choice from "../components/ReuserComponents/Choice";
import Purcess from "../components/ReuserComponents/Purcess";

const ShowProduct = () => {
  return (
    <div>
      <div className="container mx-auto px-[10px]">
        <div className="flex justify-center items-center p-[60px]">
          <div className="w-[50%]">
            <h1 className="text-[64px] text-[#32251F]">
              Explore our Products{" "}
            </h1>
            <p className="text-[18px] text-[#1E1E1E80] mt-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              libero ab laudantium esse id. Suscipit reiciendis nihil neque ex
              quis!
            </p>
          </div>
          <div className="w-[50%]">
            <img src={headImage} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#32251F] py-[80px]">
        <div className="text-center">
          <h2 className="text-white text-[44px]">Products Categories</h2>
          <p className="text-[#FFFFFF99] text-[18px] mt-[10px]">
            Find what you are looking for
          </p>
        </div>
        <div className="container mx-auto px-[10px] mt-[50px]">
          <TabCom />
        </div>
      </div>
      <div className="container mx-auto px-[10px]">
        <Purcess />
      </div>
      <Choice />
    </div>
  );
};

export default ShowProduct;
