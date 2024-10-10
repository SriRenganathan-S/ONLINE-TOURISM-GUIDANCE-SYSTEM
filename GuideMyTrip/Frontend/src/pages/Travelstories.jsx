import React from 'react'
import img1 from '../assets/Stories/img1.png'
import img2 from '../assets/Stories/img2.png'
import img3 from '../assets/Stories/img3.png'
import img4 from '../assets/Stories/img4.png'
import img5 from '../assets/Stories/img5.png'
import img6 from '../assets/Stories/img6.png'
import img7 from '../assets/Stories/img7.png'

function Travelstories() {
  return (
    <div className='flex justify-center items-center h-[550px] p-8 w-full bg-accent my-10 rounded-3xl'>
      <div className='bg-accent rounded-2xl w-full h-full my-20  '>
      <div className="carousel carousel-vertical rounded-box h-full w-full ">
        <div className="carousel-item h-full w-full flex justify-center items-center">
          <img src={img1} className='h-full w-full' />
        </div>
        <div className="carousel-item h-full w-full flex justify-center items-center">
        <img src={img2} className='h-full w-full' />
        </div>
        <div className="carousel-item h-full w-full flex justify-center items-center">
        <img src={img3} className='h-full w-full' />
        </div>
        <div className="carousel-item h-full w-full flex justify-center items-center">
        <img src={img4} className='h-full w-full' />
        </div>
        <div className="carousel-item h-full w-full flex justify-center items-center">
        <img src={img5} className='h-full w-full' />
        </div>
        <div className="carousel-item h-full w-full flex justify-center items-center">
        <img src={img6} className='h-full w-full' />
        </div>
        <div className="carousel-item h-full w-full flex justify-center items-center">
        <img src={img7} className='h-full w-full' />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Travelstories