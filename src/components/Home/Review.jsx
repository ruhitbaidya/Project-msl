import vactor from "../../assets/Vector.png";
import { FaStar } from "react-icons/fa6";
import { PiShippingContainerFill } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";
const Review = () => {
  return (
    <div className="py-[50px]">
      <div>
        <div>
          <h4 className="text-[#000000] text-[44px] w-[50%] mb-[20px]">
            What our customers say about BEALS?
          </h4>
        </div>
        <div className="flex justify-between items-center gap-[25px]">
          <div className="bg-[#32251F] text-white p-[45px] rounded-lg">
            <p className="mb-[30px] text-[18px]">
              “Type c socket quality of the product I purchased. They may
              comment on how well the product works, how durable it is, and how
              it compares to similar products on the market.”
            </p>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-[25px]">
                  <div className="">
                    <img src={vactor} alt="" />
                  </div>
                  <div>
                    <p className="text-[18px]">John Doe</p>
                    <p className="text-[12px] text-[#FFFFFF80]">Electrician</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center items-center gap-[10px] text-[18px]">
                    <p>
                      <FaStar />
                    </p>
                    <p>4.5</p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="bg-[#32251F] text-white p-[45px] rounded-lg">
            <p className="mb-[30px] text-[18px]">
              “Type c socket quality of the product I purchased. They may
              comment on how well the product works, how durable it is, and how
              it compares to similar products on the market.”
            </p>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-[25px]">
                  <div className="">
                    <img src={vactor} alt="" />
                  </div>
                  <div>
                    <p className="text-[18px]">John Doe</p>
                    <p className="text-[12px] text-[#FFFFFF80]">Electrician</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center items-center gap-[10px] text-[18px]">
                    <p>
                      <FaStar />
                    </p>
                    <p>4.5</p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[80px]">
        <div className="grid grid-cols-3 gap-[25px]">
          <div className="text-center">
            <div className="bg-[#32251F] w-[100px] h-[100px] rounded-full flex justify-center items-center text-[50px] text-[#FF8D28] mx-auto">
              <PiShippingContainerFill />
            </div>
            <div>
              <h5 className="text-[24px] mt-[24px] mb-[12px]">
                {" "}
                Fast & Free shipping
              </h5>
              <p className="text-[18px] text-[#1E1E1E80]">
                4-day or less delivery time, free shipping and an expedited
                delivery option.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-[#32251F] w-[100px] h-[100px] rounded-full flex justify-center items-center text-[50px] text-[#FF8D28] mx-auto">
              <IoCall />
            </div>
            <div>
              <h5 className="text-[24px] mt-[24px] mb-[12px]"> 24/7 Support</h5>
              <p className="text-[18px] text-[#1E1E1E80]">
                We offer many different types of products with fewer variations
                in each category.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-[#32251F] w-[100px] h-[100px] rounded-full flex justify-center items-center text-[50px] text-[#FF8D28] mx-auto">
              <FaRegCreditCard />
            </div>
            <div>
              <h5 className="text-[24px] mt-[24px] mb-[12px]">
                {" "}
                Secure payment
              </h5>
              <p className="text-[18px] text-[#1E1E1E80]">
                We offer many different types of products with fewer variations
                in each category.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
