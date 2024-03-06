import React from 'react'
import navBird from "../Assets/Common_images/navbird.png"
import redBull from "../Assets/Common_images/redBull.png";
import monstor from "../Assets/Common_images/monstor.png";
import adidas from "../Assets/Common_images/adidas.png";

const About = () => {
    const about = {
        etamax: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat sit blanditiis nam voluptas expedita rem mollitia, veritatis alias possimus quod consequatur. Sint, sit. Eligendi deleniti voluptatibus a ipsam aliquid tempora debitis ad, explicabo quae facere! Aliquid, inventore fugit veritatis adipisci corrupti id similique. Odio veniam autem, officia dolores eum, obcaecati quidem possimus iusto explicabo dignissimos deserunt alias corporis dolor quibusdam, quo soluta animi? Adipisci repellendus officia maiores beatae sequi ad nesciunt, veritatis similique. Atque eligendi consequatur voluptas facere suscipit, aut sit nemo, obcaecati, eos quis earum vitae nam excepturi beatae laborum quia corporis labore aspernatur modi nulla sed cumque. Perspiciatis porro odio dicta temporibus magni praesentium, doloremque dolorum ullam! Sit asperiores cumque expedita magnam et repellendus? Laborum soluta laudantium totam voluptate minus corrupti ad perspiciatis itaque, porro error maiores?",
        phoenix: "This year's ETAMAX theme is Phoenix, reflecting commitment to embracing resilience and renewal. The Phoenix Theme is designed to inspire positivity and growth. With vibrant hues symbolizing rebirth, the theme blends fiery oranges and deep reds with cool blues, creating a dynamic and energetic aesthetic."
    }
    return (
        <div className='flameBg bg-black flex flex-col py-24 gap-10 sm:items-center sm:py-36 sm:gap-32'>
            <div className='flex flex-col text-white text-center px-6 gap-6 sm:w-[70%]'>
                <h2 className='font-cinzel text-4xl font-bold sm:text-5xl'>ETAMAX</h2>
                <p className='text-justify sm:text-lg'>{about.etamax}</p>
                <img src={navBird} alt="bird" className='border-2 border-white rounded-xl my-4 sm:my-10 sm:w-[85%] sm:mx-auto' />
                <h2 className='font-cinzel text-4xl font-bold sm:text-5xl'>PHOENIX</h2>
                <p className='text-justify sm:text-lg'>{about.phoenix}</p>
            </div>
            <div className='flex flex-wrap justify-center gap-6 sm:gap-12'>
                {/* sponsors */}
                <img src={redBull} alt="sponsor" className="h-14 sm:h-24" />
                <img src={monstor} alt="sponsor" className="h-14 sm:h-24" />
                <img src={adidas} alt="sponsor" className="h-14 sm:h-24" />
            </div>
        </div>
    )
}

export default About
