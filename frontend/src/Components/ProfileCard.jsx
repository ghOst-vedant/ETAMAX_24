import React from "react";
import profile_card_bg from "../Assets/Common_images/profile_card_event.png";
import verified from "../Assets/Common_images/verified.png";
import unverified from "../Assets/Common_images/unverified.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

const ProfileCard = ({ card }) => {
  const dayReverseMapping = {
    1: "14th March",
    2: "15th March",
    3: "16th March",
  };

  return (
    <div className="flex rounded-3xl gap-3 sm:w-[80%] lg:w-[40%] relative py-4 px-2 bg-gray-100 items-center justify-center">
      {/* <img
        className="absolute left-2 top-2 w-[32px]"
        src={card?.is_verified && WhatsAppIcon}
        alt="verified"
      /> */}
      {card?.is_verified && (
        <Link
          className="absolute top-2 left-2 bg-gray-600 rounded-full items-center justify-center flex px-2"
          to={card.event.whatsapp_link}
          target="_blank"
        >
          <WhatsAppIcon
            fontSize="large"
            sx={{
              color: "greenyellow",
              top: "10px",
              left: "10px",
            }}
            onClick={() => console.log("hello")}
          /><span className="px-2 py-2 text-lg text-green-300 ">Join now</span>
        </Link>
      )}
      <img
        src={card?.event?.image_googledrive}
        alt="event_image"
        className="w-[50%] rounded-3xl h-[100px] sm:h-full object-cover"
      />
      <div className="montserat flex flex-col justify-center pr-2 sm:w-[50%]">
        <h2 className="font-semibold text-lg">{card?.event?.title}</h2>
        <p className="font-medium">{`Entry Fee: ₹ ${card?.event?.entry_fee}`}</p>
        <p className="font-medium">{`Date: ${dayReverseMapping[card?.event?.day]
          }`}</p>
        <p className="font-medium">{`Time: ${card?.event?.start.slice(
          0,
          5
        )} - ${card?.event?.end.slice(0, 5)}`}</p>
      </div>
      <img
        className="absolute right-2 top-2 w-[32px]"
        src={card?.is_verified ? verified : unverified}
        alt="verified"
      />
    </div>
  );
};

export default ProfileCard;
