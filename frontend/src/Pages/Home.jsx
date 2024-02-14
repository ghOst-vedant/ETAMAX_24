import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { EffectCards } from "swiper/modules";
import redBull from "../Assets/Common_images/redBull.png";
import monstor from "../Assets/Common_images/monstor.png";
import adidas from "../Assets/Common_images/adidas.png";
import heroPc from "../Assets/Common_images/Hero_Section.png";
import heroMobile from "../Assets/Common_images/Phone-Hero.png";
import wing1 from "../Assets/Common_images/wing1.png";
import wing2 from "../Assets/Common_images/wing2.png";
import FeaturedEventCard from "../Components/FeaturedEventCard";
import eventImage from "../Assets/Common_images/sampleEvent.png";
import cloud from "../Assets/other_images/clouds.png";
const FeaturedEvents = [
  {
    key: 1,
    eventName: "Event-1",
    date: "13 Mar",
    category: "Technical",
    seats: "10/15",
    eventImage: eventImage,
    bgColor: "bg-[#86000A]",
  },
  {
    key: 2,
    eventName: "Event-2",
    date: "14 Mar",
    category: "Cultural",
    seats: "8/15",
    eventImage: eventImage,
    bgColor: "bg-[#B7181B]",
  },
  {
    key: 3,
    eventName: "Events",
    date: "14 Mar",
    category: "NSS",
    seats: "15/30",
    eventImage: eventImage,
    bgColor: "bg-[#F44B1E]",
  },
  {
    key: 4,
    eventName: "Seminar-2",
    date: "15 Mar",
    category: "Technical",
    seats: "15/20",
    eventImage: eventImage,
    bgColor: "bg-[#FF8E00]",
  },
  {
    key: 5,
    eventName: "Seminar-3",
    date: "15 Mar",
    category: "Technical",
    seats: "13/30",
    eventImage: eventImage,
    bgColor: "bg-[#FFB800]",
  },
];
const Home = () => {
  const [windowStatus, setWindowStatus] = useState(
    window.innerWidth > 820 ? true : false
  );

  function checkWindowSize() {
    setWindowStatus(window.innerWidth > 820 ? true : false);
  }

  window.onresize = checkWindowSize;

  SwiperCore.use([EffectCards]);
  return (
    <div className="w-full">
      <img
        src={windowStatus ? heroPc : heroMobile}
        alt="hero"
        className="z-20"
      />
      <div className=" bg-[#1c1c1e] flex items-center justify-center sm:py-10 relative overflow-hidden">
        <img
          src={cloud}
          alt=""
          className="opacity-50 hidden sm:flex absolute w-[40%] rotate-90 -left-[10%] z-0"
        />
        <img
          src={cloud}
          alt=""
          className="opacity-50 hidden sm:flex absolute w-[40%] -rotate-90 -right-[10%]"
        />
        {windowStatus ? (
          <embed
            className="z-10"
            auto="true"
            width="900"
            height="500"
            src="https://www.youtube.com/embed/ZQyyj0SN860?autoplay=1&controls=0&&showinfo=0&loop=1"
            frameBorder="0"
            autostart={1}
            autoplay={1}
          ></embed>
        ) : (
          <embed
            className="w-full"
            auto="true"
            height="220"
            src="https://www.youtube.com/embed/ZQyyj0SN860?autoplay=1&controls=0&&showinfo=0&loop=1"
            frameBorder="0"
            autostart={1}
            autoplay={1}
          ></embed>
        )}
      </div>
      <div className="bg-nextHome py-20">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
          {/* sponsors */}
          <img src={redBull} alt="sponsor" className="h-14 sm:h-24" />
          <img src={monstor} alt="sponsor" className="h-14 sm:h-24" />
          <img src={adidas} alt="sponsor" className="h-14 sm:h-24" />
        </div>
        {/* Features Section */}
        <div className="flex flex-col pt-9">
          <span className="flex items-center justify-center w-full  bg-black/50  sm:bg-transparent sm:backdrop-blur-none py-5 backdrop-blur-sm">
            <img src={wing1} alt="" className=" w-[15%] sm:w-[10%] " />
            <h1 className=" font-cinzel sm:text-5xl text-2xl text-white font-semibold px-1 ">
              FEATURED EVENTS
            </h1>
            <img src={wing2} alt="" className=" w-[15%] sm:w-[10%] " />
          </span>
          <div className="py-10 flex flex-col gap-8 px-5 items-center justify-center relative sm:flex-wrap sm:flex-row">
            {windowStatus ? (
              FeaturedEvents?.map((event) => (
                <FeaturedEventCard
                  key={event.key}
                  eventName={event.eventName}
                  category={event.category}
                  date={event.date}
                  seats={event.seats}
                  eventImage={event.eventImage}
                  bgColor={event.bgColor}
                />
              ))
            ) : (
              <>
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="change"
                >
                  {FeaturedEvents?.map((event) => (
                    <SwiperSlide className="slide">
                      <FeaturedEventCard
                        key={event.key}
                        eventName={event.eventName}
                        category={event.category}
                        date={event.date}
                        seats={event.seats}
                        eventImage={event.eventImage}
                        bgColor={event.bgColor}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
