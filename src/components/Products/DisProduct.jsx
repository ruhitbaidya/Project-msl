import img1 from "../../assets/ptab1.png";
import img2 from "../../assets/ptab2.png";
import img3 from "../../assets/ptab3.png";
import img4 from "../../assets/ptab4.png";
import img5 from "../../assets/ptab5.png";
import img6 from "../../assets/ptab6.png";

const DisProduct = () => {
  return (
    <div className="container mx-auto px-[10px] mt-[40px]">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
        <div>
          <div className="bg-[#F9F9F9] p-[40px] rounded-lg">
            <img
              className="w-full lg:h-[200px] object-contain"
              src={img1}
              alt=""
            />
          </div>
          <p className="text-center lg:text-[24px] text-white mt-[30px]">
            Smart Lighting
          </p>
        </div>
        <div>
          <div className="bg-[#F9F9F9] p-[40px] rounded-lg">
            <img
              className="w-full lg:h-[200px] object-contain"
              src={img2}
              alt=""
            />
          </div>
          <p className="text-center lg:text-[24px] text-white mt-[30px]">
            Smart Lighting
          </p>
        </div>
        <div>
          <div className="bg-[#F9F9F9] p-[40px] rounded-lg">
            <img
              className="w-full lg:h-[200px] object-contain"
              src={img3}
              alt=""
            />
          </div>
          <p className="text-center lg:text-[24px] text-white mt-[30px]">
            Smart Lighting
          </p>
        </div>
        <div>
          <div className="bg-[#F9F9F9] p-[40px] rounded-lg">
            <img
              className="w-full lg:h-[200px] object-contain"
              src={img4}
              alt=""
            />
          </div>
          <p className="text-center lg:text-[24px] text-white mt-[30px]">
            Smart Lighting
          </p>
        </div>
        <div>
          <div className="bg-[#F9F9F9] p-[40px] rounded-lg">
            <img
              className="w-full lg:h-[200px] object-contain"
              src={img5}
              alt=""
            />
          </div>
          <p className="text-center lg:text-[24px] text-white mt-[30px]">
            Smart Lighting
          </p>
        </div>
        <div>
          <div className="bg-[#F9F9F9] p-[40px] rounded-lg">
            <img
              className="w-full lg:h-[200px] object-contain"
              src={img6}
              alt=""
            />
          </div>
          <p className="text-center lg:text-[24px] text-white mt-[30px]">
            Smart Lighting
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisProduct;
