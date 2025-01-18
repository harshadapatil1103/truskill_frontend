import React from 'react'

const main = () => {
    return (
<div className="min-h-screen bg-[#C3F2E5] bg-hero-pattern bg-cover bg-blend-lighten mt-20 w-full">    <main className=" w-full md:max-w-4xl md:mx-auto px-4 py-12 ">
      <div className="text-center space-y-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-wider font-work font-regular ">ABOUT US</p>
          <div className="flex justify-center">
            <div className="w-12 h-px bg-gray-400 my-4"></div>
          </div>
        </div>
        <h1 className="text-[40px]  text-gray-800  font-poppins font-semibold">

          <span>TruSkill Academy is your</span>
          <span className="text-[#3b9b72] font-poppins font-semibold"> valuable partner for Campus Placements</span>
         
         
          <span className="text-gray-800 font-poppins font-semibold" > Training.</span>
          
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-[14px]">
        We transform student potential into professional excellence by providing the best campus placement training programs and skill enhancements along with professional career guidance.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-4">
            <h2 className="text-[30px] font-large  text-gray-800 font-poppins font-semibold">Mission</h2>
            <p className="text-gray-600 leading-relaxed text-[14px]">
            Our mission is to cultivate problem-solving abilities, creativity, and effective communication through world-class innovative learning strategies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-[30px] font-large text-gray-800 font-poppins font-semibold">Vision</h2>
            <p className="text-gray-600 leading-relaxed text-[14px]">
            Empower students to prepare their critical thinking and enhance cognitive index to achieve the best campus placements in today’s professional landscape
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
    );
};

export default main