import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
const FeaturedEventCard = ({
  eventName,
  date,
  category,
  seats,
  bgColor,
  eventImage,
}) => {
  const [windowStatus, setWindowStatus] = useState(
    window.innerWidth > 820 ? true : false
  );

  function checkWindowSize() {
    setWindowStatus(window.innerWidth > 820 ? true : false);
  }

  window.onresize = checkWindowSize;
  if (date === 1) {
    date = "14th Mar";
  } else if (date === 2) {
    date = "15th Mar";
  } else {
    date = "16th Mar";
  }
  return (
    <div
      className={`${bgColor} rounded-xl flex flex-col px-5 py-5 items-center sm:w-[30%]`}
    >
      <div className="flex relative sm:w-[100%]">
        <img
          src={eventImage}
          alt=""
          className="w-[100%] self-center sm:rounded-xl"
        />
        <div className=" absolute right-2  p-1 sm:p-2 z-10">
          <PersonOutlineOutlinedIcon
            sx={{
              position: "absolute",
              right: "0",
              fontSize: "2rem",
              bgcolor: "white",
              padding: "3px",
              borderRadius: "1rem",
            }}
          />
        </div>
        <div className="absolute w-full py-2 sm:py-3 bg-black/60 backdrop-blur-sm  rounded-t-xl">
          <h1 className=" font-montserat text-white text-center sm:text-left uppercase  sm:pl-3 font-semibold text-md">
            {eventName}
          </h1>
        </div>
      </div>
      <div className="mt-5 mb-2 flex gap-10 items-center justify-between w-full px-[20%]">
        <span className="flex flex-col items-center gap-2 text-white">
          {" "}
          <CalendarTodayOutlinedIcon
            sx={{
              fontSize: "1.5rem",
              color: "white",
            }}
          />
          <span className="text-center font-montserat font-medium text-nowrap">
            {date}
          </span>
        </span>
        <span className="flex flex-col items-center gap-2 text-white">
          {" "}
          <ViewListRoundedIcon
            sx={{
              fontSize: "1.5rem",
              color: "white",
            }}
          />
          <span className=" font-montserat font-medium uppercase">
            {category === "c"
              ? "Cultural"
              : category === "T"
              ? "Technical"
              : "Seminar"}
          </span>
        </span>
        <span className="flex flex-col items-center gap-2 text-white">
          {" "}
          <ChairAltOutlinedIcon
            sx={{
              fontSize: "1.5rem",
              color: "white",
            }}
          />
          <span className=" font-montserat font-medium ">{seats}</span>
        </span>
      </div>
    </div>
  );
};

export default FeaturedEventCard;
