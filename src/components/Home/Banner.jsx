import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import the Pagination module
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
        modules={[Pagination, Autoplay]} // Enable the Pagination module
        pagination={{ clickable: true }} // Configure the pagination
        autoplay={{
          delay: 2500, // Adjust autoplay delay to 2.5 seconds
          disableOnInteraction: false, // Allow autoplay to continue after interaction
        }}
        loop={true} // Enable loop for infinite carousel effect
      >
        <SwiperSlide>
          <div className="">
            <div className="relative">
              <img className="w-full" src={img1} alt="" />
              <div className="flex justify-between items-center top-0 h-full px-[40px] absolute">
                <div className="w-[60%]">
                  <h1 className="lg:text-[64px] text-[18px] text-white">
                    Bandon Electronics and Lighting Store
                  </h1>
                  <p className="text-[15px] hidden lg:flex lg:mt-[20px] lg:w-[60%] text-white">
                    BEALS is tailored to the needs of your seeking high-quality
                    electronics and lighting solutions.
                  </p>
                  <div className="mt-[34px]">
                    <Buttons text="Bye Now" />
                  </div>
                </div>
                <div className="w-[40%]">
                  <div className="w-full flex-col justify-center items-center">
                    <div className="relative">
                      <img className="object-contain" src={light} alt="light" />
                      <div className="absolute bottom-0 lg:-left-12">
                        <img
                          className="image-offer lg:w-auto w-[80px] hover:rotate-12 transition-[0.06s]"
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
              <div className="flex justify-between items-center top-0 h-full px-[40px] absolute">
                <div className="w-[60%]">
                  <h1 className="lg:text-[64px] text-[18px] text-black">
                    We Promise <br /> Your Choice
                  </h1>
                  <p className="text-[15px] hidden lg:flex lg:mt-[20px] lg:w-[60%] text-black">
                    BEALS is tailored to the needs of your seeking high-quality
                    electronics and lighting solutions.
                  </p>
                  <div className="mt-[34px]">
                    <Buttons text="Bye Now" />
                  </div>
                </div>
                <div className="w-[40%]">
                  <div className="w-full flex-col justify-center items-center">
                    <div className="relative">
                      <img
                        className="object-contain"
                        src={charger}
                        alt="light"
                      />
                      <div className="absolute bottom-0 lg:-left-12">
                        <img
                          className="image-offer lg:w-auto w-[80px] hover:rotate-12 transition-[0.06s]"
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
