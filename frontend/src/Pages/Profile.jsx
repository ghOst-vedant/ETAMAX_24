import React, { useEffect, useState } from "react";
import ProfileCard from "../Components/ProfileCard";
import male from "../Assets/other_images/boy.png";
import female from "../Assets/other_images/girl.png";
import ListIcon from "@mui/icons-material/List";
import VerifiedIcon from "@mui/icons-material/Verified";
import BlockIcon from "@mui/icons-material/Block";
import axios from "axios";

const Profile = () => {
  const token = localStorage.getItem("token");
  const [Roll, setRoll] = useState("");
  const [participations, setParticipations] = useState([]);
  const name = localStorage.getItem("name");
  const roll = localStorage.getItem("roll_no");
  const gender = localStorage.getItem("gender");
  const [criteria, setCriteria] = useState("");
  const [paid, setPaid] = useState();
  const [unpaid, setUnpaid] = useState();
  const [paidTotal, setPaidTotal] = useState(0);
  const [unpaidTotal, setUnpaidTotal] = useState(0);

  const handleRollCheck = () => {
    const isUser = Boolean(Roll === roll);
    if (isUser) {
      return true;
    } else {
      alert("Error, Check Roll Number.");
      return false;
    }
  };

  useEffect(() => {
    const getFeaturedEvents = async () => {
      const {
        data: { user },
      } = await axios.get(`/api/u/me/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setParticipations(user.participations);
      // console.log(user.participations[0].captain);
    };

    const getCriteria = async () => {
      try {
        await axios.get("/api/u/criteriacheck/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setCriteria(true);
      } catch (e) {
        setCriteria(false);
      }
    };

    const getPaid = async () => {
      try {
        const { data } = await axios.get("/api/u/paid-unpaid/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setPaid(() => data?.paid_participations);
        setUnpaid(() => data?.unpaid_participations);
        setPaidTotal(() => {
          let total = 0;
          data?.paid_participations.forEach((el) => {
            total += el.event.entry_fee;
          });
          return total;
        });
        setUnpaidTotal(() => {
          let total = 0;
          data?.unpaid_participations.forEach((el) => {
            total += el.event.entry_fee;
          });
          return total;
        });
      } catch (e) {
        alert("Unable to process request");
        console.log(e);
      }
    };
    getFeaturedEvents();
    getCriteria();
    getPaid();
  }, [token]);

  const handleCheckOut = async (e) => {
    try {
      e.preventDefault();
      if (
        window.confirm(
          "Do you want to checkout, You cannot Unregister after checking out!"
        ) &&
        handleRollCheck()
      ) {
        const headers = {
          Authorization: `token ${token}`,
          "Content-Type": "application/json",
        };
        axios.post(
          `/api/u/checkout/`,
          {
            participations: participations,
            upi_transaction_id: "VADE0CB248932",
          },
          {
            headers,
          }
        );
        alert("Checked Out successfully");
      }
    } catch (error) {
      if (error.response) {
        console.log(error); // Show error message in alert
      } else {
        alert(error); // Fallback error message
      }
    }
  };

  return (
    <div className=" bg-black flameBg pb-10 box-border flex flex-col lg:items-center lg:gap-20 overflow-hidden">
      <div className="lg:flex lg:mt-36 lg:w-full justify-evenly">
        <div className="flex items-center gap-6 pt-24 px-6 lg:pt-0">
          <img
            src={gender === "Male" ? male : female}
            alt="person_image"
            className="rounded-full w-28 lg:w-60 border-2 lg:border-4 border-white/80"
          />
          <span className="montserat text-white flex flex-col gap-2">
            <h2 className="text-2xl lg:text-5xl font-semibold ">{name}</h2>
            <h3 className="font-medium text-lg lg:text-3xl lg:font-normal">
              {roll}
            </h3>
            {criteria ? (
              <h3
                title="Make sure you checkout all events and get them verified"
                className="font-medium text-md lg:text-xl lg:font-normal bg-green-500 w-fit p-2 lg:p-3 rounded-lg"
              >
                Criteria: Fulfilled
              </h3>
            ) : (
              <h3 className="font-medium text-lg lg:text-xl lg:font-normal bg-red-500 w-fit p-3 rounded-lg">
                Criteria: Not Fulfilled
              </h3>
            )}
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
              <td>{paid?.length + unpaid?.length || 0}</td>
              <td>{paidTotal + unpaidTotal} /-</td>
            </tr>
            <tr>
              <td>
                <VerifiedIcon />
              </td>
              <td>Paid</td>
              <td>{paid?.length || 0}</td>
              <td>{paidTotal} /-</td>
            </tr>
            <tr>
              <td>
                <BlockIcon />
              </td>
              <td>Unpaid</td>
              <td>{unpaid?.length || 0}</td>
              <td>{unpaidTotal} /-</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="sm:w-[80vw] px-6 flex flex-col lg:flex-row gap-6 lg:gap-x-20 lg:gap-y-10 lg:flex-wrap lg:justify-center items-center">
        {participations.map((participation) => (
          <ProfileCard key={participation.part_id} card={participation} />
        ))}
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
              src={gender === "Male" ? male : female}
              alt="icon"
              className="w-[20%] lg:w-[18%] rounded-full"
            />
            <input
              type="text"
              value={Roll}
              onChange={(e) => setRoll(e.target.value)}
              name="rollno"
              id="rollno"
              placeholder="Roll no"
              className="text-xl outline-none border-none w-[80%] bg-transparent rounded-r-full"
            />
          </div>
          <button
            className="bg-white/30 w-fit m-auto px-8 py-2 text-lg rounded-full border-2 border-white"
            onClick={handleCheckOut}
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
