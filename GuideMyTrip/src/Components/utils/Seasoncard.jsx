import React from 'react'

function Seasoncard({seasonimg,alt,seasonName}) {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img className='h-[400px] w-full'
                    src={seasonimg}
                    alt={alt} />
            </figure>
            <div className="card-body">
                <p className='text-center text-lg font-bold'>{seasonName}</p>
               
            </div>
        </div>
    )
}

export default Seasoncard