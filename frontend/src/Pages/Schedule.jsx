import { React, useState } from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Timeline } from "flowbite-react";
const days = ["Day One", "Day Two", "Day Three"];
const events = ["Cultural", "Technical", "Seminar"];
const schedule = [
  {
    "Day One": [
      {
        eventName: "Event-1",
        time: "9:00 Pm",
        price: "Rs. 100/-",
        venue: "Room",
      },
      {
        eventName: "Event-2",
        time: "10:00 Pm",
        price: "Rs. 200/-",
        venue: "Room",
      },
      {
        eventName: "Event-3",
        time: "11:00 Pm",
        price: "Rs. 200/-",
        venue: "Room",
      },
      {
        eventName: "Seminar-1",
        time: "12:00 Pm",
        price: "Rs. 100/-",
        venue: "Room",
      },
    ],
    "Day Two": [
      {
        eventName: "Event-1",
        time: "9:00 Pm",
        price: "Rs. 100/-",
        venue: "Room",
      },
      {
        eventName: "Event-2",
        time: "11:00 Pm",
        price: "Rs. 200/-",
        venue: "Room",
      },
      {
        eventName: "Event-3",
        time: "1:00 Pm",
        price: "Rs. 200/-",
        venue: "Room",
      },
      {
        eventName: "Seminar-2",
        time: "12:00 Pm",
        price: "Rs. 100/-",
        venue: "Room",
      },
    ],
    "Day Three": [
      {
        eventName: "Event-1",
        time: "9:00 Pm",
        price: "Rs. 100/-",
        venue: "Room",
      },
      {
        eventName: "Event-2",
        time: "10:00 Pm",
        price: "Rs. 200/-",
        venue: "Room",
      },
      {
        eventName: "Event-3",
        time: "11:00 Pm",
        price: "Rs. 200/-",
        venue: "Room",
      },
      {
        eventName: "Seminar-3",
        time: "13:00 Pm",
        price: "Free",
        venue: "Room",
      },
    ],
  },
];
const Schedule = () => {
  const [day, setDay] = useState(days[0]);
  const [event, setEvent] = useState(events[0]);
  const [opendays, setOpenDays] = useState(false);
  const [openEvents, setOpenEvents] = useState(false);

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
          <p className=" font-montserat text-xl ">{day}</p>
          <div className="relative">
            {opendays ? (
              <KeyboardArrowUpRoundedIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )}
            {opendays && (
              <div className="absolute top-[30px]  -right-[10px] bg-black/70 rounded-xl px-5 py-4 h-[135px] w-[150px] select-none z-10 backdrop-blur-sm ">
                {days?.map((day, index) => (
                  <div key={index} className="flex flex-col ">
                    <span
                      className=" text-gray-300  text-md font-semibold "
                      onClick={() => {
                        setDay(days[index]);
                      }}
                    >
                      {days[index]}{" "}
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
          <p className=" font-montserat text-xl">{event}</p>
          <div className="relative">
            {openEvents ? (
              <KeyboardArrowUpRoundedIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )}
            {openEvents && (
              <div className="absolute top-[30px] -right-[10px] bg-black/70 rounded-xl px-5 py-4 h-[135px] w-[150px] select-none z-10 backdrop-blur-sm">
                {events?.map((day, index) => (
                  <div key={index} className="flex flex-col ">
                    <span
                      className=" text-gray-300  text-md font-semibold"
                      onClick={() => {
                        setEvent(events[index]);
                      }}
                    >
                      {events[index]}{" "}
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
          {schedule[0][day]?.map((sche, index) => (
            <Timeline.Item key={index}>
              <Timeline.Point />
              <Timeline.Content className="border-2 rounded-xl px-4 py-2 pb-0 cursor-default bg-black/20 backdrop-blur-sm">
                <Timeline.Title className=" font-montserat text-white text-lg">
                  {sche.eventName}
                </Timeline.Title>
                <Timeline.Time className=" font-montserat text-white text-md font-medium">
                  {sche.time}
                </Timeline.Time>
                <Timeline.Body className=" font-montserat text-white text-md font-medium">
                  {sche.price} <br /> {sche.venue}
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
