import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import HambergerMenu from "./Components/HambergerMenu";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import EventDetails from "./Pages/EventDetails";

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
        {windowStatus ? <NavigationBar /> : <HambergerMenu />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events/eventdetails" element={<EventDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
