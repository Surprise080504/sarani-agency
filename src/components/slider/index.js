import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// Import Swiper styles
import "swiper/swiper.min.css";

import "./index.css";
import Logo1 from "../../assets/img/logo1.png";
import Logo2 from "../../assets/img/logo2.png";
import Logo3 from "../../assets/img/logo3.png";
import Logo4 from "../../assets/img/logo4.png";

// import required modules

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Logo1} width={328} height={127} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo2} width={350} height={151} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo3} width={413} height={92} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo4} width={311} height={129} alt="logo" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
