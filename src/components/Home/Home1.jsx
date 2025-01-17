import React from 'react'
import Link from 'next/link';

function Home1() {
  return (
    <div>
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-24 lg:mt-20">
        <div className="lg:w-1/2 text-center lg:text-left lg:pl-12 h-1/2">
          <p className="text-lg text-[#A7A7A7] uppercase">Welcome to Truskill Academy </p>
          <h1 className="text-4xl lg:text-5xl font-medium mb-5 mt-5">Where you can grow your skills and empower innovation on your own.

</h1>
          <p className="text-[22px] text-gray-700 font-normal">Our mission is simple: Help you thrive in today’s fast-paced world and stand out with your professional skills.</p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-4 mt-4">
            <Link href="/courses" className="px-2 md:px-4 py-1 md:py-2 bg-[#3b9b72] text-white rounded text-sm lg:text-xl">Explore Courses</Link>
            <Link href="/kys" className="px-2 md:px-4 py-1 md:py-2 text-[#3b9b72] bg-white border border-[#3b9b72] rounded text-sm lg:text-xl">Know Your self</Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mt-2 md:mt-6 lg:mt-0 p-11">
          <img
            src='/Home/Home1.png'
            alt="Description"
            className="w-full h-auto rounded-lg "
          />
        </div>
      </div>
    </div>
   

 


  )
}

export default Home1;
