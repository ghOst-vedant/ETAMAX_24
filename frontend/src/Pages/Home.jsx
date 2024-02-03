import React, { useState } from "react";

import heroPc from "../Assets/Common_images/Hero_Section.png";
import heroMobile from "../Assets/Common_images/Phone-Hero.png";
const Home = () => {
  const [windowStatus, setWindowStatus] = useState(
    window.innerWidth > 820 ? true : false
  );

  function checkWindowSize() {
    setWindowStatus(window.innerWidth > 820 ? true : false);
  }

  window.onresize = checkWindowSize;
  return (
    <>
      <img src={windowStatus ? heroPc : heroMobile} alt="" />
    </>
  );
};

export default Home;
