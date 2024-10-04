import React from 'react'
import { WideButton } from '../Components/utils/buttons'
import Reviewcard from '../Components/utils/Reviewcard'

function Review() {
  return (
    <div className='bg-accent w-full h-[500px] my-10 p-5 grid grid-cols-10 gap-5'>
      <div className='col-span-6 bg-secondary h-full w-full rounded-l-2xl p-5'>
        <Reviewcard />
      </div>
      <div className='col-span-4 bg-white h-full w-full rounded-r-2xl'>
        <div>
          <h1 className='text-black text-2xl ml-4'>Write a Review</h1>
          <div className='flex flex-col justify-center mx-10 my-2'>
          <h2 className='text-black text-xl'>Title:</h2>
          <input type="text" className="grow bg-secondary" placeholder="" />
          <h3 className='my-1 text-black text-xl'>Name:</h3>
          <input type="text" className="grow bg-secondary" placeholder="" />
          <h4 className='my-1 text-black text-xl'>comment:</h4>
          <textarea className="textarea textarea-bordered h-40" placeholder="Type a messsage"></textarea>
          <h5 className='text-black text-xl'>Ratings:</h5>
          <div className='flex '>
          <div className="rating rating-lg rating-half my-1">
            <input type="radio" name="rating-10" className="rating-hidden" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-yellow-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-yellow-500" />
            <input
              type="radio"
              name="rating-10"
              className="mask mask-star-2 mask-half-1 bg-yellow-500"
              defaultChecked />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-yellow-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-yellow-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-yellow-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-yellow-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-yellow-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-yellow-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-yellow-500" />
          </div>
          <WideButton  className='w-36 ml-20 mt-1'btnText={'Submit'}></WideButton>
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Review