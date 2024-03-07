import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import eventImage from "../Assets/Common_images/sampleEvent.png";
import { useNavigate } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleIcon from "@mui/icons-material/People";
const FeaturedEventCard = ({
  eventId,
  eventName,
  date,
  category,
  max_seats,
  seats,
  index,
  teamSize,
  eventImage
}) => {
  const navigate = useNavigate();
  const bgColor = [
    "bg-[#86000A]",
    "bg-[#B7181B]",
    "bg-[#F44B1E]",
    "bg-[#FF8E00]",
    "bg-[#FFB800]",
  ];
  if (date === 1) {
    date = "14 Mar";
  } else if (date === 2) {
    date = "15 Mar";
  } else {
    date = "16 Mar";
  }
  const setId = () => {
    localStorage.setItem("eventId", eventId);
    navigate("/event-details");
  };

  return (
    <div
      className={`${bgColor[index % bgColor.length]
        } rounded-xl flex flex-col px-5 py-5 items-center w-[100%] sm:w-[40%] lg:w-[30%]`}
      onClick={setId}
    >
      <div className="flex relative sm:w-[100%]">
        <img
          src={eventImage}
          alt=""
          className="w-[100%] self-center sm:rounded-xl"
        />
        <div className=" absolute right-2  p-1 sm:p-2 z-10">
          {teamSize === 1 ? (
            <PersonIcon
              sx={{
                position: "absolute",
                right: "0",
                fontSize: "2rem",
                bgcolor: "white",
                padding: "3px",
                borderRadius: "1rem",
              }}
            />
          ) : teamSize === 2 ? (
            <PeopleIcon
              sx={{
                position: "absolute",
                right: "0",
                fontSize: "2rem",
                bgcolor: "white",
                padding: "3px",
                borderRadius: "1rem",
              }}
            />
          ) : (
            teamSize > 2 && (
              <GroupsIcon
                sx={{
                  position: "absolute",
                  right: "0",
                  fontSize: "2rem",
                  bgcolor: "white",
                  padding: "3px",
                  borderRadius: "1rem",
                }}
              />
            )
          )}
        </div>
        <div className="absolute w-full py-2 sm:py-3 bg-black/60 backdrop-blur-sm  rounded-t-xl">
          <h1 className=" font-montserat text-white text-center sm:text-left uppercase  sm:pl-3 font-semibold text-md">
            {eventName}
          </h1>
        </div>
      </div>
      <div className="mt-5 mb-2 flex gap-10 items-center justify-between lg:w-full px-0 sm:px-[10%]">
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
                ? "Tech"
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
          <span className=" font-montserat font-medium ">
            {seats} / {max_seats}
          </span>
        </span>
      </div>
    </div>
  );
};

export default FeaturedEventCard;
