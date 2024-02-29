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
        image5,
        image1,
        image2,
        image3,
        image4,
        image5
    ];

    const handleClick = (index) => {
        
    };

    return (
        <div className="relative">
            <Coverflow
                width={window.innerWidth}
                height={window.innerHeight}
                displayQuantityOfSide={2}
                navigation={false}
                enableScroll={true}
                clickable={true}
                active={0}
                swipe
                loop={false} 
                infiniteScroll={false} 
                rotation={0} 
                media={{
                    '@media (max-width: 768px)': {
                        width: '100%',
                        height: 'auto',
                        displayQuantityOfSide: 1,
                    },
                }}
                style={{ backgroundColor: 'transparent' }} 
            >
                {images.map((imageUrl, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        onKeyDown={() => handleClick(index)}
                        role="menuitem"
                        tabIndex="0"
                        className="coverflow-item w-full h-full"
                    >
                        <img
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Coverflow>
        </div>
    );
}

export default EventCard;
