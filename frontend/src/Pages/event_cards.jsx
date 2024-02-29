import React, { useState, useEffect } from 'react';
import EventCard from "../Components/EventCard"; 
import MobileEventCard from "../Components/MobileEventCard"; 
import redBull from "../Assets/Common_images/redBull.png";
import monstor from "../Assets/Common_images/monstor.png";
import adidas from "../Assets/Common_images/adidas.png";

const Event = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flameBg'>
            <div className='flex flex-wrap justify-center py-24 gap-10 sm:py-36 sm:gap-12'>
                <img src={redBull} alt="sponsor" className="h-12 sm:h-24" />
                <img src={monstor} alt="sponsor" className="h-12 sm:h-24" />
                <img src={adidas} alt="sponsor" className="h-12 sm:h-24" />
            </div>
            
            <div className='flex flex-col  gap-10 sm:items-center sm:py-12 sm:gap-32'>
                <div className='flex flex-col text-white text-center px-6 gap-6 sm:w-[70%]'>
                    <h2 className='font-cinzel text-2xl font-bold sm:text-5xl'>EVENTS</h2>
                </div>
            </div>
            
            <div className='flex flex-wrap justify-center py-14 gap-12 sm:py-10 sm:gap-12'>
                <h2 className='font-montserat text-white sm:text-3xl'>DAY 1</h2>
                <h2 className='font-montserat text-white sm:text-3xl'>DAY 2</h2>
                <h2 className='font-montserat text-white sm:text-3xl'>DAY 3</h2>
               
            </div>
            
            <div className='flex flex-row py-8  sm:py-16 sm:gap-5'>
                <div className='flex text-white px-20 mx-auto sm:px-35 sm:mx-40 sm:w-[70%]'>
                    <h2 className='font-cinzel text-2xl font-bold sm:text-5xl'>CULTURAL</h2>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="py- 4 h-5 sm:h-10 sm:w-10 w-6 text-white sm:ml-6" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l7 7-7 7" />
                </svg>
            
            </div>
            
            
            {isMobile ? <MobileEventCard /> : <EventCard />}
            
            
            <div className='flex flex-row py-14 sm:items-center sm:py-16 sm:gap-32'>
                <div className='flex text-white px-20 mx-auto sm:w-[70%]'>
                    <h2 className='font-cinzel text-2xl font-bold sm:text-5xl'>TECHNICAL</h2>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="py- 4 h-5 sm:h-6 w-6 text-white" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l7 7-7 7" />
                </svg>
            
            </div>
            
         
            {isMobile ? <MobileEventCard /> : <EventCard />}
            
            <div className='flex flex-row py-14 sm:items-center sm:py-16 sm:gap-32'>
                <div className='flex text-white px-20 mx-auto sm:w-[70%]'>
                    <h2 className='font-cinzel text-2xl font-bold sm:text-5xl'>SEMINAR</h2>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="py- 4 h-5 sm:h-6 w-6 text-white" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l7 7-7 7" />
                </svg>
            
            </div>
            
            {isMobile ? <MobileEventCard /> : <EventCard />}
        </div>
    );
}

export default Event;
