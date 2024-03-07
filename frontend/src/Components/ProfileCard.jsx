import React from "react";
import profile_card_bg from "../Assets/Common_images/profile_card_event.png";
import verified from "../Assets/Common_images/verified.png";
import unverified from "../Assets/Common_images/unverified.png";

const ProfileCard = ({ card }) => {
  //props me onClick add karna hai
  const dayReverseMapping = {
    1: "14th March",
    2: "15th March",
    3: "16th March",
  };
  return (
    <div
      className="flex bg-white rounded-3xl gap-3 sm:w-[80%] lg:w-[40%] relative"
      // onClick={onClick}
    >
      <img
        src={profile_card_bg}
        alt="event_image"
        className="w-[50%] rounded-3xl"
      />
      <div className="montserat flex flex-col justify-center pr-2 sm:w-[50%]">
        <h2 className="font-semibold text-lg">{card?.event?.title}</h2>
        <p className="font-medium">{`Entry Fee: ₹ ${card?.event?.entry_fee}`}</p>
        <p className="font-medium">{`Date: ${
          dayReverseMapping[card?.event?.day]
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
