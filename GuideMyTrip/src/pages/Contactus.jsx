import React from 'react'
import Contact from '../assets/Contactus/Contact.png'
import { WideButton } from '../Components/utils/buttons'

function Contactus() {
  return (
    <div className=' flex bg-transparent h-[600px] w-[1400px] my-10 rounded-2xl'>
      <img className='w-1/2 h-[550px] m-5 rounded-2xl' src={Contact}></img>
      <div className='flex bg-secondary h-[550px] m-5 w-1/2  rounded-2xl'>
      <div className=' flex flex-col justify-center h-[530px] mx-40 my-5 w-80 gap-5 '>
        <p className='flex justify-center font-bold text-xl'>Contact Us</p>
        <label className="input input-bordered flex items-center gap-2">
          Name:
          <input type="text" className="grow" placeholder="Full Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          EmailID:
          <input type="text" className="grow" placeholder="Enter your mail ID" />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-medium">Give your feedback</span>
          </div>
          <textarea className="textarea textarea-bordered h-40" placeholder="Type a messsage"></textarea>
        </label>
        <div className='flex justify-center items-center'>
        <WideButton  btnText={"Submit"}></WideButton>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contactus