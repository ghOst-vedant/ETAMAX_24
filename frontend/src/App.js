import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import HambergerMenu from "./Components/HambergerMenu";
import Navbar from "./Components/Navbar";

const App = () => {
  const [windowStatus, setWindowStatus] = useState(
    window.innerWidth > 820 ? true : false
  );

  function checkWindowSize() {
    setWindowStatus(window.innerWidth > 820 ? true : false);
  }

  window.onresize = checkWindowSize;
  return (
    <div>
      <Router>
        {windowStatus ? <Navbar /> : <HambergerMenu />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
