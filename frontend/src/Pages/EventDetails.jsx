import axios from "axios";
import React, { useEffect, useState } from "react";
function EventDetails() {
  const [registered, setRegistered] = useState(false);
  const token = localStorage.getItem("token");
  const eventId = localStorage.getItem("eventId");
  const [event, setEvent] = useState();
  const [members, setMembers] = useState([]);
  const [inputMember, setInputMember] = useState("");
  const [teamName, setTeamName] = useState("");
  const dayReverseMapping = {
    1: "14th March",
    2: "15th March",
    3: "16th March",
  };

  useEffect(() => {
    const getEventDetails = async () => {
      const {
        data: { event },
      } = await axios.get(`/api/e/${eventId}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setEvent(event);
    };
    eventId && getEventDetails();
  }, [eventId, token]);

  const addMember = () => {
    //add members here
    if (!inputMember.trim().length) {
      alert("Enter a valid number");
    } else {
      setMembers(() => [...members, inputMember]);
      setInputMember("");
    }
  };

  const removeMember = (e) => {
    setMembers(() => members.filter((m) => m !== e.target.id));
  };

  const eventRegister = async () => {
    try {
      const headers = {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      };
      const body = {
        event_code: eventId,
        team_name: teamName,
        members: members,
      };
      // console.log(body);
      if (!teamName) {
        await axios.post(
          `/api/e/register/`,
          { event_code: eventId },
          { headers }
        );
      } else {
        await axios.post(`/api/e/register/`, { body }, { headers });
      }
      // Successful login logic (e.g., save token, redirect)
      setTeamName("");
      setMembers([]);
      alert("Registered, Go to Profile page to checkOut");
      setRegistered(true);
    } catch (error) {
      if (error.response.data.detail) {
        alert(error.response.data.detail); // Show error message in alert
        setRegistered(true);
      } else {
        // console.log(error); // Fallback error message
      }
    }
  };

  return (
    <div className="flameBg w-full h-fit py-[30vw] px-[9.5vw] flex flex-col items-center font-montserat sm:p-[10vw]">
      <div className="flex flex-col gap-[5.2vw] items-center sm:items-start">
        <div className="rounded-[1.5vw] sm:mx-auto">
          <img
            src={event?.image_googledrive}
            className="w-[300px] sm:w-[500px] mx-auto"
            alt="eventimage"
          ></img>
        </div>
        <div className="sm:flex-[100%] flex flex-col items-center sm:inline">
          <div className="mb-7 flex flex-col text-center gap-[0.8vw] sm:text-left sm:mb-[2vw]">
            <div className="flex flex-col gap-[4vw] sm:gap-[2vw]">
              <div>
                <h1 className="text-[6.25vw] font-semibold text-white sm:text-[3vw]">
                  {event?.title}
                </h1>
                <p className="text-white text-justify text-[3.75vw] sm:text-[1.35vw]">
                  {event?.description}
                </p>
              </div>
              {event?.event_rules !== "null" && (
                <div>
                  <p className="text-[4.5vw] font-medium text-white sm:text-[2.25vw]">
                    Event Rules:
                  </p>

                  <p className="text-white text-justify text-[3.75vw] sm:text-[1.35vw]">
                    {event?.event_rules}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col text-center gap-[0.8vw] mb-10 text-white text-[1.5vw] sm:text-left sm:mb-[2.5vw]">
            <p className="text-[3.75vw] sm:text-[1.35vw]">
              Date : {dayReverseMapping[event?.day]}
            </p>
            <p className="text-[3.75vw] sm:text-[1.35vw]">
              Seats Left: {event?.seats} / {event?.max_seats}
            </p>
            <p className="text-[3.75vw] sm:text-[1.35vw]">
              Team size: {event?.team_size}
            </p>
            <p className="text-[3.75vw] sm:text-[1.35vw]">
              Cost: {event?.entry_fee} /-
            </p>
            <p className="text-[3.75vw] sm:text-[1.35vw]">
              Pize: {event?.prize_money}
            </p>
            <p className="text-[3.75vw] sm:text-[1.35vw]">
              Timings: {event?.start} to {event?.end}
            </p>
          </div>
          {!registered && event?.team_size > 1 && (
            <div className="mb-10 flex flex-col gap-[6.5vw] sm:gap-[2vw] sm:mb-[2.5vw] sm:w-[60%]">
              <div className="flex justify-between gap-4">
                <input
                  type="text"
                  placeholder="Roll number"
                  value={inputMember}
                  id="inputMember"
                  className="bg-transparent border-white border-2 rounded-full flex-[70%] sm:w-[18vw] sm:h-[3vw] sm:text-[1.3vw] px-[3vw] py-[1vw] sm:px-[1.6vw] sm:py-[0.8vw] text-white outline-none"
                  onChange={(e) => {
                    setInputMember(e.target.value);
                  }}
                ></input>
                <button
                  className="px-[3.2vw] py-[0.8vw] flex justify-center items-center border-white border-2 rounded-full flex-[30%] font-normal text-white hover:bg-gray-200 hover:text-gray-800 sm:w-[8vw] sm:h-[3vw] sm:text-[1.3vw] sm:px-[2.4vw] sm:py-[0.8vw]"
                  onClick={addMember}
                >
                  Add
                </button>
              </div>
              <p className="text-white text-base sm:text-lg">
                (The one registering does not have to put their roll number.)
              </p>
              <span className="text-white sm:text-xl text-lg">
                Team Members :{" "}
              </span>
              <div className="p-[3.25vw] flex gap-[3vw] flex-wrap bg-black bg-opacity-[33%] border-[1px] border-white rounded-xl sm:p-[1.3vw] sm:gap-[1vw]">
                {members.map((member, index) => (
                  <p
                    className="text-[3.75vw] p-[3.75vw] text-white bg-white bg-opacity-[45%] border-[1px] border-white rounded-lg sm:text-[1.3vw] sm:px-[2vw] py-[0.7vw] cursor-pointer"
                    key={member}
                    id={member}
                    onClick={removeMember}
                  >
                    {member}
                  </p>
                ))}
              </div>
              <input
                type="text"
                placeholder="Team Name"
                value={teamName}
                id="teamName"
                className="bg-transparent border-white border-2 rounded-full flex-[70%] sm:w-[18vw] sm:h-[3vw] sm:text-[1.3vw] px-[3vw] py-[1vw] sm:px-[1.6vw] sm:py-[0.8vw] text-white outline-none"
                onChange={(e) => {
                  setTeamName(e.target.value);
                }}
              ></input>
            </div>
          )}
          <div className="flex flex-col sm:flex-row">
            {registered ? (
              <button
                onClick={() => {}}
                className="px-[6.5vw] py-[1vw] border-white border-[1px] rounded-full bg-gray-800 text-white font-medium  sm:px-4 sm:py-2 sm:text-xl"
              >
                Cannot register
              </button>
            ) : (
              <button
                onClick={eventRegister}
                className="px-[6.5vw] py-[1vw] border-white border-[1px] rounded-full bg-white bg-opacity-[50%] font-medium hover:bg-lime-700 hover:text-white sm:px-8 sm:py-2 sm:text-xl"
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
