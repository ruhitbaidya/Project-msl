import TitleDesc from "../ReuserComponents/TitleDesc";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "./slider.css";
import { FreeMode, Pagination } from "swiper/modules";
import pImg1 from "../../assets/p1.png";
import pImg2 from "../../assets/p2.png";
import pImg3 from "../../assets/p3.png";
import pImg4 from "../../assets/p4.png";
import Buttons from "../ReuserComponents/Buttons";
const FetchersProduct = () => {
  return (
    <div className="py-[50px]">
      <TitleDesc
        title="Featured Products"
        description="Your one stop solution for electronics and lighting"
      />

      <div className="my-[30px]">
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={18}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <div className="bg-[#D9D9D9] p-[15px] rounded-lg">
                  <img
                    className="w-full h-[250px] object-cover"
                    src={pImg1}
                    alt=""
                  />
                </div>
                <div>
                  <p className="mt-[20px] text-[#32251F] text-[20px]">
                    Silver open socket
                  </p>
                  <p className="mt-[10px] text-[18px] text-[#1E1E1E80]">
                    $250.00
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="bg-[#D9D9D9] p-[15px] rounded-lg">
                  <img
                    className="w-full h-[250px] object-cover"
                    src={pImg2}
                    alt=""
                  />
                </div>
                <div>
                  <p className="mt-[20px] text-[#32251F] text-[20px]">
                    Silver open socket
                  </p>
                  <p className="mt-[10px] text-[18px] text-[#1E1E1E80]">
                    $250.00
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="bg-[#D9D9D9] p-[15px] rounded-lg">
                  <img
                    className="w-full h-[250px] object-cover"
                    src={pImg3}
                    alt=""
                  />
                </div>
                <div>
                  <p className="mt-[20px] text-[#32251F] text-[20px]">
                    Silver open socket
                  </p>
                  <p className="mt-[10px] text-[18px] text-[#1E1E1E80]">
                    $250.00
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="bg-[#D9D9D9] p-[15px] rounded-lg">
                  <img
                    className="w-full h-[250px] object-cover"
                    src={pImg4}
                    alt=""
                  />
                </div>
                <div>
                  <p className="mt-[20px] text-[#32251F] text-[20px]">
                    Silver open socket
                  </p>
                  <p className="mt-[10px] text-[18px] text-[#1E1E1E80]">
                    $250.00
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Buttons text="View all products" />
      </div>
    </div>
  );
};

export default FetchersProduct;
