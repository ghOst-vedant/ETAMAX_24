import axios from "axios";
import React, { useEffect, useState } from "react";
function EventDetails() {
  const [joined, setJoined] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getEventDetails = async () => {
      const { data } = await axios.get(`/api/e/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(data);
    };
    getEventDetails();
  }, []);
  return (
    <div className="flameBg w-full h-fit py-[30vw] px-[9.5vw] flex flex-col items-center font-montserat sm:p-[10vw]">
      <div className="flex sm:flex-row flex-col gap-[5.2vw] items-center sm:items-start">
        <div className="rounded-[1.5vw] sm:flex-[50%]">
          <img
            src={require("../Assets/other_images/Rectangle 25.png")}
            className="h-[62.5vw] w-fit sm:h-full sm:w-fit"
          ></img>
        </div>
        <div className="sm:flex-[100%] flex flex-col items-center sm:inline">
          <div className="mb-7 flex flex-col text-center gap-[0.8vw] sm:text-left sm:mb-[2vw]">
            <h1 className="text-[6.25vw] font-semibold text-white sm:text-[3vw]">
              ABC - Seminar
            </h1>
            <p className="text-white text-left text-[3.75vw] sm:text-[1.35vw]">
              Lorem ipsum dolor sit amet consectetur. Nunc diam ultricies tempus
              consectetur. Lorem ipsum doloasdr sit amet consectetur. Nunc diam
              ultricies tempus consectetur. Lorem ipsum dolor sit amet
              consectetur. Nunc diam ultricies tempus consectetur.
            </p>
          </div>
          <div className="flex flex-col text-center gap-[0.8vw] mb-10 text-white text-[1.5vw] sm:text-left sm:mb-[2.5vw]">
            <p className="text-[3.75vw] sm:text-[1.35vw]">Seats Left: 50/100</p>
            <p className="text-[3.75vw] sm:text-[1.35vw]">Cost: 100/-</p>
            <p className="text-[3.75vw] sm:text-[1.35vw]">
              Timings: 2:00 to 5:00
            </p>
          </div>
          <div className="mb-10 flex flex-col gap-[6.5vw] sm:gap-[2vw] sm:mb-[2.5vw]">
            <div className="flex justify-between gap-4">
              <input
                type="text"
                placeholder="Roll number"
                className="placeholder:test-center bg-transparent border-white border-[1px] rounded-full flex-[70%] sm:w-[18vw] sm:h-[3vw] sm:text-[1.3vw] px-[3vw] py-[1vw] sm:px-[1.6vw] sm:py-[0.8vw] text-white"
              ></input>
              <button className="px-[3.2vw] py-[0.8vw] flex justify-center items-center border-white border-[1px] rounded-full flex-[30%] font-medium text-white hover:bg-gray-200 hover:text-gray-800 sm:w-[8vw] sm:h-[3vw] sm:text-[1.3vw] sm:px-[2.4vw] sm:py-[0.8vw]">
                Add
              </button>
            </div>
            <div className="p-[3.25vw] flex gap-[3vw] flex-wrap bg-black bg-opacity-[33%] border-[1px] border-white rounded-xl sm:p-[1.3vw] sm:gap-[1vw]">
              <p className="text-[3.75vw] p-[3.75vw] text-white bg-white bg-opacity-[45%] border-[1px] border-white rounded-lg sm:text-[1.3vw] sm:px-[2vw] py-[0.7vw]">
                1021243
              </p>
              <p className="text-[3.75vw] p-[3.75vw] text-white bg-white bg-opacity-[45%] border-[1px] border-white rounded-lg sm:text-[1.3vw] sm:px-[2vw] py-[0.7vw]">
                1021243
              </p>
              <p className="text-[3.75vw] p-[3.75vw] text-white bg-white bg-opacity-[45%] border-[1px] border-white rounded-lg sm:text-[1.3vw] sm:px-[2vw] py-[0.7vw]">
                1021243
              </p>
              <p className="text-[3.75vw] p-[3.75vw] text-white bg-white bg-opacity-[45%] border-[1px] border-white rounded-lg sm:text-[1.3vw] sm:px-[2vw] py-[0.7vw]">
                1021243
              </p>
              <p className="text-[3.75vw] p-[3.75vw] text-white bg-white bg-opacity-[45%] border-[1px] border-white rounded-lg sm:text-[1.3vw] sm:px-[2vw] py-[0.7vw]">
                1021243
              </p>
              <p className="text-[3.75vw] p-[3.75vw] text-white bg-white bg-opacity-[45%] border-[1px] border-white rounded-lg sm:text-[1.3vw] sm:px-[2vw] py-[0.7vw]">
                1021243
              </p>
              <p className="text-[3.75vw] p-[3.75vw] text-white bg-white bg-opacity-[45%] border-[1px] border-white rounded-lg sm:text-[1.3vw] sm:px-[2vw] py-[0.7vw]">
                1021243
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            {joined ? (
              <button
                onClick={() => {
                  setJoined(false);
                }}
                className="px-[6.5vw] py-[1vw] border-white border-[1px] rounded-full bg-white bg-opacity-[50%] font-medium hover:bg-lime-700 hover:text-white sm:px-[2.4vw] sm:py-[0.8vw] sm:text-[1.8vw]"
              >
                Join Whatsapp
              </button>
            ) : (
              <button
                onClick={() => {
                  setJoined(true);
                }}
                className="px-[6.5vw] py-[1vw] border-white border-[1px] rounded-full bg-white bg-opacity-[50%] font-medium hover:bg-lime-700 hover:text-white sm:px-[4vw] sm:py-[0.8vw] sm:text-[1.8vw]"
              >
                Join
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
