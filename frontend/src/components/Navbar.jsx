import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
const NavigationBar = () => {
  return (
    <div className="pt-5 flex justify-between items-center text-white px-10 bg-transparent absolute w-[100vw]">
      <NavLink
        className="flex gap-2 items-center font-cinzel font-bold text-2xl"
        to="/"
      >
        ETAMAX-24
      </NavLink>
      <div className="flex lg:gap-10 sm:gap-5 ">
        <div className="flex text-white lg:text-xl sm:text-lg sm:gap-5 lg:gap-10 items-center">
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
          <NavLink activeclassname="active" to="/services" className="navlinks">
            Schedule
          </NavLink>
          <NavLink activeclassname="active" to="/projects" className="navlinks">
            Profile
          </NavLink>
          <NotificationsIcon />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
