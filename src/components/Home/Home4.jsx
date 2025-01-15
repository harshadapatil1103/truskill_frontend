import React from 'react'

function Home4() {
  return (

<div className="mt-10 flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-10">

{/* Left Section: Without Truskill */}
<div className="flex flex-col items-center w-full max-w-md p-6 rounded-lg space-y-10">
  <button className="mb-4 px-6 py-2 text-black rounded-full border-4 text-lg">
    Without Truskill
  </button>
  <img
    src="/Home/Home2.png"
    alt="Without Truskill"
    className="w-4/5 h-auto mb-4 rounded-lg"
  />
  <ol className="list-disc pl-5 text-black space-y-9 text-[22px] ">
    <li>No proper guidance</li>
    <li>Overwhelmed with countless information</li>
    <li>Completely lost about your progress</li>
    <li>Outdated tech which makes you stuck</li>
  </ol>
</div>
    <div>
    <img
    src="/Home/Line1.png"
    alt="Without Truskill"
    className="hidden lg:block"
    
  />
      </div>  


{/* Right Section: With Truskill */}
<div className="flex flex-col items-center w-full max-w-md p-6  rounded-lg space-y-10">
  <button className="mb-4 px-6 py-2 bg-black text-white rounded-full border-4 text-lg">
    With Truskill
  </button>
  <img
    src="/Home/Home3.png"
    alt="With Truskill"
    className="w-4/5 h-auto mb-4 rounded-lg"
  />
  <ol className="list-disc pl-5 space-y-3 text-black text-[22px]">
    <li>Structured learning plans tailored for your growth</li>
    <li>A reliable source for all the skills you want to learn and benefit from</li>
    <li>Track each step of your learning journey</li>
    <li>Achieve your goals with less frustration</li>
  </ol>
</div>

</div>

  )
}

export default Home4