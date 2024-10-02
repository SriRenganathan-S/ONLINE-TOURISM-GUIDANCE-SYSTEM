import React from 'react'

function Choicecard({ choiceimg, alt, locationName }) {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img className='h-[400px] w-full'
                    src={choiceimg}
                    alt={alt} />
            </figure>
            <div className="card-body">
                <p className='text-center text-lg font-bold'>{locationName}</p>

            </div>
            <div className="card-actions justify-center mb-5">
                <button className="btn btn-primary ">Explore Now</button>
            </div>
        </div>
    )
}

export default Choicecard