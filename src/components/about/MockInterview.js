export default function MockInterview() {
  return (
    <div className="bg-[#FFFFFF] px-6 md:px-8 py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12 items-center">
        {/* Right Section (Text Content) */}
        <div className="space-y-6 p-8 bg-white rounded-lg ">
          <h1 className="text-[24px] md:text-3xl font-semibold text-gray-800 mb-4 tracking-wide">
            AI ENABLED REAL MOCK INTERVIEW
          </h1>
          <p className="text-[#3b9b72] text-sm mb-4 font-medium text-justify">
            Fact - 70%: The best way to prepare for an interview is to practice, practice, practice.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm text-justify">
          It's true when they say, “Practice makes a man perfect.” The key to acing an interview is practice. With our AI-powered mock interviews, we provide diverse and realistic interview simulations along with an interview preparation platform. With an adaptive mock interview platform, it will help students work on their soft skills through regular feedback-driven interview training. Students will build their confidence through practice interviews and refine their answers for better interview outcomes.
          </p>
          
          {/* List of Features with Icons */}
          <ul className="space-y-3 pt-4 text-sm">
  <li className="flex items-center gap-2">
    <img src="/images/about/checkbox.png" className="w-5 h-5 text-[#3b9b72] border-gray-300" />
    <span className="text-[#3b9b72]">Experience realistic interview scenarios tailored to your profile and job requirements.</span>
  </li>
  <li className="flex items-center gap-2">
    <img src="/images/about/checkbox.png" className="w-5 h-5 text-[#3b9b72] border-gray-300" />
    <span className="text-[#3b9b72]">Receive instant feedback and ratings on your answers and overall performance.</span>
  </li>
  <li className="flex items-center gap-2">
    <img src="/images/about/checkbox.png" className="w-5 h-5 text-[#3b9b72] border-gray-300" />
    <span className="text-[#3b9b72]">Practice with a diverse range of interviews.</span>
  </li>
</ul>


          
        </div>

        {/* Left Section (Image) */}
        <div className="relative flex flex-col items-center md:order-first">
          {/* Background Shapes */}
          <div className="absolute top-0 left-0 bg-gradient-to-r from-purple-100 to-blue-50 w-72 h-72 rounded-full -z-10 transform translate-y-12 translate-x-12"></div>
          <div className="absolute bottom-0 right-0 bg-gradient-to-r from-purple-100 to-blue-50 w-72 h-72 rounded-full -z-10 transform -translate-y-12 -translate-x-12"></div>

          {/* Image with Hover Effect */}
          <div className="space-y-6 md:space-y-4">
            <img
              src="/images/about/Aboutus6.png"
              alt="Office"
              className="w-full max-w-lg  hover:scale-105 transition-transform duration-300 transform"
            />
            <div>
            <p className="text-gray-600 text-sm  mt-10 text-center">
            "The best way to prepare for an interview is to practice, practice, practice."
          </p>
          <p className="text-[#3b9b72] text-sm text-center">
            -unknown
          </p>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
