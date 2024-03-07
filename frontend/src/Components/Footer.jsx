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
          <Link
            to="https://www.instagram.com/etamax_fcrit?igsh=bDFuaDlnbnpyNXM2"
            target="_blank"
          >
            <InstagramIcon sx={{ fontSize: "2rem", color: "red" }} />
          </Link>

          {/* <LinkedInIcon sx={{ fontSize: "2rem", color: "red" }} /> */}
        </span>
      </div>
      <div className="flex flex-col items-center text-white bg-black py-8 gap-2">
        <span className="font-montserat ">
          Designed by{" "}
          <Link
            to="https://ideaplots.com"
            className="text-[#FF8E00] hover:border-b-2 hover:border-orange-400"
          >
            Ideaplots
          </Link>
        </span>
        <p className="font-montserat text-center px-6">
          Developed by <Link to="https://www.linkedin.com/in/aniket-sahu028">Aniket</Link>, <Link to="https://www.linkedin.com/in/vedant-gaikwad-b2516b226/">Vedant</Link>, <Link to="https://www.linkedin.com/in/md-tahir-s-91b62422b/">Tahir</Link>, <Link to="https://www.linkedin.com/in/sakshi-patil-se/">Sakshi</Link>, <Link to="https://www.linkedin.com/in/kousthubh-yadavalli-a6299a260/">Koustubh</Link>, <Link to="https://www.linkedin.com/in/mathew-alex-8246101b3/">Mathew</Link>, <Link to="https://www.linkedin.com/in/savio-dias-984b45198/">Savio</Link>, <Link to="https://www.linkedin.com/in/jayesh-chaudhari-b1578b14">Jayesh</Link>,
        </p>
      </div>
    </div>
  );
};

export default Footer;
