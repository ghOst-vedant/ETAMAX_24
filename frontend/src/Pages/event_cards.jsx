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

    const [day, setDay] = useState(1);

    return (
        <div className='flameBg py-6 pb-20 pt-24 overflow-hidden'>
            <div className='flex flex-wrap justify-center  gap-10 sm:py-36 sm:gap-12 bg-black/30 py-6 backdrop-blur-sm'>
                <img src={redBull} alt="sponsor" className="h-12 sm:h-24" />
                <img src={monstor} alt="sponsor" className="h-12 sm:h-24" />
                <img src={adidas} alt="sponsor" className="h-12 sm:h-24" />
            </div>

            <div className='flex flex-col items-center gap-10'>
                <h2 className='font-cinzel text-4xl font-bold sm:text-5xl mt-16 text-white'>EVENTS</h2>

                <div className='flex flex-wrap justify-center gap-12 sm:py-10 sm:gap-12'>
                    <button className={`font-montserat text-white sm:text-3xl text-xl ${day === 1 && "border-b-2 border-white "}`} onClick={() => { setDay(1) }}>DAY 1</button>
                    <button className={`font-montserat text-white sm:text-3xl text-xl ${day === 2 && "border-b-2 border-white "}`} onClick={() => { setDay(2) }}>DAY 2</button>
                    <button className={`font-montserat text-white sm:text-3xl text-xl ${day === 3 && "border-b-2 border-white "}`} onClick={() => { setDay(3) }}>DAY 3</button>
                </div>

                <div className='flex flex-row sm:py-16 sm:gap-5 pt-4'>
                    <div className='flex text-white px-20 mx-auto sm:px-35 sm:mx-40 sm:w-[70%]'>
                        <h2 className='font-montserat text-3xl font-semibold sm:text-5xl'>CULTURAL</h2>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="py- 4 h-5 sm:h-10 sm:w-10 w-6 text-white sm:ml-6 absolute right-0 mr-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l7 7-7 7" />
                    </svg>
                </div>

               
                {isMobile ? <MobileEventCard /> : <EventCard />}


                <div className='flex flex-row pt-6 sm:items-center sm:py-16 sm:gap-32'>
                    <div className='flex text-white px-20 mx-auto sm:w-[70%]'>
                        <h2 className='font-montserat text-3xl font-semibold sm:text-5xl'>TECHNICAL</h2>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="py- 4 h-5 sm:h-6 w-6 text-white absolute right-0 mr-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l7 7-7 7" />
                    </svg>

                </div>

               
                {isMobile ? <MobileEventCard /> : <EventCard />}

                <div className='flex flex-row pt-6 sm:items-center sm:py-16 sm:gap-32'>
                    <div className='flex text-white px-20 mx-auto sm:w-[70%]'>
                        <h2 className='font-montserat text-3xl font-semibold sm:text-5xl'>SEMINAR</h2>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="py- 4 h-5 sm:h-6 w-6 text-white absolute right-0 mr-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l7 7-7 7" />
                    </svg>

                </div>

               
                {isMobile ? <MobileEventCard /> : <EventCard />}
            </div>
        </div>
    );
}

export default Event;
