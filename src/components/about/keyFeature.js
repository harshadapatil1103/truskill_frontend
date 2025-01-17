"use client";

import { useState } from "react";

const features = [
  {
    id: 1,
    title: "Offline + Online Integration",
    description:
      "Transforming Education through Online Integration Thanks to online. integration, reaching out to students in need has never been easier. Providing study materials, conceptualized video lectures, practice sets, and test series can now be done more efficiently and effectively",
  },
  {
    id: 2,
    title: "Assessment and Monitoring",
    description:"Students can assess their knowledge with our testing system that offers assessments at three levels of difficulty easy, moderate, and difficult. The college administration can monitor individual student's coursework and performance"
  },
  {
    id: 3,
    title: "Structured Training Approach",
    description:
      "Our training program is unique and we are proud to share that it has undergone testing and evaluation over the years...",
  },
  {
    id: 4,
    title: "Continuous Assessment Framework",
    description:"Transforming Education through Online Integration Thanks to online integration, reaching out to students in need has never been easier. Providing study materials, conceptualized video lectures, practice sets, and test series can now be done more efficiently and effectively."
  },
  {
    id: 5,
    title: "College-tailored Programme",
    description:"A pre-assessment process is used students different to evaluate based on parameters, identifying areas of the course that require more emphasis. The coursework can be modified based on college guidelines and in- house suggestions for improved learning"
  },
  {
    id: 6,
    title: "Doubt Solving and Support",
    description:"The community section below each video or material allows learners to ask questions, and faculty will respond promptly. The platform is accessible 24/7 from anywhere"
  },
];

const KeyFeatures = () => {
  const [showFullDescriptions, setShowFullDescriptions] = useState({});

  // Function to toggle the description view for a specific feature
  const toggleDescription = (id) => {
    setShowFullDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the specific feature's visibility
    }));
  };

  return (
    <div className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-center text-[24px] md:text-[30px]  font-semibold text-gray-900 mb-12 uppercase">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-[22px] font-bold text-[#3b9b72]">
                  {feature.id.toString().padStart(2, "0")}
                </div>
                <h3 className="ml-4 text-[22px] font-bold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <div className="text-gray-600 mb-4">
                <p className="text-gray-600 mt-2 text-sm text-justify">
                  {showFullDescriptions[feature.id]
                    ? feature.description // Show full description
                    : `${feature.description.slice(0, 70)}...`} {/* Show truncated description */}
                  {feature.description.length > 30 && (
                    <span
                      onClick={() => toggleDescription(feature.id)}
                      className="text-gray-400 cursor-pointer ml-2"
                    >
                      {showFullDescriptions[feature.id] ? "Show Less" : "Read More"}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
