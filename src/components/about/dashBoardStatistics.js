'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';

export default function Home() {
  const images = [
    '/images/about/1.png',
    '/images/about/2.png',
    '/images/about/3.png',
    '/images/about/1.png',
    '/images/about/2.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Default middle index

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0', // No padding for a tighter layout
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    beforeChange: (current, next) => {
      setCurrentIndex(next); // Update the current index when the slide changes
    },
    prevArrow: (
      <div className="slick-arrow slick-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 text-3xl text-black cursor-pointer transition-opacity">
        <FaCircleChevronLeft />
      </div>
    ),
    nextArrow: (
      <div className="slick-arrow slick-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-3xl text-gray-700 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <FaCircleChevronRight />
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="p-4 overflow-x-hidden  mb-5 mt-5">
      <h1 className="text-[24px] md:text-3xl font-semibold text-center mb-15 text-gray-800 uppercase">
        Preview of Our Dashboard
      </h1>
      <div className="relative w-full max-w-6xl mx-auto md:mt-24 mb-14 ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`transition-all duration-500 ease-in-out transform mx-4 ${
                  index === currentIndex
                    ? 'scale-125 shadow-xl border-4 border-black'
                    : 'scale-75'
                }`} // Larger scale for center slide, smaller for others
              >
                <Image
                  src={image}
                  alt={`image-${index}`}
                  width={350}
                  height={350}
                  className="max-w-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    
    </div>
  );
}
