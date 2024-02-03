import React from "react";
import Navbar from "../Components/Navbar"
import Profile_card from "../Components/Profile_card";
import male from "../Assets/other_images/boy.png";
import female from "../Assets/other_images/girl.png";


const Profile = () => {
    return (
        <div className=" bg-black flameBg pb-1">
            <Navbar />
            <div className="flex items-center gap-6 my-8 px-6">
                <img src={male} alt="person image" className="rounded-full w-28 h-28 border-2 border-white/80" />
                <span className="montserat text-white">
                    <h2 className="text-2xl font-semibold ">Aniket sahu</h2>
                    <h3 className="font-medium text-lg">1021237</h3>
                </span>
            </div>
            <div className="text-white montserat px-6 my-8">
                <h2 className="text-2xl font-semibold">DASHBOARD</h2>
                <div className="flex flex-col mt-2">
                    <span>Enrolled</span>
                    <span>Paid</span>
                    <span>Unpaid</span>
                </div>
            </div>
            <div className="px-6 flex flex-col lg:flex-row gap-6">
                <Profile_card />
                <Profile_card />
                <Profile_card />
            </div>
        </div>
    );
};

export default Profile;
