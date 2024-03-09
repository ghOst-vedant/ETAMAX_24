import React, { useState, useEffect } from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MobileEventCard from "../Components/MobileEventCard";
import Sponsors from "../Components/Sponsors";
import EventCard from "../Components/EventCard";
import { Link } from "react-router-dom";

const days = ["Select Day", "Day One", "Day Two", "Day Three"];
const events = ["Select Event", "Cultural", "Technical", "Seminar"];

const EventCards = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [day, setDay] = useState(isMobile ? days[1] : days[0]);
  const [event, setEvent] = useState(isMobile ? events[1] : events[0]);
  const [opendays, setOpenDays] = useState(false);
  const [openEvents, setOpenEvents] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 840);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flameBg py-6 pb-20 pt-24 overflow-hidden">
      <Sponsors />

      <div className="flex flex-col items-center">
        <h2 className="font-cinzel text-4xl font-bold sm:text-5xl mt-16 text-white">
          EVENTS
        </h2>
        <div className="px-10 select-none sm:flex sm:flex-col sm:items-center">
          <div className="flex gap-12 text-white pt-16 select-none">
            <span
              className="flex gap-3 items-center relative cursor-default"
              onClick={() => setOpenDays(!opendays)}
            >
              <p className="font-montserat text-xl">{day}</p>
              <div className="relative">
                {opendays ? (
                  <KeyboardArrowUpRoundedIcon />
                ) : (
                  <KeyboardArrowDownRoundedIcon />
                )}
                {opendays && (
                  <div className="absolute top-[30px] -right-[10px] bg-black/70 rounded-xl px-5 py-4 h-fit w-[150px] select-none z-20 backdrop-blur-sm ">
                    {days?.map((dayOption, index) => (
                      <div key={dayOption} className="flex flex-col">
                        <span
                          className="text-gray-300 text-md font-semibold"
                          onClick={() => setDay(dayOption)}
                        >
                          {dayOption}
                        </span>
                        {index < days.length - 1 && (
                          <hr className="w-[100%] self-center my-2" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </span>

            <span
              className="flex gap-3 items-center relative cursor-default"
              onClick={() => setOpenEvents(!openEvents)}
            >
              <p className="font-montserat text-xl">{event}</p>
              <div className="relative">
                {openEvents ? (
                  <KeyboardArrowUpRoundedIcon />
                ) : (
                  <KeyboardArrowDownRoundedIcon />
                )}
                {openEvents && (
                  <div className="absolute top-[30px] -right-[10px] bg-black/70 rounded-xl px-5 py-4 h-fit w-[150px] select-none z-20 backdrop-blur-sm">
                    {events?.map((eventOption, index) => (
                      <div key={eventOption} className="flex flex-col">
                        <span
                          className="text-gray-300 text-md font-semibold"
                          onClick={() => setEvent(eventOption)}
                        >
                          {eventOption}
                        </span>
                        {index < events.length - 1 && (
                          <hr className="w-[100%] self-center my-2" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </span>
          </div>
          <div className="py-6" />
        </div>

        <div>
          <EventCard day={day} event={event} />
        </div>
      </div>
    </div>
  );
};

export default EventCards;
