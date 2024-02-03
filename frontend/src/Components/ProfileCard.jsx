import React from 'react'
import profile_card_bg from "../Assets/Common_images/profile_card_event.png"


const ProfileCard = () => {
    return (
        <div className='flex bg-white rounded-3xl gap-3'>
            <img src={profile_card_bg} alt="event_image" className='w-40 rounded-3xl' />
            <div className='montserat flex flex-col justify-center'>
                <h2 className='font-semibold text-lg'>UI/UX competition</h2>
                <p className='font-medium'>
                    {/* Verification status (Pending/paid) */}
                    Paid
                </p>
            </div>
        </div>
    )
}

export default ProfileCard
