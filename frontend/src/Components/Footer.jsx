import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" w-[100%] bottom-20  ">
      <div className="  py-8 flex items-center flex-col gap-3">
        <span className=" font-montserat font-semibold lg:text-3xl text-2xl lg:flex  text-center">
          Fr. C. Rodrigues Institute of Technology
          <Link className="pl-1 pb-1" to="https://fcrit.ac.in" target="_blank">
            <LaunchIcon
              sx={{
                ":hover": {
                  color: "red",
                },
              }}
            />
          </Link>
        </span>
        <span className="flex flex-col items-center">
          <p className="font-montserat text-center text-lg px-6">
            Agnel Technical Education Complex, Sector 9-A, Vashi, Navi Mumbai,
          </p>
          <span className="font-montserat">
            Maharashtra, India, Pin - 400703
          </span>
        </span>
        <span className=" flex gap-3 items-center">
          <InstagramIcon sx={{ fontSize: "2rem", color: "red" }} />
          <LinkedInIcon sx={{ fontSize: "2rem", color: "red" }} />
          <YouTubeIcon sx={{ fontSize: "2.25rem", color: "red" }} />
        </span>
      </div>
      <div className="flex flex-col items-center text-white bg-black py-8 gap-2">
        <span className="font-montserat ">
          Designed with ❤️ by{" "}
          <Link
            to="https://ideaplots.com"
            className="text-[#FF8E00] hover:border-b-2 hover:border-orange-400"
          >
            Ideaplots
          </Link>
        </span>
        <span className="font-montserat text-center px-6">
          Developed by Aniket, Vedant, Savio, Jayesh, Koustubh, Alex
        </span>
      </div>
    </div>
  );
};

export default Footer;
