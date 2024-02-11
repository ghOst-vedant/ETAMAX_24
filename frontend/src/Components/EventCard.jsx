import React, { useEffect, useRef } from 'react';
import image1 from "../Assets/other_images/Rectangle 62.png";
import image2 from "../Assets/other_images/Rectangle 64.png";
import image3 from "../Assets/other_images/Rectangle 79.png";
import image4 from "../Assets/other_images/Rectangle 81.png";
import image5 from "../Assets/other_images/Rectangle 80.png";
import Swiper from 'swiper/swiper-bundle'; 
import 'swiper/swiper-bundle.css';

const EventCard = () => {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ];

    const swiperRef = useRef(null);

    useEffect(() => {
        swiperRef.current = new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 30, 
            effect: "coverflow",
            coverflowEffect: {
                rotate: -20,
                depth: 100,
                stretch: 20,
                modifier: 1,
                scale: 1,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        return () => {
            if (swiperRef.current && swiperRef.current.destroy) {
                swiperRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="swiper-container" style={{ background: 'transparent' }}> 
            <div className="swiper-wrapper" style={{ paddingLeft: '0px', paddingRight: '20px' }}> 
                {images.map((imageUrl, index) => (
                    <div key={index} className="swiper-slide">
                        <img src={imageUrl} alt={`image-${index}`} style={{ width: '400%', height: '400px' }} /> 
                    </div>
                ))}
            </div>
            <div className="swiper-pagination" style={{ display: 'none' }}></div> 
            <div className="swiper-button-next"></div>
        </div>
    );
}

export default EventCard;
