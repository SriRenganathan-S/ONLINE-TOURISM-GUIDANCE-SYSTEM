import React from 'react'
import about1 from '../../src/assets/Statics/about1.jpeg'
import about2 from '../../src/assets/Statics/about2.jpeg'

function Aboutcontainer() {
  return (
    <div className='grid grid-cols-10 bg-accent p-8 gap-10  my-10 rounded-2xl'>
      <div className='col-span-4 flex flex-col gap-5'>
        <img src={about1}/>
        <img src={about2}/>
      </div>
      <body className='col-span-6 flex flex-col gap-5'>
        <h1 className='text-2xl'>About Us</h1>
        <p className='text-xl text-justify'>Welcome to GuideMyTrip, where we guide you through every step of your travel journey.
          Our tourism guidance system provides personalized recommendations, detailed itineraries,
          and real-time information on top attractions, dining, and accommodations.
          Whether you're exploring iconic landmarks or discovering hidden gems, we guide you with interactive maps,
          insider tips, and easy-to-use tools to make your trip unforgettable.
           So, let's go and explore the world together—your next adventure awaits, 
           and we're here to ensure it's seamless and exciting!</p>
      </body>
    </div>
  )
}

export default Aboutcontainer