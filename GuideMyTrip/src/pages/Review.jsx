import React from 'react'
import { WideButton } from '../Components/utils/buttons'
import Reviewcard from '../Components/utils/Reviewcard'
import { useState } from 'react'

function Review() {

  const [reviewdata, setreviewdata] = useState({
    title: '',
    name: '',
    comment: '',
    rating: '',
    time:''
  });

  const handletitle = (e) => {
    setreviewdata({
      ...reviewdata,
      title: e.target.value
    });
  };

  const handlename = (e) => {
    setreviewdata({
      ...reviewdata,
      name: e.target.value
    });
  };

  const handlecomment = (e) => {
    setreviewdata({
      ...reviewdata,
      comment: e.target.value
    });
  };

  const handlerating = (e) => {
    setreviewdata({
      ...reviewdata,
      rating: e.target.value
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const date = new Date();
		const localeString = JSON.stringify(date.toLocaleString());
    setreviewdata({
      ...reviewdata,
      time:localeString
    });
    const result = confirm('Thanks for providing your valuable review!')
    setreviewdata({
      title: '',
      name: '',
      comment: '',
      rating: '',
      time:''
    });
    console.log(localeString);
    console.log(reviewdata);
  };


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
            <input onChange={handletitle} value={reviewdata.title} type="text" className="grow bg-secondary pl-4" placeholder="" />
            <h3 className='my-1 text-black text-xl'>Name:</h3>
            <input onChange={handlename} value={reviewdata.name} type="text" className="grow bg-secondary pl-4" placeholder="" />
            <h4 className='my-1 text-black text-xl'>comment:</h4>
            <textarea onChange={handlecomment} value={reviewdata.comment} className="textarea textarea-bordered h-40" placeholder="Type a messsage"></textarea>
            <h2 className='text-black text-xl'>Rating:</h2>
            <div className='flex mt-3'>
            <input onChange={handlerating} value={reviewdata.rating} type="text" className="grow bg-secondary pl-4 mr-5 mb-3" placeholder="out of 10" />
              <WideButton onclick={handlesubmit} className='w-36 ml-20 py-4 mb-3' btnText={'Submit'}></WideButton>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Review