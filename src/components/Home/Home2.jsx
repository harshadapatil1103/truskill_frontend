"use client";
import { useState } from "react";
import Link from "next/link"
function Home2() {

  const [showVideo, setShowVideo] = useState(false);

  const handlePlayButtonClick = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };
  return (
    <div className="flex justify-center items-center  md:px-8 lg:px-10 w-full mt-6 lg:mt-0 ">

    <div className="flex flex-col lg:flex-row w-full  shadow-lg rounded-lg overflow-hidden ">
    
      <div className="w-full lg:w-1/2 px-2 pt-4 pb-2 bg-white">
        <p className="text-gray-600 text-lg">
          Know your Readiness test
        </p>
        <h2 className="text-xl font-medium mb-3 mt-3">Benchmark your skills against Top Talent </h2>
        <p className="text-sm font-normal text-gray-600">
        Want to know where you stand? Take our Know Yourself Test (KYS test) and compare your skills with top industrialists and professionals.
        </p>
      </div>
    
      <div className="w-full lg:w-1/4 flex flex-col justify-center items-center p-4">
        <Link href="*" className=" px-2 py-2  lg:px-4 lg:py-2 bg-[#3b9b72] text-white rounded-full text-sm mb-4 lg:text-xl">Test Yourself Now</Link>
        <div className="lg:px-4 lg:py-2 bg-white text-black rounded flex space-x-2 cursor-pointer"  onClick={handlePlayButtonClick}>
        <img src={showVideo ? "Home/pausebutton.png" :"Home/playbutton.png"}></img>
          <p className="text-sm">Learn About<br></br>
          KYR in 2 mins</p>
        </div>
      </div>
    
      <div className="w-full lg:w-1/4 lg:p-8 bg-white">
        <img src="/Home/kys.jpg" alt="Detailed user Progess Report illustration" className="w-full h-auto " />
      </div>
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 w-11/12 max-w-md">
            <button
              className="text-red-500 font-bold float-right"
              onClick={closeVideo}
            >
              Close
            </button>
            <div className="mt-4">
            <video
                width="100%"
                controls
                autoPlay
              >
                <source src="" type="video/mp4" />
                
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    
    </div>
    </div>
  )
}

export default Home2
