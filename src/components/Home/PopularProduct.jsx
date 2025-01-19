import TitleDesc from "../ReuserComponents/TitleDesc";
import img1 from "../../assets/mp1.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
const PopularProduct = () => {
  const { t } = useTranslation();
  return (
    <div className="py-[50px] bg-[#F9F9F9]">
      <div className="container mx-auto px-[10px]">
        <div>
          <TitleDesc
            title={t("popularPTitle")}
            description={t("popularPDesc")}
          />
        </div>
        <div className="mt-[40px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
            <div>
              <NavLink to="/productDetails/h14ads5fsdfjsd54fsh">
                <div className="bg-[#D9D9D9] p-[15px] rounded-lg mb-[20px]">
                  <img
                    className="w-full h-[250px] object-cover"
                    src={img1}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-[20px] font-[500] text-[#32251F]">
                    4 Gang 1 way
                  </h4>
                  <p className="text-[#1E1E1E80] text-[14px] mt-[10px]">
                    Code: M041W – Ultra 4 GANG 1 WAY
                  </p>
                  <p>
                    <span className="text-[#1E1E1E80]">Price:</span>{" "}
                    <span className="text-[#32251F]">$25.00</span>
                  </p>
                </div>
              </NavLink>
              <div className="flex justify-center items-center mt-[20px] ">
                <button
                  style={{
                    boxShadow: "0px 4px 30px 0px rgba(117, 117, 117, 0.25)",
                  }}
                  className="flex justify-center items-center gap-[18px] px-[24px] py-[12px] rounded-lg bg-white hover:bg-[#FF8D28] text-[18px]"
                >
                  <span>Add To Card</span> <FaLongArrowAltRight />
                </button>
              </div>
            </div>
            <div>
              <div className="bg-[#D9D9D9] p-[15px] rounded-lg mb-[20px]">
                <img
                  className="w-full h-[250px] object-cover"
                  src={img1}
                  alt=""
                />
              </div>
              <div className="text-center">
                <h4 className="text-[20px] font-[500] text-[#32251F]">
                  4 Gang 1 way
                </h4>
                <p className="text-[#1E1E1E80] text-[14px] mt-[10px]">
                  Code: M041W – Ultra 4 GANG 1 WAY
                </p>
                <p>
                  <span className="text-[#1E1E1E80]">Price:</span>{" "}
                  <span className="text-[#32251F]">$25.00</span>
                </p>
              </div>
              <div className="flex justify-center items-center mt-[20px] ">
                <button
                  style={{
                    boxShadow: "0px 4px 30px 0px rgba(117, 117, 117, 0.25)",
                  }}
                  className="flex justify-center items-center gap-[18px] px-[24px] py-[12px] rounded-lg bg-white hover:bg-[#FF8D28] text-[18px]"
                >
                  <span>Add To Card</span> <FaLongArrowAltRight />
                </button>
              </div>
            </div>
            <div>
              <div className="bg-[#D9D9D9] p-[15px] rounded-lg mb-[20px]">
                <img
                  className="w-full h-[250px] object-cover"
                  src={img1}
                  alt=""
                />
              </div>
              <div className="text-center">
                <h4 className="text-[20px] font-[500] text-[#32251F]">
                  4 Gang 1 way
                </h4>
                <p className="text-[#1E1E1E80] text-[14px] mt-[10px]">
                  Code: M041W – Ultra 4 GANG 1 WAY
                </p>
                <p>
                  <span className="text-[#1E1E1E80]">Price:</span>{" "}
                  <span className="text-[#32251F]">$25.00</span>
                </p>
              </div>
              <div className="flex justify-center items-center mt-[20px] ">
                <button
                  style={{
                    boxShadow: "0px 4px 30px 0px rgba(117, 117, 117, 0.25)",
                  }}
                  className="flex justify-center items-center gap-[18px] px-[24px] py-[12px] rounded-lg bg-white hover:bg-[#FF8D28] text-[18px]"
                >
                  <span>Add To Card</span> <FaLongArrowAltRight />
                </button>
              </div>
            </div>
            <div>
              <div className="bg-[#D9D9D9] p-[15px] rounded-lg mb-[20px]">
                <img
                  className="w-full h-[250px] object-cover"
                  src={img1}
                  alt=""
                />
              </div>
              <div className="text-center">
                <h4 className="text-[20px] font-[500] text-[#32251F]">
                  4 Gang 1 way
                </h4>
                <p className="text-[#1E1E1E80] text-[14px] mt-[10px]">
                  Code: M041W – Ultra 4 GANG 1 WAY
                </p>
                <p>
                  <span className="text-[#1E1E1E80]">Price:</span>{" "}
                  <span className="text-[#32251F]">$25.00</span>
                </p>
              </div>
              <div className="flex justify-center items-center mt-[20px] ">
                <button
                  style={{
                    boxShadow: "0px 4px 30px 0px rgba(117, 117, 117, 0.25)",
                  }}
                  className="flex justify-center items-center gap-[18px] px-[24px] py-[12px] rounded-lg bg-white hover:bg-[#FF8D28] text-[18px]"
                >
                  <span>Add To Card</span> <FaLongArrowAltRight />
                </button>
              </div>
            </div>
            <div>
              <div className="bg-[#D9D9D9] p-[15px] rounded-lg mb-[20px]">
                <img
                  className="w-full h-[250px] object-cover"
                  src={img1}
                  alt=""
                />
              </div>
              <div className="text-center">
                <h4 className="text-[20px] font-[500] text-[#32251F]">
                  4 Gang 1 way
                </h4>
                <p className="text-[#1E1E1E80] text-[14px] mt-[10px]">
                  Code: M041W – Ultra 4 GANG 1 WAY
                </p>
                <p>
                  <span className="text-[#1E1E1E80]">Price:</span>{" "}
                  <span className="text-[#32251F]">$25.00</span>
                </p>
              </div>
              <div className="flex justify-center items-center mt-[20px] ">
                <button
                  style={{
                    boxShadow: "0px 4px 30px 0px rgba(117, 117, 117, 0.25)",
                  }}
                  className="flex justify-center items-center gap-[18px] px-[24px] py-[12px] rounded-lg bg-white hover:bg-[#FF8D28] text-[18px]"
                >
                  <span>Add To Card</span> <FaLongArrowAltRight />
                </button>
              </div>
            </div>
            <div>
              <div className="bg-[#D9D9D9] p-[15px] rounded-lg mb-[20px]">
                <img
                  className="w-full h-[250px] object-cover"
                  src={img1}
                  alt=""
                />
              </div>
              <div className="text-center">
                <h4 className="text-[20px] font-[500] text-[#32251F]">
                  4 Gang 1 way
                </h4>
                <p className="text-[#1E1E1E80] text-[14px] mt-[10px]">
                  Code: M041W – Ultra 4 GANG 1 WAY
                </p>
                <p>
                  <span className="text-[#1E1E1E80]">Price:</span>{" "}
                  <span className="text-[#32251F]">$25.00</span>
                </p>
              </div>
              <div className="flex justify-center items-center mt-[20px] ">
                <button
                  style={{
                    boxShadow: "0px 4px 30px 0px rgba(117, 117, 117, 0.25)",
                  }}
                  className="flex justify-center items-center gap-[18px] px-[24px] py-[12px] rounded-lg bg-white hover:bg-[#FF8D28] text-[18px]"
                >
                  <span>Add To Card</span> <FaLongArrowAltRight />
                </button>
              </div>
            </div>
            <div>
              <div className="bg-[#D9D9D9] p-[15px] rounded-lg mb-[20px]">
                <img
                  className="w-full h-[250px] object-cover"
                  src={img1}
                  alt=""
                />
              </div>
              <div className="text-center">
                <h4 className="text-[20px] font-[500] text-[#32251F]">
                  4 Gang 1 way
                </h4>
                <p className="text-[#1E1E1E80] text-[14px] mt-[10px]">
                  Code: M041W – Ultra 4 GANG 1 WAY
                </p>
                <p>
                  <span className="text-[#1E1E1E80]">Price:</span>{" "}
                  <span className="text-[#32251F]">$25.00</span>
                </p>
              </div>
              <div className="flex justify-center items-center mt-[20px] ">
                <button
                  style={{
                    boxShadow: "0px 4px 30px 0px rgba(117, 117, 117, 0.25)",
                  }}
                  className="flex justify-center items-center gap-[18px] px-[24px] py-[12px] rounded-lg bg-white hover:bg-[#FF8D28] text-[18px]"
                >
                  <span>Add To Card</span> <FaLongArrowAltRight />
                </button>
              </div>
            </div>
            <div>
              <div className="bg-[#D9D9D9] p-[15px] rounded-lg mb-[20px]">
                <img
                  className="w-full h-[250px] object-cover"
                  src={img1}
                  alt=""
                />
              </div>
              <div className="text-center">
                <h4 className="text-[20px] font-[500] text-[#32251F]">
                  4 Gang 1 way
                </h4>
                <p className="text-[#1E1E1E80] text-[14px] mt-[10px]">
                  Code: M041W – Ultra 4 GANG 1 WAY
                </p>
                <p>
                  <span className="text-[#1E1E1E80]">Price:</span>{" "}
                  <span className="text-[#32251F]">$25.00</span>
                </p>
              </div>
              <div className="flex justify-center items-center mt-[20px] ">
                <button
                  style={{
                    boxShadow: "0px 4px 30px 0px rgba(117, 117, 117, 0.25)",
                  }}
                  className="flex justify-center items-center gap-[18px] px-[24px] py-[12px] rounded-lg bg-white hover:bg-[#FF8D28] text-[18px]"
                >
                  <span>Add To Card</span> <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
