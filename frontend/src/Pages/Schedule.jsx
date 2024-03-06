import { React, useEffect, useRef, useState } from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Timeline } from "flowbite-react";
import axios from "axios";

const Schedule = () => {
  const days = ["Select Day", "Day One", "Day Two", "Day Three"];
  const events = ["Select Event", "Cultural", "Technical", "Seminar"];
  const dayMapping = {
    "Select Day": 0,
    "Day One": 1,
    "Day Two": 2,
    "Day Three": 3,
  };

  const eventMapping = {
    "Select Event": "E",
    Cultural: "C",
    Technical: "T",
    Seminar: "s",
  };

  // current day on the option panel

  // open close option tab
  const [opendays, setOpenDays] = useState(false);
  const [openEvents, setOpenEvents] = useState(false);

  const [allEvents, setAllEvents] = useState();
  const currEventRef = useRef(events[0]);
  const currDayRef = useRef(days[0]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const getEvents = async () => {
      const { data } = await axios.get(`/api/e/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setAllEvents(data.events);
      setFilteredEvents(data.events);
    };
    getEvents();
  }, []);

  const filterEvents = () => {
    if (dayMapping[currDayRef.current] === 0) {
      if (eventMapping[currEventRef.current] === "E") {
        setFilteredEvents(() => allEvents);
      } else {
        setFilteredEvents(() =>
          allEvents.filter(
            (oneEvent) =>
              eventMapping[currEventRef.current] === oneEvent.category
          )
        );
      }
    } else {
      const dayFiltered = allEvents.filter(
        (oneEvent) => dayMapping[currDayRef.current] === oneEvent.day
      );
      if (eventMapping[currEventRef.current] === "E") {
        setFilteredEvents(() => dayFiltered);
      } else {
        setFilteredEvents(() =>
          dayFiltered.filter(
            (oneEvent) =>
              eventMapping[currEventRef.current] === oneEvent.category
          )
        );
      }
    }
  };
  return (
    <div className="flameBg bg-black py-16 px-10 select-none sm:flex sm:flex-col sm:items-center">
      <div className="flex gap-12 text-white pt-16 sm:pl-20 select-none">
        <span
          className="flex gap-3 items-center relative cursor-default"
          onClick={() => {
            if (opendays) {
              setOpenDays(false);
            } else {
              setOpenDays(true);
            }
          }}
        >
          <p className=" font-montserat text-xl ">{currDayRef.current}</p>
          <div className="relative">
            {opendays ? (
              <KeyboardArrowUpRoundedIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )}
            {opendays && (
              <div className="absolute top-[30px]  -right-[10px] bg-black/70 rounded-xl px-5 py-4 h-fit w-[150px] select-none z-10 backdrop-blur-sm ">
                {days?.map((day, index) => (
                  <div key={index} className="flex flex-col ">
                    <span
                      className=" text-gray-300  text-md font-semibold "
                      onClick={() => {
                        currDayRef.current = day;
                        filterEvents();
                      }}
                    >
                      {day}
                    </span>
                    {index < days.length - 1 && (
                      <hr className=" w-[100%]  self-center my-2" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </span>

        <span
          className="flex gap-3 items-center relative cursor-default"
          onClick={() => {
            if (openEvents) {
              setOpenEvents(false);
            } else {
              setOpenEvents(true);
            }
          }}
        >
          <p className=" font-montserat text-xl">{currEventRef.current}</p>
          <div className="relative">
            {openEvents ? (
              <KeyboardArrowUpRoundedIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )}
            {openEvents && (
              <div className="absolute top-[30px] -right-[10px] bg-black/70 rounded-xl px-5 py-4 h-fit w-[150px] select-none z-10 backdrop-blur-sm">
                {events?.map((event, index) => (
                  <div key={index} className="flex flex-col ">
                    <span
                      className=" text-gray-300  text-md font-semibold"
                      onClick={() => {
                        currEventRef.current = event;
                        filterEvents();
                      }}
                    >
                      {events[index]}
                    </span>
                    {index < events.length - 1 && (
                      <hr className=" w-[100%]  self-center my-2" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </span>
      </div>
      <div className="py-16 px-6 sm:w-[60%] z-5 ">
        <Timeline>
          {filteredEvents?.map((schedule, index) => (
            <Timeline.Item key={index}>
              <Timeline.Point />
              <Timeline.Content className="border rounded-xl px-4 py-2 pb-0 cursor-default bg-black/20 backdrop-blur-sm">
                <Timeline.Title className=" font-montserat text-white text-lg flex  justify-between pr-[10%]">
                  <span>{schedule.title}</span>
                  <span>
                    {schedule.category === "S"
                      ? "seminar"
                      : schedule.category === "T"
                      ? "Technical"
                      : "Cultural"}
                  </span>
                </Timeline.Title>
                <Timeline.Time className=" font-montserat text-white text-md font-medium">
                  {schedule.start} {schedule.end}
                </Timeline.Time>
                <Timeline.Body className=" font-montserat text-white text-md font-medium">
                  ₹ {schedule.entry_fee} Rs. <br />
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Schedule;
