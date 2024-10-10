import React from 'react'

function Reviewcard({ name, time, comment, rating, title }) {

    return (
        <div className=' my-4 px-4 py-4 bg-white w-full'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-black text-xl'>Title: {title}</h2>
                </div>
                <div className='flex '>
                    <h2 className='text-black'>Rating: {rating}</h2>
                </div>
            </div>
            <div className='flex gap-10 mt-3'>
                <div>
                    <p>author: {name}</p>
                </div>
                <div>
                    <p>time: {time}</p>
                </div>
            </div>
            <div>
                <p className='text-normal mt-2'>Description: {comment}</p>
            </div>
        </div>
    )
}

export default Reviewcard