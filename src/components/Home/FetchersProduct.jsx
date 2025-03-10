import TitleDesc from "../ReuserComponents/TitleDesc";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/free-mode";
import "./slider.css";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import Buttons from "../ReuserComponents/Buttons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getApi } from "../../api/allApiCalling";
import { rootApi } from "../../api/apiUrl";
import { Link } from "react-router-dom";

const FetchersProduct = () => {
  const { t } = useTranslation();
  const [product, setProduct] = useState(null);
  const foundApi = async () => {
    const result = await getApi(`${rootApi}/get-product`);
    if (result.data.length > 0) {
      setProduct(result.data);
    } else {
      console.log("something went wrong");
    }
    console.log(product);
  };
  useEffect(() => {
    foundApi();
  }, []);
  return (
    <div className="py-[50px]">
      <TitleDesc title={t("fetcherPTitle")} description={t("fetcherPDesc")} />

      <div className="my-[30px]">
        <div className="relative">
          <Swiper
            slidesPerView={4}
            spaceBetween={18}
            freeMode={true}
            modules={[FreeMode, Pagination, Navigation, Autoplay]} // Added Navigation module
            className="mySwiper"
            navigation={{
              prevEl: ".swiper-button-prev", // Custom previous button
              nextEl: ".swiper-button-next", // Custom next button
            }}
            autoplay={{
              delay: 2500, // Adjust autoplay delay to 2.5 seconds
              disableOnInteraction: false, // Allow autoplay to continue after interaction
            }}
            loop={true} // Enable loop for infinite carousel effect
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
              640: { slidesPerView: 2, spaceBetween: 15 }, // Tablet
              1024: { slidesPerView: 4, spaceBetween: 18 }, // Desktop
            }}
          >
            {product &&
              product?.slice(0, 9).map((item) => (
                <>
                  <SwiperSlide key={item._id}>
                    <Link to={`/productDetails/${item._id}`}>
                      <div>
                        <div className="bg-[#D9D9D9] p-[15px] rounded-lg">
                          <img
                            className="w-full h-[250px] object-cover"
                            src={item.image}
                            alt=""
                          />
                        </div>
                        <div>
                          <p className="mt-[20px] text-[#32251F] text-[20px]">
                            {item.name}
                          </p>
                          <p className="mt-[10px] text-[18px] text-[#1E1E1E80]">
                            ${item.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                </>
              ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="hidden md:flex">
            <div className="swiper-button-prev">
              <FaArrowLeft />
            </div>
            <div className="swiper-button-next">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Buttons text="View all products" />
      </div>
    </div>
  );
};

export default FetchersProduct;
