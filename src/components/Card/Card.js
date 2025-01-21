"use client";

import Link from "next/link";
import { useState } from "react";
const Card = ({ cardItem }) => {

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle the description view
  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };
  return (
    <div className="card bg-white p-4 rounded-2xl shadow-md  hover:shadow-lg transition-shadow duration-300">
      {/* Card Image */}
      {cardItem.image && (
        <img
          src={`https://strapi.truskill.in${cardItem.image.url}`}
          alt={cardItem.heading}
          className="w-full h-40 object-cover rounded-t-2xl p-2"
        />
      )}
        {cardItem.category && (
          <p className="text-gray-700 mt-2 text-[14px]">
            {cardItem.category}
          </p>
        )}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 text-[24px]">{cardItem.heading}</h3>

        {/* Additional Fields */}
    
     
       {cardItem.rating && (
          <div className="flex items-center mt-2">
            {renderStars(Math.round(cardItem.rating))} {/* Convert rating to whole number */}
          </div>
        )}
       

       <div className="flex items-center mt-1">
       <img src="/images/Card/Currency.png" className="h-5 w-5"></img>
          <p className="text-gray-700 text-[14px]">
            {cardItem.price}
          </p>
      
        </div>

              {cardItem.description && (
          <p className="text-gray-700 mt-2 text-[14px]">
            {showFullDescription
              ? cardItem.description // Show full description
              : `${cardItem.description.slice(0, 50)}...`} {/* Show truncated description */}
           
          </p>
        )}

        {/* Link to Course Page */}
        {cardItem.slug && (
          <Link
            href={`/course-pages/${cardItem.slug}`}
            className="text-[16px] mt-4 inline-block bg-[#3b9b72] text-white py-2 px-4 rounded-md hover:bg-[#0e362a] transition-colors duration-300"
          >
            View Course
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
