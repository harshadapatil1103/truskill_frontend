import React from 'react';

const PersonalisedDashboard = () => {
  return (
    <div className="bg-[#FFFFFF] px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Images Section - Appears second on mobile, first on desktop */}
        <div className="order-2 md:order-1 relative">
          <div className="absolute left-0 -z-10 w-full h-full " />
          <div className="space-y-6">
            <img 
              src="/images/about/office.svg" 
              alt="Office interior"
              className="w-full rounded"
            />
           
          </div>
          <div className="mt-8">
            <p className="text-gray-900 text-center text-xs">"The best way to predict your future is to create it." -</p>
            <p className="text-[#006241] text-center text-xs">Abraham Lincoln</p>
          </div>
        </div>

        {/* Text Content - Appears first on mobile, second on desktop */}
        <div className="order-1 md:order-2 space-y-6">
          <h1 className="text-3xl font-bold">PERSONALIZED DASHBOARD</h1>
            <p className="text-gray-600 text-xs">Fact - Personalized Dashboard learning has been shown to increase student engagement by up to 70%.
          </p>
          <p className="text-gray-600 v text-xs">Our student assistance, enabled by advanced technology, offers adaptive learning approaches, customized exam preparation, along with a performance tracking system that helps each student understand their best potential and strengths.</p>
          
          
          <h2 className="text-xl text-[#0B5E41]">About,</h2>
          
          <p className="text-gray-600 text-xs">Each student has the main control to personalize their resources for exam preparation.</p>
          
          <p className="text-gray-600 text-xs">They have video learning platforms targeting various subjects and a mock test simulation to stay updated with their preparation for campus placements and training.</p>
          
          <p className="text-gray-600 text-xs">A comprehensive student learning solution also provides an engaging platform among the students.</p>
          
          <p className="text-gray-600 text-xs">Our technology-enabled system has been proven to improve cognitive index up to 3X in PI assessments, unlocking student potential for success with the help of our intelligent educational support.</p>

          <ul className="space-y-3 pt-4 text-xs">
  <li className="flex items-center gap-2">
    <img src="/images/about/checkbox.png" className="w-5 h-5 text-[#006241] border-gray-300" />
    <span className="text-[#006241]">Analyze your overall preparation.</span>
  </li>
  <li className="flex items-center gap-2">
    <img src="/images/about/checkbox.png" className="w-5 h-5 text-[#006241] border-gray-300" />
    <span className="text-[#006241]">Create custom company-specific study plans.</span>
  </li>
  <li className="flex items-center gap-2">
    <img src="/images/about/checkbox.png" className="w-5 h-5 text-[#006241] border-gray-300" />
    <span className="text-[#006241]">Track yourself at every point.</span>
  </li>
  <li className="flex items-center gap-2">
    <img src="/images/about/checkbox.png" className="w-5 h-5 text-[#006241] border-gray-300" />
    <span className="text-[#006241]">Visualize your strong and weak areas.</span>
  </li>
  <li className="flex items-center gap-2">
    <img src="/images/about/checkbox.png" className="w-5 h-5 text-[#006241] border-gray-300" />
    <span className="text-[#006241]">Receive a personalized action plan customized to your chosen company and the amount of time you can commit each week.</span>
  </li>
</ul>

        </div>
      </div>
    </div>
  );
};

export default PersonalisedDashboard;
