import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Import the Pagination module
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles
import "./slider.css";
import img1 from "../../assets/finialbgs.png";
import offer from "../../assets/Offer.png";
import light from "../../assets/image.png";
import Buttons from "../ReuserComponents/Buttons";
import charger from "../../assets/cnarger.png";
import images2 from "../../assets/hero2.png";

export const Banner = () => {
  return (
    <div className="">
      <Swiper
        className="mySwiper"
        modules={[Pagination]} // Enable the Pagination module
        pagination={{ clickable: true }} // Configure the pagination
      >
        <SwiperSlide>
          <div className="">
            <div className="relative">
              <img className="w-full" src={img1} alt="" />
              <div className="flex justify-between items-center top-0 h-full px-[40px] absolute">
                <div className="w-[60%]">
                  <h1 className="text-[64px] text-white">
                    Bandon Electronics and Lighting Store
                  </h1>
                  <p className="mt-[20px] w-[60%] text-white">
                    BEALS is tailored to the needs of your seeking high-quality
                    electronics and lighting solutions.
                  </p>
                  <div className="mt-[34px]">
                    <Buttons text="Bye Now" />
                  </div>
                </div>
                <div className="w-[40%]">
                  <div className="w-full flex justify-center items-center">
                    <div className="relative">
                      <img className="" src={light} alt="light" />
                      <div className="absolute bottom-0 -left-12">
                        <img
                          className="image-offer image-full hover:rotate-12 transition-[0.06s] hover:shadow-lime-300"
                          src={offer}
                          alt="offer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="relative">
              <img className="w-full" src={images2} alt="" />
              <div className="flex justify-between items-center top-0 h-full px-[40px] w-full absolute">
                <div className="w-[60%]">
                  <h1 className="text-[64px] text-black">
                    We Promise <br /> Your Choice
                  </h1>
                  <p className="mt-[20px] w-[60%] text-black">
                    BEALS is tailored to the needs of your seeking high-quality
                    electronics and lighting solutions.
                  </p>
                  <div className="mt-[34px]">
                    <Buttons text="Bye Now" />
                  </div>
                </div>
                <div className="w-[40%]">
                  <div className="w-full flex justify-center items-center">
                    <div className="relative">
                      <img className="" src={charger} alt="charger" />
                      <div className="absolute bottom-0 -left-12">
                        <img
                          className="image-offer image-full hover:rotate-12 transition-[0.06s] hover:shadow-lime-300"
                          src={offer}
                          alt="offer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="relative">
              <img className="w-full" src={images2} alt="" />
              <div className="flex justify-between items-center top-0 h-full px-[40px] w-full absolute">
                <div className="w-[60%]">
                  <h1 className="text-[64px] text-black">
                    We Promise <br /> Your Choice
                  </h1>
                  <p className="mt-[20px] w-[60%] text-black">
                    BEALS is tailored to the needs of your seeking high-quality
                    electronics and lighting solutions.
                  </p>
                  <div className="mt-[34px]">
                    <Buttons text="Bye Now" />
                  </div>
                </div>
                <div className="w-[40%]">
                  <div className="w-full flex justify-center items-center">
                    <div className="relative">
                      <img className="" src={charger} alt="charger" />
                      <div className="absolute bottom-0 -left-12">
                        <img
                          className="image-offer image-full hover:rotate-12 transition-[0.06s] hover:shadow-lime-300"
                          src={offer}
                          alt="offer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="relative">
              <img className="w-full" src={images2} alt="" />
              <div className="flex justify-between items-center top-0 h-full px-[40px] w-full absolute">
                <div className="w-[60%]">
                  <h1 className="text-[64px] text-black">
                    We Promise <br /> Your Choice
                  </h1>
                  <p className="mt-[20px] w-[60%] text-black">
                    BEALS is tailored to the needs of your seeking high-quality
                    electronics and lighting solutions.
                  </p>
                  <div className="mt-[34px]">
                    <Buttons text="Bye Now" />
                  </div>
                </div>
                <div className="w-[40%]">
                  <div className="w-full flex justify-center items-center">
                    <div className="relative">
                      <img className="" src={charger} alt="charger" />
                      <div className="absolute bottom-0 -left-12">
                        <img
                          className="image-offer image-full hover:rotate-12 transition-[0.06s] hover:shadow-lime-300"
                          src={offer}
                          alt="offer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
