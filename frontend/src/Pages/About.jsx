import React from "react";
import navBird from "../Assets/Common_images/navbird.png";
import redBull from "../Assets/Common_images/redBull.png";
import monstor from "../Assets/Common_images/monstor.png";
import adidas from "../Assets/Common_images/adidas.png";

const About = () => {
  const about = {
    etamax:
      "ETAMAX is the annual techno-cultural inter college fest of FCRIT. ETAMAX indeed special fest for all Agnelites and the institution as well. Sing or dance, code or paint, write or listen, build or analyze, ETAMAX serves the best opportunities to grow and developed in the form of the workshop, competitions, games etc. ETAMAX holds a cherished spot in the hearts of our students. As a techno-cultural event, it not only serves as a platform to showcase students' intellectual progress but also transforms the campus into a lively space filled with fun, games, and the creation of enduring memories for everyone involved. Witness the rebirth of creativity as artists and innovators showcase their work, drawing inspiration from the mythical phoenix.",
    phoenix:
      "This year's theme is Phoenix, symbolizing resilience and renewal with vibrant hues and sleek lines. Phoenix is a mythical bird associated with renewal and resurrection. In various cultures, it's believed to burst into flames upon death and then rise from its ashes, symbolizing eternal life and regeneration. This majestic creature is often seen as a powerful symbol of transformation, strength, and the cyclical nature of life. Experience fiery performances, visual displays, and workshops igniting creativity, culminating in a mesmerizing spectacle symbolizing renewal. Join us for a transformative and inspiring journey.",
  };
  return (
    <div className="flameBg bg-black flex flex-col py-24 gap-10 sm:items-center sm:py-36 sm:gap-32">
      <div className="flex flex-col text-white text-center px-6 gap-6 sm:w-[70%]">
        <h2 className="font-cinzel text-4xl font-bold sm:text-5xl">ETAMAX</h2>
        <p className="text-justify sm:text-lg font-montserat">{about.etamax}</p>
        <img
          src={navBird}
          alt="bird"
          className="border-2 border-white rounded-xl my-4 sm:my-10 sm:w-[85%] sm:mx-auto"
        />
        <h2 className="font-cinzel text-4xl font-bold sm:text-5xl">PHOENIX</h2>
        <p className="text-justify sm:text-lg font-montserat">
          {about.phoenix}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
        {/* sponsors */}
        <img src={redBull} alt="sponsor" className="h-14 sm:h-24" />
        <img src={monstor} alt="sponsor" className="h-14 sm:h-24" />
        <img src={adidas} alt="sponsor" className="h-14 sm:h-24" />
      </div>
    </div>
  );
};

export default About;
