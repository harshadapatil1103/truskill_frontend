import React from 'react'

function Home6() {

const sectionsData =  [
  {
    title: 'Take the KYS Test and discover your readiness towards India\'s top employers',
    subtitle: 'KNOW WHERE YOU STAND',
    description: `Unlock detailed reports and actionable tips to help you land your destined job. See the magic unlock in real time as you apply and complete the KYS Test.`,
    image: '/Home/Home1.png',
  },
  {
    title: 'Get personalised learning solution from the best instructor',
    subtitle: 'PERSONALISED LEARNING',
    description: `Experience structured learning that guides you on the best path, transforming your confidence in ways you can't imagine.`,
    image: '/Home/Home1.png',
  },
  {
    title: 'Practice with the best standard material, which will get you ahead of others',
    subtitle: 'CONSTANT PRACTICE',
    description: `The right practice material will constantly challenge you & set you up for success. Unlock hours of practice material for exam practice and dedicated to company requirements.`,
    image: '/Home/Home1.png',
  },
  {
    title: 'Immerse yourself in a holistic technology solution that elevates every aspect of your preparation',
    subtitle: 'LEVERAGE TECHNOLOGY',
    description: `Leave mediocrity at the door. Surround yourself with technology solutions, pushing you to continuously excel.`,
    image: '/Home/Home1.png',
  },
];
  
  return (

<>




<div className="flex flex-col justify-center items-center text-center px-6 mt-20">
  <p className="text-xs md:text-lg text-[#A7A7A7] ">
  HOW TRUSKILL DIFFERENTIATE
  </p>
  <div className='my-6'>
  <p className="text-xl md:text-3xl font-medium text-black">
  Every program can claim they do this.
 
 
  </p>
  <p className="text-xl md:text-3xl font-medium text-black">
  But the proof is in the numbers.
  </p>
  </div>
  
</div>
<div>
  {/* left */}

<div className='flex flex-row'>

<div className='mt-40'>
  <h3 className='mb-2 text-lg'>01</h3>
    <img
    src="/Home/Line2.png"
    alt="Without Truskill"
   
  
  />
   <h3 className='mb-2 text-lg'>02</h3>
    <img
    src="/Home/Line2.png"
    alt="Without Truskill"
   
  
  />
   <h3 className='mb-2 text-lg'>03</h3>
    <img
    src="/Home/Line2.png"
    alt="Without Truskill"
   
  
  />
   <h3 className='mb-2 text-lg'>04</h3>
    <img
    src="/Home/Line3.png"
    alt="Without Truskill"
   
  
  />
      </div>  

{/* right*/}
<div className="flex flex-col items-center min-h-screen p-8 ">
      {sectionsData.map((section, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center h-auto py-5 justify-between">
          {/* Text Section */}
          <div className="lg:flex w-full lg:w-1/2 items-center lg:space-x-7">
            <div className="md:text-left">
              <p className="text-sm text-[#7A7A7A]">{section.subtitle}</p>
              <h3 className="text-2xl md:text-4xl font-medium mb-6 mt-6">
                {section.title}
              </h3>
              <p className="text-sm text-[#7A7A7A] mb-1">{section.description}</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 mt-2 md:mt-6 lg:mt-0 p-11">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
{/* end */}
</div>
</div>
</>

  )
}

export default Home6