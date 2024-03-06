import "swiper/css";
import "swiper/css/effect-cards";
import React, { useEffect, useState } from "react";
import "./MobileEventCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { EffectCards } from "swiper/modules";
import axios from "axios";
import FeaturedEventCard from "./FeaturedEventCard";
import eventImage from "../Assets/Common_images/sampleEvent.png";

SwiperCore.use([EffectCards]);

export default function MobileEventCard({ eventType }) {
  const token = localStorage.getItem("token");
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const eventMapping = {
      "Select Event": "E",
      Cultural: "C",
      Technical: "T",
      Seminar: "S",
    };
    const getEvents = async () => {
      const { data } = await axios.get(`/api/e/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setAllEvents(() =>
        data.events.filter(
          (event) => event.category === eventMapping[eventType]
        )
      );
      // console.log(allEvents);
    };
    getEvents();
  }, [eventType, token]);
  return (
    <div className="mySwiper">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="change"
      >
        {allEvents?.map((event, index) => (
          <SwiperSlide className="slide">
            <FeaturedEventCard
              key={event.event_code}
              eventId={event.event_code}
              eventName={event.title}
              category={event.category}
              date={event.day}
              max_seats={event.max_seats}
              seats={event.seats}
              eventImage={eventImage}
              index={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
