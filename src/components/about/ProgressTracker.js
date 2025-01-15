export default function ProgressTracker() {
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
              className="w-auto rounded"
            />
          </div>
          <div className="mt-8">
            <p className="text-gray-900 text-center text-sm">"A goal without a plan is just a wish." - Antoine de Saint-Exupéry" -</p>
            <p className="text-[#006241] text-center text-sm">Abraham Lincoln</p>
          </div>
        </div>

        {/* Text Content - Appears first on mobile, second on desktop */}
        <div className="order-1 md:order-2 space-y-6">
          <h1 className="text-3xl font-semibold">TRUSKILL PROGRESS TRACKER</h1>
          <p className="text-gray-600 text-sm mb-6">
            Fact - Students who set goals and track their progress are 82% more
            likely to achieve their academic goals.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-sm">
          With structured plans and goals, achieving academic goals tends to increase effectively. Our progress tracker analyse overall exam preparation effectiveness by tracking performances at every stage of learning and helps students visualize strong and weak areas in their studies. It provides customized study plans with personalized learning strategies, giving each student a clear and goal-oriented study planner curated as per their learning potential.
          </p>
          <ul className="space-y-3 pt-4 text-sm">
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
}
