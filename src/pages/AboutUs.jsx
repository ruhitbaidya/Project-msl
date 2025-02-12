import SetTitle from "../components/ReuserComponents/ReactHalmet";
import imghead from "../assets/about.png";
import icon1 from "../assets/abouticon1.png";
import icon2 from "../assets/abouticon2.png";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import Purcess from "../components/ReuserComponents/Purcess";
import Choice from "../components/ReuserComponents/Choice";
const Aboutus = () => {
  return (
    <div>
      {" "}
      <div>
        <SetTitle title="About Us" />
        <div className="container mx-auto px-[10px]">
          <div className="grid grid-cols-1 lg:grid-cols-5 p-[20px] items-center">
            <div className="col-span-3">
              <h1 className="text-[30px] lg:text-[64px]">Welcome to BEALS</h1>
              <p className="text-[14px] lg:text-[18px] text-[#1E1E1E80]">
                With a complete range of affordable touch, remote, modern,
                safety, convenience and comfort switches & socket are available
                to any homeowner in the world; at prices any homeowner can
                afford.
              </p>
            </div>
            <div className="col-span-2">
              <img src={imghead} alt="" />
            </div>
          </div>
        </div>
        <div className="my-[50px] bg-[#F9F9F9] py-[50px]">
          <div className="w-[95%] lg:w-[45%] mx-auto text-center">
            <h2 className="text-[25px] lg:text-[44px]">
              We Thrive On Excellence & Always Look To Future.
            </h2>
          </div>
          <div className="container mx-auto px-[10px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] py-[30px]">
              <div className="bg-[#32251F] p-[40px] rounded-lg">
                <img src={icon2} alt="" />
                <h3 className="text-white text-[25px] lg:text-[36px] my-[15px]">
                  Our Vision
                </h3>
                <p className="text-[#FFFFFFCC] text-[18px]">
                  We aim to establish ‘Bondhon Electronics and lighting store’
                  as the leading switch socket in the country with modern &
                  stylish product.
                </p>
              </div>
              <div className="bg-[#FF8D28] p-[40px] text-black rounded-lg">
                <img src={icon1} alt="" />
                <h3 className=" text-[25px] lg:text-[36px] my-[15px]">
                  Our Mission
                </h3>
                <p className=" text-[18px]">
                  Our mission is to constantly innovate and deliver quality,
                  affordable & stylish way to finish their home, office or
                  hotel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-[10px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[30px]">
          <div>
            <div className="mb-[50px]">
              <h2 className="text-black text-[25px] lg:text-[36px]">
                Wide Range of Products
              </h2>
              <p className="text-[#1E1E1ECC] text-[18px]">
                We have gone huge distances to ensure that your home will be
                equipped for the future
              </p>
            </div>
            <div className="mb-[50px]">
              <h2 className="text-black text-[25px] lg:text-[36px]">
                Wide Range of Products
              </h2>
              <p className="text-[#1E1E1ECC] text-[18px]">
                We have gone huge distances to ensure that your home will be
                equipped for the future
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={about1} alt="" />
          </div>
          <div className="flex justify-center items-center">
            <img src={about2} alt="" />
          </div>
          <div>
            <div className="mb-[50px]">
              <h2 className="text-black text-[25px] lg:text-[36px]">
                Wide Range of Products
              </h2>
              <p className="text-[#1E1E1ECC] text-[18px]">
                We have gone huge distances to ensure that your home will be
                equipped for the future
              </p>
            </div>
            <div className="mb-[50px]">
              <h2 className="text-black text-[25px] lg:text-[36px]">
                Wide Range of Products
              </h2>
              <p className="text-[#1E1E1ECC] text-[18px]">
                We have gone huge distances to ensure that your home will be
                equipped for the future
              </p>
            </div>
          </div>
        </div>
        <div className="py-[50px]">
          <Purcess />
        </div>
      </div>
      <div className="py-[50px]">
        <Choice />
      </div>
    </div>
  );
};

export default Aboutus;
