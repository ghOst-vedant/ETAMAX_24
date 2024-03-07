import React, { useEffect } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
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
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div>
      <Router>
        {isAuth && (windowStatus ? <NavigationBar /> : <HambergerMenu />)}
        <Routes>
          <Route
            path="/"
            element={isAuth ? <Home /> : <Login setToken={setToken} />}
          />
          <Route
            path="/about"
            element={isAuth ? <About /> : <Login setToken={setToken} />}
          />
          <Route
            path="/profile"
            element={isAuth ? <Profile /> : <Login setToken={setToken} />}
          />
          <Route
            path="/schedule"
            element={isAuth ? <Schedule /> : <Login setToken={setToken} />}
          />
          <Route
            path="/events"
            element={isAuth ? <EventCard /> : <Login setToken={setToken} />}
          />
          <Route
            path="/event-details"
            element={isAuth ? <EventDetails /> : <Login setToken={setToken} />}
          />
        </Routes>
        {isAuth && <Footer />}
      </Router>
    </div>
  );
};

export default App;
