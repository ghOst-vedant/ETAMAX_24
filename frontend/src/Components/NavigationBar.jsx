import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import axios from "axios";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [allEvents, setAllEvents] = useState();
  const [notify, setNotify] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // Notification Event

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await axios.get(`/api/e/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setAllEvents(data.events);
      // Filter events to get only featured events
    };
    const result = allEvents?.filter(
      (event) => event.max_seats === event.seats
    );
    setNotify(result);
    getEvents();
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("roll_no");
    localStorage.removeItem("participations");

    navigate("/");
    window.location.reload();
    window.history.pushState({}, document.title, "/");
  };
  return (
    <div className="pt-5 flex  justify-between items-center text-white px-10 bg-transparent absolute w-[100%]">
      <NavLink
        className="flex gap-2 items-center font-cinzel font-bold text-2xl"
        to="/"
      >
        ETAMAX-24
      </NavLink>
      <div className="flex lg:gap-10 sm:gap-5 ">
        <div className="flex text-white sm:gap-6 lg:gap-10 items-center font-montserat sm:text-md lg:text-lg">
          <NavLink
            exact="true"
            to="/home"
            activeclassname="active"
            className="navlinks"
          >
            Home
          </NavLink>
          <NavLink activeclassname="active" to="/about" className="navlinks">
            About Us
          </NavLink>
          <NavLink activeclassname="active" to="/events" className="navlinks">
            Events
          </NavLink>
          <NavLink activeclassname="active" to="/schedule" className="navlinks">
            Schedule
          </NavLink>
          <NavLink activeclassname="active" to="/profile" className="navlinks">
            Profile
          </NavLink>
          <NavLink
            activeclassname="active"
            to="/"
            className="navlinks"
            onClick={handleLogOut}
          >
            Logout
          </NavLink>
          <div
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
            <div className="absolute right-5 top-[70px] bg-black/50 rounded-xl px-5 py-4 h-auto w-[300px] ">
              {notify?.map((event, index) => (
                <div key={index} className="flex flex-col ">
                  <span className=" text-gray-300  text-lg font-medium">
                    {event.title}{" "}
                  </span>
                  <span className="text-gray-300  text-base  ">Seats Full</span>
                  {index < notify.length - 1 && (
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

// const events = [
//   {
//     EventName: "Seminar-1",
//     Message: "Seats Full",
//   },
//   {
//     EventName: "Event-2",
//     Message: "Seats Full",
//   },
//   {
//     EventName: "Event-2",
//     Message: "Seats Full",
//   },
// ];
export default Navbar;
