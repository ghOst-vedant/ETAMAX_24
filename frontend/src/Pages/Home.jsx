import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { EffectCards } from "swiper/modules";
import redBull from "../Assets/Common_images/redBull.png";
import heroPc from "../Assets/Common_images/Hero_Section.png";
import heroMobile from "../Assets/Common_images/Phone-Hero.png";
import wing1 from "../Assets/Common_images/wing1.png";
import wing2 from "../Assets/Common_images/wing2.png";
import FeaturedEventCard from "../Components/FeaturedEventCard";
import eventImage from "../Assets/Common_images/sampleEvent.png";
import cloud from "../Assets/other_images/clouds.png";
import axios from "axios";
// import sponsor from "../sponsor.json"

const Home = () => {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getFeaturedEvents = async () => {
      const { data } = await axios.get(`/api/e/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const allEvents = data.events;
      // Filter events to get only featured events
      setFeaturedEvents(() =>
        allEvents.filter((event) => {
          return event.is_featured === true;
        })
      );
      // console.log("ALL EVENTS:", allEvents);
      const result = allEvents.filter((event) => event.is_featured === true);

      setFeaturedEvents(result);
    };
    getFeaturedEvents();
  }, [token]);
  const [windowStatus, setWindowStatus] = useState(
    window.innerWidth > 820 ? true : false
  );

  function checkWindowSize() {
    setWindowStatus(window.innerWidth > 840 ? true : false);
  }

  window.onresize = checkWindowSize;

  SwiperCore.use([EffectCards]);
  return (
    <div className="w-full overflow-hidden">
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
            className="z-10 w-[58.5%]"
            auto="true"
            width="900"
            height="500"
            src="https://res.cloudinary.com/djijqbjom/video/upload/v1709709837/video_frf3w6.mp4?"
            frameBorder="0"
            autostart={1}
            autoPlay={1}
          ></embed>
        ) : (
          <embed
            className="w-full"
            auto="true"
            height="220"
            src="https://res.cloudinary.com/djijqbjom/video/upload/v1709709837/video_frf3w6.mp4?"
            frameBorder="0"
            autoStart={1}
            autoPlay={1}
          ></embed>
        )}
      </div>
      <div className="bg-nextHome pb-20">
        {/* <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
          sponsors
          <img src={redBull} alt="sponsor" className="h-14 sm:h-24" />
          <img src={redBull} alt="sponsor" className="h-14 sm:h-24" />
          <img src={redBull} alt="sponsor" className="h-14 sm:h-24" />
        </div> */}
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
              featuredEvents?.map((event, index) => {
                return (
                  <FeaturedEventCard
                    key={event.event_code}
                    eventId={event.event_code}
                    eventName={event.title}
                    category={event.category}
                    date={event.day}
                    max_seats={event.max_seats}
                    seats={event.seats}
                    eventImage={event.image_googledrive}
                    index={index}
                    teamSize={event.team_size}
                  />
                );
              })
            ) : (
              <>
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="change"
                >
                  {featuredEvents?.map((event, index) => (
                    <SwiperSlide className="slide">
                      <FeaturedEventCard
                        key={event.event_code}
                        eventId={event.event_code}
                        eventName={event.title}
                        category={event.category}
                        date={event.day}
                        seats={event.seats}
                        max_seats={event.max_seats}
                        eventImage={event.image_googledrive}
                        index={index}
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
