import React from 'react'
import ideaplots from '../Assets/Sponsors/ideaplots.png'
import ktm from '../Assets/Sponsors/ktm.png'
import redbull from '../Assets/Sponsors/redBull.png'
import uconnect from '../Assets/Sponsors/Uconnect.png'

const Sponsors = () => {
    const Sponsors = [
        { image: ktm },
        { image: redbull },
        { image: uconnect },
        { image: ideaplots },
    ]

    return (
        <div className='slider bg-black/30 h-[150px] overflow-hidden flex py-20 mt-10 sm:w-full'>
            <div className='slide-track flex items-center h-full w-fit my-auto'>
                {
                    Sponsors.map((sponsor, index) => (
                        <div className='slide h-[100px] w-[250px] px-10 flex items-center justify-center' key={index}>
                            <img src={sponsor.image} alt="sponsors" className='h-[100px] w-fit' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sponsors
