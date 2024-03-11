import React from "react";
import ideaplots from "../Assets/Sponsors/ideaplots.png";
import ktm from "../Assets/Sponsors/ktm.png";
import redbull from "../Assets/Sponsors/redBull.png";
import uconnect from "../Assets/Sponsors/Uconnect.png";
import mosho from "../Assets/Sponsors/mosho.png";
import horidrill from "../Assets/Sponsors/horidrill.jpeg";
import jamboree from "../Assets/Sponsors/Jamboree.jpeg";
import ims from "../Assets/Sponsors/ims.jpg";
import aecc from "../Assets/Sponsors/aecc.jpg";

const Sponsors = () => {
  const Sponsors = [
    { image: ktm },
    { image: mosho },
    { image: redbull },
    { image: uconnect },
    { image: horidrill },
    { image: ideaplots },
    { image: jamboree },
    { image: ims },
    { image: aecc },
  ];

  return (
    <div className="slider bg-black/30 h-[150px] overflow-hidden flex py-14 sm:py-20 mt-10 sm:w-full">
      <div className="slide-track flex items-center h-full w-fit my-auto">
        {Sponsors.map((sponsor, index) => (
          <div
            className="slide h-[80px] sm:h-[100px] min-w-fit px-10 flex items-center justify-center"
            key={index}
          >
            <img
              src={sponsor.image}
              alt="sponsors"
              className="h-[80px] sm:h-[100px] w-fit"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
