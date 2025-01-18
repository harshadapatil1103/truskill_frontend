// app/kys-test/page.js
'use client'

import React from 'react'
import { CheckCircle2 } from 'lucide-react'

// Constants
const PRODUCT_SKILLS = [
  { id: 'ps', name: 'Quantitative Aptitude' },
  { id: 'tu', name: 'Logical Reasoning' },
  { id: 'dde', name: 'Data Intepretation' },
  { id: 'prob', name: 'Verbal Ability' },
  { id: 'comm', name: 'Technical Skills' },

]

// Metadata for Next.js
export const metadata = {
  title: 'Know Your Self Test | How it Works',
  description: 'Learn how the Know Your Self test works with our step-by-step guide',
}

// Component
export default function KYSTestExplainer() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 bg-[#FFFFFF]">
      {/* Header */}
      <div className="text-center mb-12 bg-[#FFFFFF]">
        <span className="text-[#3b9b72] text-[14px] md:text-[16px] font-medium mb-2 block">
        About KYR
        </span>
        <h1 className="text-[32px] md:text-[40px] font-semibold text-[#222222]">
        How does the
        <br />Know Your Reflection test work?
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 01 Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all">
        <span className="inline-block text-blue-500 text-[12px] md:text-[14px] font-medium mb-4 block bg-[#F3F8FE] rounded-full py-1 px-3">
  Step 01
</span>

          <h2 className="text-[24px] md:text-[18px]  font-bold mb-3">
          Answer 50 questions in 60 minutes
          </h2>
          <p className="text-gray-600 text-[16px] md:text-[14px] text-justify">
          Solve 50 Curated MCQ problems in 60 minutes and assess your readiness as a potential aspirant.

          </p>
          <div className="mt-4 flex justify-center">
          <div className="w-32 h-32 bg-gray-100 rounded-lg" aria-label="Checklist illustration">
  <img 
    src="/images/kys/book.png" 
    alt="Checklist" 
    className="w-full h-full object-cover rounded-lg" 
  />
</div>

          </div>
        </div>

        {/* Step 02 Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all">
        <span className="inline-block text-blue-500 text-[12px] md:text-[14px] font-medium mb-4 block bg-[#F3F8FE] rounded-full py-1 px-3">
  Step 02
</span>
          <h2 className="text-[24px] md:text-[18px] font-bold mb-3">
          Get a detailed readiness report of the 5 vital areas
          </h2>
          <div className="space-y-3 text-[16px] md:text-[14px]">
            {PRODUCT_SKILLS.map((skill) => (
              <div key={skill.id} className="flex items-center gap-2">
                <CheckCircle2 className="text-[#3b9b72] w-5 h-5" />
                <span className="text-sm text-gray-600">{skill.name}</span>
              </div>
            ))}
          </div>
          {/* <button
  className="mt-6 text-sm text-[#3b9b72] border-2 border-[#3b9b72] 
           rounded-full px-6 py-2 hover:bg-gray-50 transition-colors"
  onClick={() => {}}
>
  See Sample Skill Report
</button> */}

<div className="relative p-4 bg-white">
  {/* Your card content */}
  
  <button
    className="mt-6 mx-auto text-sm text-[#3b9b72] border-2 border-[#3b9b72] 
           rounded-full px-6 py-2 hover:bg-gray-50 transition-colors block"
    onClick={() => {}}
  >
    See Sample Skill Report
  </button>
</div>


        </div>

        {/* Results Card */}
        <div className="bg-[#F7FFF2] shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all">
        <span className="inline-block text-blue-500 text-[12px] md:text-[14px] font-medium mb-4 block bg-[#FFFFFF] rounded-full py-1 px-3">
        After Results
</span>
          <h2 className="text-[24px] md:text-[18px] font-bold mb-3">
            Compare your scores with peers and experts
          </h2>
          <p className="text-gray-600 text-[16px] md:text-[14px] text-justify">
            Measure your growth potential by comparing your report with fellow and 
            expert PMs from around the globe.
          </p>
          <div className="mt-8 flex justify-center">
          <div className="w-auto h-auto rounded-full" aria-label="Profile illustration">
  <img 
    src="images/kys/girl.svg" 
    alt="Profile" 
    className="w-full h-full object-cover rounded-full"
  />
</div>

          </div>
        </div>
      </div>
    </main>
  )
}
