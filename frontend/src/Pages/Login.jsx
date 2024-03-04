import React, { useState, useEffect } from "react";
import loginBird from "../Assets/other_images/loginBird.png";
import user from "../Assets/other_images/user.png";
import letter from "../Assets/other_images/letter.png";
import lock from "../Assets/other_images/lock.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = ({ setAuth }) => {
  const [login, setlogin] = useState(true); //true means login and flase means signup

  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [tokenExist, setTokenExist] = useState();

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(`/api/u/auth/login/`, {
        username: id,
        password,
      });
      console.log(data.success);
      console.log(data);
      navigate("/home");
      console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("roll_no", data.user.roll_no);
      localStorage.setItem("name", data.user.name);
      const participations = JSON.stringify(data.user.participations);
      localStorage.setItem("participations", participations);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("gender", data.user.gender);
      window.location.reload();
    } catch (error) {
      if (error.response) {
        alert("Check your Login Credentials and try again"); // Show error message in alert
      } else {
        alert("An error occurred"); // Fallback error message
      }
    }
  };
  const checkToken = () => {
    if (localStorage.getItem("token")) {
      setTokenExist(true);
    } else {
      setTokenExist(false);
      console.log("You need to Login first");
    }
  };
  useEffect(() => {
    checkToken();
  });
  const handleSignup = () => {
    setlogin(!login);
  };
  return (
    <div className="flameBg h-[100vh] overflow-y-hidden">
      <div
        className={`h-[100%] flex px-10 ${login ? "pt-[30vw] sm:pt-32" : "pt-[20vw] sm:pt-20"
          }`}
      >
        <div className="flex flex-col items-center gap-4 font-montserat sm:mx-auto">
          <img src={loginBird} alt="phoenix" className="h-48 sm:h-60" />
          {login ? (
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
                  className="text-xl w-[80%] bg-transparent rounded-r-full font-semibold text-white"
                />
              </div>
              <div className="bg-white/30 border-2 border-white rounded-full flex p-2 gap-2">
                <img
                  src={lock}
                  alt="icon"
                  className="w-[14%] my-auto sm:w-[8%] rounded-full mr-1"
                />
                <input
                  type="text"
                  name="password"
                  id="rollno"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="text-xl w-[80%] bg-transparent rounded-r-full font-semibold text-white"
                />
              </div>
              <div
                className="bg-[#FFB800] w-fit m-auto py-3 px-10 rounded-full text-xl font-semibold text-gray-700 select-none cursor-pointer"
                onClick={handleLogin}
              >
                Login
              </div>
            </form>
          ) : (
            <form action="submit" className="flex flex-col gap-4">
              <div className="bg-white/30 border-2 border-white rounded-full flex p-1 gap-2">
                <img
                  src={user}
                  alt="icon"
                  className="w-[15%] sm:w-[10%] rounded-full"
                />
                <input
                  type="text"
                  name="username"
                  id="rollno"
                  placeholder="Username"
                  className="text-xl outline-none w-[80%] bg-transparent rounded-r-full font-semibold text-white"
                />
              </div>
              <div className="bg-white/30 border-2 border-white rounded-full flex p-2 gap-2">
                <img
                  src={letter}
                  alt="icon"
                  className="w-[13%] sm:w-[8%] rounded-full mr-1"
                />
                <input
                  type="text"
                  name="Email"
                  id="rollno"
                  placeholder="E-mail"
                  className="text-xl outline-none w-[80%] bg-transparent rounded-r-full font-semibold text-white"
                />
              </div>
              <div className="bg-white/30 border-2 border-white rounded-full flex p-2 gap-2">
                <img
                  src={lock}
                  alt="icon"
                  className="w-[13%] sm:w-[8%] rounded-full mr-1"
                />
                <input
                  type="text"
                  name="rollno"
                  id="rollno"
                  placeholder="Password"
                  className="text-xl outline-none w-[80%] bg-transparent rounded-r-full font-semibold text-white"
                />
              </div>
              <button
                className="bg-[#FFB800] w-fit m-auto py-3 px-10 rounded-full text-xl font-semibold text-gray-700"
                onClick={handleSignup}
              >
                Signup
              </button>
            </form>
          )}
          {login ? (
            <button
              className="w-fit py-3 px-6 text-xl font-semibold text-white border-b-[3px]"
              onClick={() => {
                setlogin(false);
              }}
            >
              Signup
            </button>
          ) : (
            <button
              className="w-fit py-3 px-6 text-xl font-semibold text-white border-b-[3px]"
            // onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
