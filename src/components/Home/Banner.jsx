import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./slider.css";
import img1 from "../../assets/finialbgs.png";
import offer from "../../assets/Offer.png";
import light from "../../assets/image.png";
import Buttons from "../ReuserComponents/Buttons";
export const Banner = () => {
  return (
    <div className="">
      <Swiper className="mySwiper">
        <SwiperSlide>
          <div className="">
            <div className="relative">
              <img className="w-full" src={img1} alt="" />
              <div className="flex justify-between items-center top-0 h-full px-[40px]  absolute">
                <div className="w-[60%]">
                  <h1 className="text-[64px] text-white">
                    Bandon Electronics and Lighting Store
                  </h1>
                  <p className=" mt-[20px] w-[80%] text-white">
                    BEALS is tailored to the needs of your seeking high-quality
                    electronics and lighting solutions.
                  </p>
                  <div className="mt-[34px]">
                    <Buttons text="Bye Now" />
                  </div>
                </div>
                <div className="w-[40%]">
                  <div className="w-full">
                    <div>
                      <img className="" src={light} alt="light" />
                    </div>
                    <div>
                      <img className="image-full" src={offer} alt="offer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};
