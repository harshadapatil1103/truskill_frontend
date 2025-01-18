'use client';
import { useState } from 'react';
import React from 'react'
import Link from 'next/link'
function Kys1() {

    const [showVideo, setShowVideo] = useState(false);
  
    const handlePlayButtonClick = () => {
      setShowVideo(true);
    };
  
    const closeVideo = () => {
      setShowVideo(false);
    };
  return (
<div>
<div className='lg:flex py-5 h-auto mt-16 mb-8 justify-between'>

<div className="w-full lg:w-1/2 p-5 bg-white">
  <p className="text-[#5faa89] text-[14px] md:text-[16px]">
  Unlock Your Readiness Potential
  </p>
  <h2 className="text-[40px] md:text-5xl font-semibold my-6 font-poppins">Benchmark Yourself Against Top Company Requirement.
  </h2>
  <p className="text-[14px] md:text-[16px] text-[#7A7A7A]">
  Discover your readiness for recruitment at leading organizations with our exclusive Know Your Readiness Test (KYR). Designed specifically to evaluate key competencies crucial for success in the hiring processes of top companies, this test provides you with actionable insights.
  </p>
  <div className='mx-10 lg:mx-0 lg:flex mt-5 md:justify-start items-center p-4 space-y-4 lg:space-y-0 '>
  <Link href="*" className=" px-2 py-2  md:px-4 md:py-2 bg-[#5faa89] text-white rounded-full mb-8 md:mb-0 text-[16px]">Test Yourself Now</Link>
  <div className=" lg:px-4 py-2 bg-white text-black rounded flex space-x-2 mt-9 cursor-pointer"  onClick={handlePlayButtonClick}>
          <img src={showVideo ? "Home/pausebutton.png" :"Home/playbutton.png"}></img>
          <p className='text-[14px]'>Learn About<br></br>
          KYR in 2 mins</p>
        </div>
  </div>
 
</div>

<div className="w-full lg:w-1/2 p-3 lg:p-8 bg-white">
  <img src="/images/kys/kys1.png" alt="Image" className="w-full h-auto rounded-lg" />
</div>

{showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 w-11/12 max-w-md">
            <button
              className="text-[#3b9b72] font-bold float-right"
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
                <source src="/videos/dummy.mp4" type="video/mp4" />
                
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

export default Kys1