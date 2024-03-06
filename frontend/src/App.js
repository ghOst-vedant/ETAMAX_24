import React, { useEffect } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import HambergerMenu from "./Components/HambergerMenu";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Schedule from "./Pages/Schedule";
import EventCard from "./Pages/event_cards";
import axios from "axios";
import EventDetails from "./Pages/EventDetails";
axios.defaults.baseURL = "http://20.44.59.208:8000/";
const App = () => {
  const [windowStatus, setWindowStatus] = useState(
    window.innerWidth > 850 ? true : false
  );

  function checkWindowSize() {
    setWindowStatus(window.innerWidth > 850 ? true : false);
  }

  window.onresize = checkWindowSize;

  const [isAuth, setIsAuth] = useState(false);

  function setToken() {
    localStorage.getItem("token") ? setIsAuth(true) : setIsAuth(false);
  }
  useEffect(() => {
    setToken();
  });

  return (
    <div>
      <Router>
        {isAuth && (windowStatus ? <NavigationBar /> : <HambergerMenu />)}
        {!isAuth ? (
          <Routes>
            <Route path="/auth" element={<Login setToken={setToken} />}></Route>
            <Route
              path="/"
              element={
                isAuth ? <Navigate to="/home" /> : <Navigate to="/auth" />
              }
            ></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/schedule" element={<Schedule />}></Route>
            <Route path="/events" element={<EventCard />}></Route>
            <Route path="/event-details" element={<EventDetails />}></Route>
          </Routes>
        )}
        {isAuth && <Footer />}
      </Router>
    </div>
  );
};

export default App;
