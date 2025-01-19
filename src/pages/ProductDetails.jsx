import SetTitle from "../components/ReuserComponents/ReactHalmet";
import image from "../assets/smartWatch.png";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import ReviewRoot from "../components/review/ReviewsRoot";
import { FaArrowRightLong } from "react-icons/fa6";
const ProductDetails = () => {
  return (
    <div className="container mx-auto px-[10px] mt-[30px]">
      <SetTitle title="Product Details" />
      <div className="grid lg:grid-cols-2 gap-[25px]">
        <div>
          <img className="lg:h-[500px] w-full" src={image} alt="" />
        </div>
        <div>
          <h4 className="text-[44px]">Smart Switch</h4>
          <p className="py-[20px] text-[24px] text-[#FF8D28] font-[500]">
            $166.00
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="text-[#FDCC0D] flex">
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaRegStarHalfStroke />
              </span>
            </div>
            <div>
              <span className="text-[12px]">21 Reviews</span>
            </div>
          </div>
          <p className="text-[#1E1E1E80] text-[18px] py-[18px]">
            The elegant Smart Touch Switch{" "}
          </p>
          <div className="flex  items-center gap-[20px]">
            <p className="text-[14px] text-[#181818]">Quantity:</p>
            <div className="flex gap-[5px]">
              <p className="border w-[30px] h-[30px] flex justify-center items-center rounded-full">
                -
              </p>
              <p className="border w-[30px] h-[30px] flex justify-center items-center rounded-full">
                3
              </p>
              <p className="border w-[30px] h-[30px] flex justify-center items-center rounded-full">
                +
              </p>
            </div>
          </div>
          <div className="lg:flex md:flex items-center gap-[16px] my-[30px]">
            <button className="flex justify-between items-center gap-[17px] border py-[12px] mb-[5px] px-[34px] rounded-lg text-[18px] text-[#32251F] hover:bg-[#FF8D28] transition-all w-full sm:w-auto">
              <span>Bye Now</span>
              <FaArrowRightLong />
            </button>
            <button className="flex justify-between items-center gap-[17px] border py-[12px] mb-[5px] px-[34px] rounded-lg text-[18px] text-[#32251F] hover:bg-[#FF8D28] transition-all w-full sm:w-auto">
              <span>Add to cart</span>
              <FaArrowRightLong />
            </button>
          </div>
          <div className="text-[14px]">
            <p className="mb-[16px]">
              Categories: <span className="text-[#515151]">Switch</span>
            </p>
            <p className="flex gap-[55px] items-center mb-[16px]">
              Tags: <span className="text-[#515151]">Smart Switch</span>
            </p>
            <p className="flex items-center gap-[55px] mb-[16px]">
              Share:{" "}
              <div className="flex text-[#515151] gap-[11px] items-center">
                <span>
                  <FaFacebook />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaLinkedin />
                </span>
                <span>
                  <FaPinterest />
                </span>
              </div>
            </p>

            <p className="text-[#32251F] mt-[30px] mb-[14px]">Decription</p>
            <p className="text-[#1E1E1E80] mb-[10px]">
              Overseeding Soil has a very consistent texture that is composed of
              organic compost and peat loam this light, clean and weed-free soil
              is a terrific top dresser for existing or new lawns in conjunction
              with grass seed. It makes this product optimal in promoting
              optimal grass seed growth. The live organic compost material may
              include wood chips of various sizes and other materials.
            </p>
          </div>
          {/* accordion */}
          <div>
            <ReviewRoot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
