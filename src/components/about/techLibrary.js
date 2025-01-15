// components/TechLibrary.js
export default function TechLibrary() {
    return (
      <div className="bg-[#FFFFFF] px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-3xl font-semibold mb-4">TECH POWERED RESOURCE LIBRARY</h1>
            <p className="text-sm text-gray-600 mb-6">
              Fact - Students with structured plan and direction have a 3 times higher Success Rate.
            </p>
            <p className="text-gray-700 mb-4 text-sm">
            Success rate depends on a structured plan. Our tech-powered resource library aims to provide such structured plans to our students. With our curated learning resources and intelligent study strategy, we aim to provide a 3X success rate with student-focused improvement and a data-driven learning approach.
            </p>
            <ul className="space-y-3 pt-4 text-sm">
  <li className="flex items-center gap-2">
    <img src="/images/about/checkbox.png" className="w-5 h-5 text-[#006241] border-gray-300" />
    <span className="text-[#006241]">2000+ exam paper analysis.</span>
  </li>
  <li className="flex items-center gap-2">
    <img src="/images/about/checkbox.png" className="w-5 h-5 text-[#006241] border-gray-300" />
    <span className="text-[#006241]">High-yield learning strategy.</span>
  </li>
  <li className="flex items-center gap-2">
    <img src="/images/about/checkbox.png" className="w-5 h-5 text-[#006241] border-gray-300" />
    <span className="text-[#006241]">Precision study resources.</span>
  </li>
  <li className="flex items-center gap-2">
    <img src="/images/about/checkbox.png" className="w-5 h-5 text-[#006241] border-gray-300" />
    <span className="text-[#006241]">Technology-enabled learning.</span>
  </li>
  <li className="flex items-center gap-2">
    <img src="/images/about/checkbox.png" className="w-5 h-5 text-[#006241] border-gray-300" />
    <span className="text-[#006241]">Focused exam preparation.</span>
  </li>
</ul>

           
          </div>
  
          {/* Right Section */}
          <div className="relative">
            {/* <div className="absolute bg-green-100 w-64 h-64 -top-4 -left-8 rounded-lg"></div> */}
            <div className="order-2 md:order-1 relative">
          <div className="absolute left-0 -z-10 w-full h-full " />
          <div className="space-y-6">
            <img 
              src="/images/about/office.svg" 
              alt="Office interior"
              className="w-50 rounded"
            />
           
          </div>
          <div className="mt-8">
            <p className="text-gray-900 text-center">"Tell me and I forget. Teach me and I remember. Involve me and I learn."</p>
            <p className="text-[#006241] text-center">-Benjamin Franklin</p>
          </div>
        </div>
          </div>
        </div>
      </div>
    );
  }
  