import { FaRegCreditCard } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { PiShippingContainerFill } from "react-icons/pi";

const Purcess = () => {
  return (
    <div>
      <div className="mt-[80px]">
        <div className="grid lg:grid-cols-3 gap-[25px]">
          <div className="text-center">
            <div className="bg-[#32251F] w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full flex justify-center items-center text-[25px] lg:text-[50px] text-[#FF8D28] mx-auto">
              <PiShippingContainerFill />
            </div>
            <div>
              <h5 className="text-[18px] lg:text-[24px] mt-[24px] mb-[12px]">
                {" "}
                Fast & Free shipping
              </h5>
              <p className="text-[14px] lg:text-[18px] text-[#1E1E1E80]">
                4-day or less delivery time, free shipping and an expedited
                delivery option.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-[#32251F] w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full flex justify-center items-center text-[25px] lg:text-[50px] text-[#FF8D28] mx-auto">
              <IoCall />
            </div>
            <div>
              <h5 className="text-[18px] lg:text-[24px] mt-[24px] mb-[12px]">
                {" "}
                24/7 Support
              </h5>
              <p className="text-[14px] lg:text-[18px] text-[#1E1E1E80]">
                We offer many different types of products with fewer variations
                in each category.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-[#32251F] w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full flex justify-center items-center text-[25px] lg:text-[50px] text-[#FF8D28] mx-auto">
              <FaRegCreditCard />
            </div>
            <div>
              <h5 className="text-[18px] lg:text-[24px] mt-[24px] mb-[12px]">
                {" "}
                Secure payment
              </h5>
              <p className="text-[14px] lg:text-[18px] text-[#1E1E1E80]">
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

export default Purcess;
