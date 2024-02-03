import React from 'react'
import profile_card_bg from "../Assets/Common_images/profile_card_event.png"


const ProfileCard = () => {
    return (
        <div className='flex bg-white rounded-3xl gap-3 sm:w-[35%]'>
            <img src={profile_card_bg} alt="event_image" className='w-40 rounded-3xl sm:w-64' />
            <div className='montserat flex flex-col justify-center pr-2 sm:w-[50%]'>
                <h2 className='font-semibold text-lg'>UI/UX competition (winner)</h2>
                <p className='font-medium'>
                    {/* Verification status (Pending/paid) */}
                    Paid
                </p>
            </div>
        </div>
    )
}

export default ProfileCard
