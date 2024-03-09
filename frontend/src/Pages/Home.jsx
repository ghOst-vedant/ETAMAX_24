import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore from "swiper";
import { EffectCards } from "swiper/modules";
import heroPc from "../Assets/Common_images/Hero_Section.png";
import heroMobile from "../Assets/Common_images/Phone-Hero.png";
import wing1 from "../Assets/Common_images/wing1.png";
import wing2 from "../Assets/Common_images/wing2.png";
import FeaturedEventCard from "../Components/FeaturedEventCard";
import cloud from "../Assets/other_images/clouds.png";
import axios from "axios";
import Sponsors from "../Components/Sponsors";

const Home = () => {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getEvents = async () => {
      const { data } = await axios.get(`/api/e/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setFeaturedEvents(() =>
        data.events.filter((event) => event.is_featured === true)
      );
      // console.log(allEvents);
    };
    getEvents();
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
            autoStart={0}
            autoPlay={0}
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
      <div className="bg-nextHome pb-20 pt-10">
        <Sponsors />
        {/* Features Section */}
        <div className="flex flex-col sm:pt-9 pt-20">
          <span className="flex items-center justify-center w-full  bg-black/50  sm:bg-transparent sm:backdrop-blur-none py-5 backdrop-blur-sm">
            <img src={wing1} alt="" className=" w-[15%] sm:w-[10%] " />
            <h1 className=" font-cinzel sm:text-5xl text-2xl text-white font-semibold px-1 ">
              FEATURED EVENTS
            </h1>
            <img src={wing2} alt="" className=" w-[15%] sm:w-[10%] " />
          </span>
          <div className="py-10 flex flex-col gap-8 px-5 items-center justify-center relative sm:flex-wrap sm:flex-row">
            {featuredEvents?.map((event, index) => {
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
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
