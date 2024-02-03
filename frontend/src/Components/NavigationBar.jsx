import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="pt-5 flex justify-between items-center text-white px-10 bg-transparent absolute w-[100vw]">
      <NavLink
        className="flex gap-2 items-center font-cinzel font-bold text-2xl"
        to="/"
      >
        ETAMAX-24
      </NavLink>
      <div className="flex lg:gap-10 sm:gap-5 ">
        <div className="flex text-white lg:text-xl sm:text-lg sm:gap-5 lg:gap-10 items-center font-montserat">
          <NavLink
            exact="true"
            to="/"
            activeclassname="active"
            className="navlinks"
          >
            Home
          </NavLink>
          <NavLink activeclassname="active" to="/about" className="navlinks">
            About Us
          </NavLink>
          <NavLink activeclassname="active" to="/schedule" className="navlinks">
            Schedule
          </NavLink>
          <NavLink activeclassname="active" to="/profile" className="navlinks">
            Profile
          </NavLink>
          <div
            className=""
            onClick={() => {
              if (open) {
                setOpen(false);
              } else {
                setOpen(true);
              }
            }}
          >
            <NotificationsIcon />
          </div>
          {open && (
            <div className="absolute right-5 top-[70px] bg-black/50 rounded-xl px-5 py-4 h-[300px] w-[300px] ">
              {events?.map((event, index) => (
                <div key={index} className="flex flex-col ">
                  <span className=" text-gray-300  text-xl font-medium">
                    {event.EventName}{" "}
                  </span>
                  <span className="text-gray-300  text-base  ">
                    {event.Message}{" "}
                  </span>
                  {index < events.length - 1 && (
                    <hr className=" w-[100%]  self-center my-3" />
                  )}
                </div>
              ))}
              <div className="up-arrow absolute right-6 -top-3"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const events = [
  {
    EventName: "Seminar-1",
    Message: "Seats Full",
  },
  {
    EventName: "Event-2",
    Message: "Seats Full",
  },
  {
    EventName: "Event-2",
    Message: "Seats Full",
  },
];
export default NavigationBar;