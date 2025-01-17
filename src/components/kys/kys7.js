// src/components/kys/kys7.js
export default function KYS7() {
    return (
      <div className="bg-[#FDF7F3] py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <div className="text-[#3b9b72] text-[16px] mb-3">
            What are you waiting for?
          </div>
          
          <h2 className="text-[40px] leading-tight font-semibold mb-2">
            Measure your growth potential.
          </h2>
          
          <div className="text-[40px] leading-tight font-semibold mb-8">
            Know Your Readiness.
          </div>
  
          <div className="flex items-center justify-center gap-4">
            <button 
              className="bg-[#3b9b72] text-white px-6 py-3 rounded-full text-[16px] font-medium hover:bg-[#3b9b72] transition-colors"
            >
              Test Yourself, Now
            </button>
            
            <button 
              className="border border-[#3b9b72] text-[#3b9b72] px-6 py-3 rounded-full text-[16px] font-medium hover:bg-emerald-50 transition-colors"
            >
              Set a Reminder
            </button>
          </div>
        </div>
      </div>
    )
  }