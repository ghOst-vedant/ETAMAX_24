import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";

const App = () => {
  return <div>
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  </div>;
};

export default App;
