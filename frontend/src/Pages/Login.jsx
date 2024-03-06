import React, { useState } from "react";
import loginBird from "../Assets/other_images/loginBird.png";
import user from "../Assets/other_images/user.png";
import lock from "../Assets/other_images/lock.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = ({ setToken }) => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(`/api/u/auth/login/`, {
        username: id,
        password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("roll_no", data.user.roll_no);
      localStorage.setItem("name", data.user.name);
      const participations = JSON.stringify(data.user.participations);
      localStorage.setItem("participations", participations);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("gender", data.user.gender);
      navigate("/home");
      setToken();
    } catch (error) {
      if (error.response) {
        alert("Check your Login Credentials and try again"); // Show error message in alert
      } else {
        alert("An error occurred"); // Fallback error message
      }
    }
  };
  return (
    <div className="flameBg h-[100vh] overflow-y-hidden">
      <div className={`h-[100%] flex px-10 "pt-[30vw] sm:pt-32`}>
        <div className="flex flex-col items-center gap-4 font-montserat sm:mx-auto">
          <img src={loginBird} alt="phoenix" className="h-48 sm:h-60" />
          <form action="submit" className="flex flex-col gap-4">
            <div className="bg-white/30 border-2 border-white rounded-full flex p-1 gap-2">
              <img
                src={user}
                alt="icon"
                className="w-[15%] sm:w-[10%] rounded-full"
              />
              <input
                onChange={(e) => setId(e.target.value)}
                value={id}
                type="text"
                name="rollno"
                id="rollno"
                placeholder="Roll no / email"
                className="text-xl w-full bg-transparent border-none rounded-r-full font-semibold text-white"
              />
            </div>
            <div className="bg-white/30 border-2 border-white rounded-full flex p-2 gap-2">
              <img
                src={lock}
                alt="icon"
                className="w-[14%] my-auto sm:w-[8%] rounded-full mr-1"
              />
              <input
                type="password"
                name="password"
                id="rollno"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="text-xl w-full bg-transparent rounded-r-full font-semibold text-white border-none"
              />
            </div>
            <div
              className="bg-[#FFB800] w-fit m-auto py-3 px-10 rounded-full text-xl font-semibold text-gray-700 select-none cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </div>
          </form>

          <a
            className="w-fit py-3 px-6 text-xl font-semibold text-white border-b-[3px]"
            href="https://docs.google.com/forms/d/1bVbL0jvBTaey4DfAmp5_UGMlMt94NXWYd_0uoKVnlgI/edit?usp=drivesdk"
            target="_blank"
            rel="noreferrer"
          >
            Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
