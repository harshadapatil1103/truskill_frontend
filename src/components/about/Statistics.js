'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function Statistics() {
  const images = [
    '/images/about/1.png',
    '/images/about/2.png',
    '/images/about/3.png',
    '/images/about/1.png',
    '/images/about/2.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Starting with the first image

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="p-6 bg-white flex flex-col items-center">
      <h1 className="text-[24px] md:text-3xl font-semibold text-center mb-10 text-gray-900 uppercase">
        Statistics
      </h1>
      <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center">
        {/* Left Arrow */}
        <div
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-3xl text-black cursor-pointer hover:opacity-70 transition-opacity md:text-4xl md:left-6"
        >
          <FaChevronLeft />
        </div>

        {/* Image */}
        <div className="w-full">
          <Image
            src={images[currentIndex]}
            alt={`image-${currentIndex}`}
            width={500}
            height={500}
            className="object-cover mx-auto shadow-lg rounded-lg"
          />
        </div>

        {/* Right Arrow */}
        <div
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-3xl text-black cursor-pointer hover:opacity-70 transition-opacity md:text-4xl md:right-6"
        >
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
}
