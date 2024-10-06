import React from 'react'

function Reviewcard() {
    return (
        <div className='bg-white w-full'>
            <div className='flex justify-between'>
                <div>
                    <h5>Reviews</h5>
                </div>
            <div className='flex mt-3 '>
            <h2 className='text-black text-xl'>Rating:</h2>
            <input type="text" className="grow bg-white mx-4" placeholder="" />
            </div>
            </div>
            <div className='flex gap-10'>
                <div>
                    <p className='text-s'>()</p>
                </div>
                <div>
                    <p className='text-s'>(time:)</p>
                </div>
            </div>
            <div>
                <p className='text-normal'>(Description:)</p>
            </div>
        </div>
    )
}

export default Reviewcard