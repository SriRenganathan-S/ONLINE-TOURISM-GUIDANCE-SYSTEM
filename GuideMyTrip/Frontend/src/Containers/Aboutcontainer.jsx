import React from 'react'
import about1 from '../../src/assets/Statics/about1.jpeg'
import about2 from '../../src/assets/Statics/about2.jpeg'

function Aboutcontainer() {
  return (
    <div className='grid grid-cols-10 bg-accent p-8 gap-10  my-10 rounded-2xl'>
      <div className='col-span-4 flex flex-col gap-5'>
        <img src={about1} />
        <img src={about2} />
      </div>
      <body className='col-span-6 flex flex-col gap-5'>
        <h1 className='text-2xl font-bold'>About Us</h1>
        <p className='text-xl text-justify'>GuideMyTrip is your go-to app for personalized travel guidance, designed to transform how you explore the world. Founded by passionate travelers, we recognized the need for a more customized approach to travel planning, moving beyond generic itineraries to create unique experiences tailored to your interests.
          Our mission is to empower individuals and families to embark on adventures that resonate with them, whether you seek thrilling activities, cultural immersion, or relaxing getaways.With our app, you can access a variety of services, including custom itineraries crafted by expert travel guides who understand your preferences and budget. Explore comprehensive destination guides that provide essential information about local attractions, dining options, and practical tips to enhance your journey.
          What sets GuideMyTrip apart is our emphasis on local insights. Our team includes travel enthusiasts and locals who share insider knowledge, leading you to hidden gems and authentic experiences often overlooked by traditional tourism. We also foster a vibrant community where travelers can exchange stories and recommendations, enriching the collective travel experience.
          Committed to sustainable travel, we advocate for responsible tourism practices that respect local cultures and support small businesses while minimizing environmental impact. Our app simplifies the planning process by offering extensive resources, from packing guides to cultural advice, ensuring you’re well-prepared for your adventures.
          At GuideMyTrip, we are more than just a travel resource; we are your trusted partners in exploration. Join us to discover the endless possibilities that await you and let us help turn your travel dreams into reality. Together, we can navigate the wonders of the world and create lasting memories. Welcome to GuideMyTrip!</p>
      </body>
    </div>
  )
}

export default Aboutcontainer