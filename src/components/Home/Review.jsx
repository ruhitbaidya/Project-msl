import vactor from "../../assets/Vector.png";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import the necessary modules
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css"; // Ensure this file includes the updated CSS
import Purcess from "../ReuserComponents/Purcess";
import { useTranslation } from "react-i18next";

const Review = () => {
  const { t } = useTranslation();
  return (
    <div className="py-[50px]">
      <div className="">
        <div>
          <h4 className="text-[#000000] text-[25px] lg:text-[44px] lg:w-[50%] mb-[20px]">
            {t("reviewTitle")}
          </h4>
        </div>
        <div className="reviews">
          <Swiper
            className="mySwiper"
            autoplay={{
              delay: 2500, // Adjust autoplay delay to 2.5 seconds
              disableOnInteraction: false, // Allow autoplay to continue after interaction
            }}
            loop={true} // Enable loop for infinite carousel effect
            modules={[Pagination, Autoplay]} // Import necessary modules
            pagination={{ clickable: true }} // Enable clickable pagination
            slidesPerView={2}
            spaceBetween={18}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
              640: { slidesPerView: 2, spaceBetween: 15 }, // Tablet
              1024: { slidesPerView: 2, spaceBetween: 18 }, // Desktop
            }}
          >
            <SwiperSlide>
              <div className="flex justify-between items-center gap-[25px]">
                <div className="bg-[#32251F] text-white p-[45px] rounded-lg">
                  <p className="mb-[30px] text-[18px]">
                    “{t("reviewSlideDesc")}”
                  </p>
                  <div>
                    <div className="lg:flex justify-between items-center">
                      <div className="flex justify-between items-center gap-[25px]">
                        <div className="">
                          <img src={vactor} alt="" />
                        </div>
                        <div>
                          <p className="text-[18px]">John Doe</p>
                          <p className="text-[12px] text-[#FFFFFF80]">
                            Electrician
                          </p>
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
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center gap-[25px]">
                <div className="bg-[#32251F] text-white p-[45px] rounded-lg">
                  <p className="mb-[30px] text-[18px]">
                    “{t("reviewSlideDesc")}”
                  </p>
                  <div>
                    <div className="lg:flex justify-between items-center">
                      <div className="flex justify-between items-center gap-[25px]">
                        <div className="">
                          <img src={vactor} alt="" />
                        </div>
                        <div>
                          <p className="text-[18px]">John Doe</p>
                          <p className="text-[12px] text-[#FFFFFF80]">
                            Electrician
                          </p>
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
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center gap-[25px]">
                <div className="bg-[#32251F] text-white p-[45px] rounded-lg">
                  <p className="mb-[30px] text-[18px]">
                    “{t("reviewSlideDesc")}”
                  </p>
                  <div>
                    <div className="lg:flex justify-between items-center">
                      <div className="flex justify-between items-center gap-[25px]">
                        <div className="">
                          <img src={vactor} alt="" />
                        </div>
                        <div>
                          <p className="text-[18px]">John Doe</p>
                          <p className="text-[12px] text-[#FFFFFF80]">
                            Electrician
                          </p>
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
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <Purcess />
      </div>
    </div>
  );
};

export default Review;
