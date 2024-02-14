import React from 'react';
import Coverflow from 'react-coverflow';
import image1 from "../Assets/other_images/Rectangle 62.png";
import image2 from "../Assets/other_images/Rectangle 64.png";
import image3 from "../Assets/other_images/Rectangle 79.png";
import image4 from "../Assets/other_images/Rectangle 81.png";
import image5 from "../Assets/other_images/Rectangle 80.png";

const EventCard = () => {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ];

    const handleClick = (index) => {

    };

    return (
        <Coverflow
            width={350}
            height={450}
            displayQuantityOfSide={2}
            navigation={false}
            enableScroll={true}
            clickable={true}
            active={0}
            swipe
            loop
            infiniteScroll={true}
            rotation={100}
        // className="overflow-hidden"
        >
            {images.map((imageUrl, index) => (
                <div
                    key={index}
                    onClick={() => handleClick(index)}
                    onKeyDown={() => handleClick(index)}
                    role="menuitem"
                    tabIndex="0"
                    className="rounded-3xl"
                >
                    <img
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                    // className="object-cover w-full h-full"
                    />
                </div>
            ))}
        </Coverflow>
    );
}

export default EventCard;
