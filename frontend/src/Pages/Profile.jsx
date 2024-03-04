import React from "react";
import ProfileCard from "../Components/ProfileCard";
import male from "../Assets/other_images/boy.png";
// import female from "../Assets/other_images/girl.png";
import redBull from "../Assets/Common_images/redBull.png";
import monstor from "../Assets/Common_images/monstor.png";
import adidas from "../Assets/Common_images/adidas.png";
import ListIcon from "@mui/icons-material/List";
import VerifiedIcon from "@mui/icons-material/Verified";
import BlockIcon from "@mui/icons-material/Block";
import axios from "axios";

const Profile = () => {
  const name = localStorage.getItem("name");
  const roll = localStorage.getItem("roll_no");
  return (
    <div className=" bg-black flameBg pb-10 box-border flex flex-col lg:items-center lg:gap-20 overflow-hidden">
      <div className="lg:flex lg:mt-36 lg:w-full justify-evenly">
        <div className="flex items-center gap-6 pt-24 px-6 lg:pt-0">
          <img
            src={male}
            alt="person_image"
            className="rounded-full w-28 lg:w-60 border-2 lg:border-4 border-white/80"
          />
          <span className="montserat text-white flex flex-col gap-2">
            <h2 className="text-2xl lg:text-5xl font-semibold ">{name}</h2>
            <h3 className="font-medium text-lg lg:text-3xl lg:font-normal">
              {roll}
            </h3>
          </span>
        </div>
        <div className="text-white montserat px-6 my-8 lg:w-[30%]">
          <h2 className="text-2xl font-semibold pl-2 lg:text-3xl">DASHBOARD</h2>
          <table className="profile_table mt-2 lg:w-full">
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
      <div className="px-6 flex flex-col lg:flex-row gap-6 lg:gap-x-20 lg:gap-y-10 lg:flex-wrap lg:justify-center items-center">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
      <div className="flex flex-col items-center mt-6 gap-4 px-6">
        <h2 className="text-xl font-semibold pl-2 text-white lg:text-3xl lg:pl-0">
          CHECKOUT
        </h2>
        <form
          action="submit"
          className="flex flex-col border-2 border-white rounded-2xl bg-black/20 p-4 gap-4 text-white w-[80%] sm:w-[30%] lg:w-[30%] lg:flex-row"
        >
          <div className="bg-white/30 border-2 border-white rounded-full flex p-1 gap-2 lg:w-[1300px]">
            <img
              src={male}
              alt="icon"
              className="w-[20%] lg:w-[18%] rounded-full"
            />
            <input
              type="text"
              name="rollno"
              id="rollno"
              placeholder="Roll no"
              className="text-xl outline-none w-[80%] bg-transparent rounded-r-full"
            />
          </div>
          <button
            type="submit"
            className="bg-white/30 w-fit m-auto px-8 py-2 text-lg rounded-full border-2 border-white"
          >
            Checkout
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-4 mt-10 mx-auto lg:mt-0 lg:gap-10">
        <img src={redBull} alt="sponsor" className="h-14 lg:h-24" />
        <img src={monstor} alt="sponsor" className="h-14 lg:h-24" />
        <img src={adidas} alt="sponsor" className="h-14 lg:h-24" />
      </div>
    </div>
  );
};

export default Profile;
