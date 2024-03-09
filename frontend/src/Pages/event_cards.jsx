import React, { useState, useEffect, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MobileEventCard from "../Components/MobileEventCard";
import { CircularProgress, Link } from "@mui/material";
import ErrorFallback from "../Components/ErrorBoundary";
import Sponsors from "../Components/Sponsors";
const EventCard = lazy(() => import("../Components/EventCard"));

const days = ["Select Day", "Day One", "Day Two", "Day Three"];
const events = ["Select Event", "Cultural", "Technical", "Seminar"];

const EventCards = () => {
  const [day, setDay] = useState(days[0]);
  const [event, setEvent] = useState(events[0]);
  const [opendays, setOpenDays] = useState(false);
  const [openEvents, setOpenEvents] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

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

        {!isMobile && (
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
        )}

        {isMobile ? (
          <div className="flex flex-col gap-20 mt-10 ">
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
              <Suspense fallback={<CircularProgress color="error" />}>
                {events.slice(1, events.length).map((eventName, index) => (
                  <div
                    key={eventName}
                    className="flex flex-col items-center sm:items-center sm:py-16 gap-10"
                  >
                    <div className="flex">
                      <div className="flex text-white px-20 mx-auto sm:w-[70%]">
                        <h2 className="font-montserat text-3xl font-semibold sm:text-5xl">
                          {eventName}
                        </h2>
                      </div>
                      <Link
                        to="/schedule"
                        className="absolute right-0 mr-4 mt-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="py- 4 h-5 sm:h-6 w-6 text-white"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                    <MobileEventCard eventType={eventName} />
                  </div>
                ))}
              </Suspense>
            </ErrorBoundary>
          </div>
        ) : (
          <div>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
              <Suspense fallback={<CircularProgress color="error" />}>
                <EventCard day={day} event={event} />
              </Suspense>
            </ErrorBoundary>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCards;
