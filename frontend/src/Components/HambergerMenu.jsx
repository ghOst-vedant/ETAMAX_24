import React, { useEffect, useState } from "react";
import HamburgerButton from "./HamburgerButton.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import navbird from "../Assets/Common_images/navbird.png";
import axios from "axios";
const HambergerMenu = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState([]);
  const [allEvents, setAllEvents] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await axios.get(`/api/e/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setAllEvents(data.events);
      // Filter events to get only featured events
      const result = allEvents?.filter(
        (event) => event.max_seats === event.seats
      );
      setNotify(() =>
        data.events?.filter((event) => event.seats >= event.max_seats)
      );
    };

    getEvents();
  }, [token]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("roll_no");
    localStorage.removeItem("layer");
    localStorage.removeItem("userpassword");
    localStorage.removeItem("participations");

    navigate("/");
    window.location.reload();
    window.history.pushState({}, document.title, "/");
  };

  return (
    <div
      className={`absolute w-full  pt-4 px-2 pl-4  z-10 ${
        expanded ? "bg-nav shadow-lg  " : "bg-none"
      }`}
    >
      <div className="flex justify-between">
        <NavLink
          className="flex gap-2 items-center font-cinzel font-bold text-2xl text-white"
          to="/"
        >
          ETAMAX-24
        </NavLink>
        <span className="flex items-center gap-2">
          {!expanded && (
            <>
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
                <NotificationsIcon sx={{ fontSize: "2rem", color: "white" }} />
              </div>
              {open && (
                <div className="absolute right-5 top-[70px] bg-black/80 rounded-xl px-5 py-4 min-h-fit max-h-[400px] overflow-y-scroll w-[300px] ">
                  {notify?.map((event, index) => (
                    <div key={index} className="flex flex-col ">
                      <span className=" text-gray-300  text-lg font-medium">
                        {event.title}{" "}
                      </span>
                      <span className="text-gray-300  text-base  ">
                        Seats Full
                      </span>
                      {index < notify.length - 1 && (
                        <hr className=" w-[100%]  self-center my-3" />
                      )}
                    </div>
                  ))}
                  <div className="up-arrow absolute right-6 -top-3"></div>
                </div>
              )}
            </>
          )}
          <div
            onClick={() => {
              setExpanded(!expanded);
              setOpen(false);
            }}
          >
            <HamburgerButton status={expanded} setStatus={setExpanded} />
          </div>
        </span>
      </div>
      <ul
        className={`text-white text-xl ${
          expanded
            ? "h-full flex flex-col gap-5 mt-[20px] mb-[10px] font-montserat font-medium"
            : "h-0 "
        } transition-all duration-200 w-full items-center pb-2`}
      >
        <NavLink
          onClick={() => {
            setExpanded(!expanded);
          }}
          exact
          activeClassName="active"
          to="/"
          className={`${expanded ? "block" : "hidden"} navlinks`}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => {
            setExpanded(!expanded);
          }}
          activeClassName="active"
          to="/about"
          className={`${expanded ? "block" : "hidden"} navlinks`}
        >
          About Us
        </NavLink>
        <NavLink
          onClick={() => {
            setExpanded(!expanded);
          }}
          activeClassName="active"
          to="/events"
          className={`${expanded ? "block" : "hidden"} navlinks`}
        >
          Events
        </NavLink>
        <NavLink
          onClick={() => {
            setExpanded(!expanded);
          }}
          activeClassName="active"
          to="/schedule"
          className={`${expanded ? "block" : "hidden"} navlinks`}
        >
          Schedule
        </NavLink>
        <NavLink
          onClick={() => {
            setExpanded(!expanded);
          }}
          activeClassName="active"
          to="/profile"
          className={`${expanded ? "block" : "hidden"} navlinks`}
        >
          Profile
        </NavLink>
        <button
          onClick={handleLogOut}
          activeClassName="active"
          className={`${expanded ? "block" : "hidden"} navlinks`}
        >
          Logout
        </button>
        <div
          activeClassName="active"
          className={`${expanded ? "block " : "hidden"}`}
        >
          <img
            src={navbird}
            alt=""
            className=" p-0 -mb-1 rounded-3xl border-white border-2"
          />
        </div>
      </ul>
    </div>
  );
};

export default HambergerMenu;
