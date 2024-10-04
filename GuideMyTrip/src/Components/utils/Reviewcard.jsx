import React from 'react'

function Reviewcard() {
    return (
        <div className='bg-white w-full'>
            <div className='flex justify-between'>
                <div>
                    <h5>Reviews</h5>
                </div>
                <div className="flex justify-end rating rating-lg rating-half">
                    <input type="radio" name="rating-10" className="rating-hidden" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                    <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-1 bg-green-500"
                        defaultChecked />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
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