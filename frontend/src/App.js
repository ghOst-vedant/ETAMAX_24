import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HambergerMenu from "./Components/HambergerMenu";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import axios from "axios";
import { CircularProgress } from "@mui/material";
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Profile = lazy(() => import("./Pages/Profile"));
const Login = lazy(() => import("./Pages/Login"));
const Schedule = lazy(() => import("./Pages/Schedule"));
const EventCard = lazy(() => import("./Pages/event_cards"));
const EventDetails = lazy(() => import("./Pages/EventDetails"));

axios.defaults.baseURL = "https://etamax.fcrit.ac.in/";
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
        <Suspense fallback={<CircularProgress color="error" />}>
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
              element={
                isAuth ? <EventDetails /> : <Login setToken={setToken} />
              }
            />
          </Routes>
        </Suspense>

        {isAuth && <Footer />}
      </Router>
    </div>
  );
};

export default App;
