import React, { useEffect, useState } from "react";
import ProfileCard from "../Components/ProfileCard";
import male from "../Assets/other_images/boy.png";
import female from "../Assets/other_images/girl.png";
import redBull from "../Assets/Common_images/redBull.png";
import monstor from "../Assets/Common_images/monstor.png";
import adidas from "../Assets/Common_images/adidas.png";
import ListIcon from "@mui/icons-material/List";
import VerifiedIcon from "@mui/icons-material/Verified";
import BlockIcon from "@mui/icons-material/Block";
import axios from "axios";

const Profile = () => {
  const [Roll, setRoll] = useState(null);
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const name = localStorage.getItem("name");
  const roll = localStorage.getItem("roll_no");
  const gender = localStorage.getItem("gender");
  const handleRollCheck = (e) => {
    e.preventDefault();
    const isUser = Boolean(Roll === roll);
    if (isUser) {
      alert("Verified!!");
    } else {
      alert("Error, Check Roll Number.");
    }
  };
  const token = localStorage.getItem("token");
  const getFeaturedEvents = async () => {
    const { data } = await axios.get(`/api/e/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const allEvents = data.events;
    const result = allEvents.filter((event) => event.is_featured === true);
    setFeaturedEvents(result);
  };

  useEffect(() => {
    getFeaturedEvents();
  }, []);
  console.log(featuredEvents);
  return (
    <div className=" bg-black flameBg pb-10 box-border flex flex-col sm:items-center sm:gap-20 ">
      <div className="sm:flex sm:mt-36 sm:w-full justify-evenly">
        <div className="flex items-center gap-6 pt-24 px-6 sm:pt-0">
          <img
            src={gender === "male" ? female : male}
            alt="person_image"
            className="rounded-full w-28 sm:w-60 border-2 sm:border-4 border-white/80"
          />
          <span className="montserat text-white flex flex-col gap-2">
            <h2 className="text-2xl sm:text-5xl font-semibold ">{name}</h2>
            <h3 className="font-medium text-lg sm:text-3xl sm:font-normal">
              {roll}
            </h3>
          </span>
        </div>
        <div className="text-white montserat px-6 my-8 sm:w-[30%]">
          <h2 className="text-2xl font-semibold pl-2 sm:text-3xl">DASHBOARD</h2>
          <table className="profile_table mt-2">
            <tr>
              <td>
                <ListIcon />
              </td>
              <td>Enrolled</td>
              <td>5</td>
              <td>500 /-</td>
            </tr>
            <tr>
              <td>
                <VerifiedIcon />
              </td>
              <td>Paid</td>
              <td>2</td>
              <td>200 /-</td>
            </tr>
            <tr>
              <td>
                <BlockIcon />
              </td>
              <td>Unpaid</td>
              <td>3</td>
              <td>300 /-</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="px-6 flex flex-col sm:flex-row gap-6 sm:gap-x-20 sm:gap-y-10 sm:flex-wrap sm:justify-center">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
      <div className="flex flex-col items-center mt-6 gap-4 px-6">
        <h2 className="text-xl font-semibold pl-2 text-white sm:text-3xl sm:pl-0">
          CHECKOUT
        </h2>
        <form
          action="submit"
          className="flex flex-col border-2 border-white rounded-2xl bg-black/20 p-4 gap-4 text-white w-[80%] sm:w-[30%] sm:flex-row"
        >
          <div className="bg-white/30 border-2 border-white rounded-full flex p-1 gap-2">
            <img
              src={male}
              alt="icon"
              className="w-[20%] sm:w-[18%] rounded-full"
            />
            <input
              type="text"
              value={Roll}
              onChange={(e) => setRoll(e.target.value)}
              name="rollno"
              id="rollno"
              placeholder="Roll no"
              className="text-xl outline-none w-[80%] bg-transparent rounded-r-full"
            />
          </div>
          <button
            className="bg-white/30 w-fit m-auto px-8 py-2 text-lg rounded-full border-2 border-white"
            onClick={handleRollCheck}
          >
            Checkout
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-4 mt-10 mx-auto sm:mt-0 sm:gap-10">
        <img src={redBull} alt="sponsor" className="h-14 sm:h-24" />
        <img src={monstor} alt="sponsor" className="h-14 sm:h-24" />
        <img src={adidas} alt="sponsor" className="h-14 sm:h-24" />
      </div>
    </div>
  );
};

export default Profile;
