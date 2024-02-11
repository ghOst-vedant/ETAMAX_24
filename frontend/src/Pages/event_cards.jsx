import React from 'react';
import EventCard from "../Components/EventCard"; 
import redBull from "../Assets/Common_images/redBull.png";
import monstor from "../Assets/Common_images/monstor.png";
import adidas from "../Assets/Common_images/adidas.png";

const Event = () => {
    return (
        <div className='flameBg'>
            <div className='flex flex-wrap justify-center sm:py-36  sm:gap-12'>
                <img src={redBull} alt="sponsor" className="h-14 sm:h-24" />
                <img src={monstor} alt="sponsor" className="h-14 sm:h-24" />
                <img src={adidas} alt="sponsor" className="h-14 sm:h-24" />
            </div>
            <div className='  flex flex-col py-24 gap-10 sm:items-center sm:py-16 sm:gap-32'>
                <div className='flex flex-col text-white text-center px-6 gap-6 sm:w-[70%]'>
                    <h2 className='font-cinzel text-4xl font-bold sm:text-5xl'>EVENTS</h2>
                </div>
            </div>
            <div className='flex flex-wrap justify-center sm:py-6  sm:gap-12'>
            <h2 className='font-montserat text-white  sm:text-3xl'>DAY 1</h2>
            <h2 className='font-montserat text-white  sm:text-3xl'>DAY 2</h2>
            <h2 className='font-montserat text-white  sm:text-3xl'>DAY 3</h2>
                
            </div>

            <div className='  flex flex-col py-24 gap-10 sm:items-center sm:py-16 sm:gap-32'>
                <div className='flex flex-col text-white text-center px-6 gap-6 sm:w-[70%]'>
                    <h2 className='font-cinzel text-4xl font-bold sm:text-5xl'>CULTURAL</h2>
                </div>
            </div>
            <div className=" py-12">

            <div className="container mx-auto mb-8 bg-transparent">
                    <EventCard />
                </div> 

            <div className='  flex flex-col py-24 gap-10 sm:items-center sm:py-20 sm:gap-32'>
                <div className='flex flex-col text-white text-center px-6 gap-6 sm:w-[70%]'>
                    <h2 className='font-cinzel text-4xl font-bold sm:text-5xl'>TECHNICAL</h2>
                </div>
            </div>
            <div className="container mx-auto mb-8">
                    <EventCard />
                </div> 

            <div className=' flex flex-col py-24 gap-10 sm:items-center sm:py-20 sm:gap-32'>
                <div className='flex flex-col text-white text-center px-6 gap-6 sm:w-[70%]'>
                    <h2 className='font-cinzel text-4xl font-bold sm:text-5xl'>SEMINAR</h2>
                </div>
            </div>
            <div className="container mx-auto mb-8">
                    <EventCard />
                </div> 
            </div>
        </div>
    );
}

export default Event;
