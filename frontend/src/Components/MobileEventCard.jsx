import 'swiper/css';
import 'swiper/css/effect-cards';
import React from 'react';
import './MobileEventCard.css';
// import image1 from "../Assets/other_images/Frame 95.png";
// import image2 from "../Assets/other_images/Rectangle 91.png";
// import image3 from "../Assets/other_images/Rectangle 92.png";
import image4 from "../Assets/other_images/Rectangle 62.png";
import image5 from "../Assets/other_images/Rectangle 64.png";
import image6 from "../Assets/other_images/Rectangle 79.png";
import image7 from "../Assets/other_images/Rectangle 81.png";
import image8 from "../Assets/other_images/Rectangle 80.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper";
import { EffectCards } from 'swiper/modules';


SwiperCore.use([EffectCards]);

export default function MobileEventCard() {
  return (
    <div className="mySwiper">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image4} alt="EVENT NAME 4" />
          <div className="event-name">EVENT NAME 4</div></SwiperSlide>
        <SwiperSlide><img src={image5} alt="EVENT NAME 5" />
          <div className="event-name">EVENT NAME 5</div></SwiperSlide>
        <SwiperSlide><img src={image6} alt="EVENT NAME 6" />
          <div className="event-name">EVENT NAME 6</div></SwiperSlide>
        <SwiperSlide><img src={image7} alt="EVENT NAME 7" />
          <div className="event-name">EVENT NAME 7</div></SwiperSlide>
        <SwiperSlide><img src={image8} alt="EVENT NAME 8" />
          <div className="event-name">EVENT NAME 8</div></SwiperSlide>
      </Swiper>
    </div>
  );
}
