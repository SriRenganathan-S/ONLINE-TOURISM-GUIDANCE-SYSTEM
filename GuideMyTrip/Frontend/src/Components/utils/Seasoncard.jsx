import React from 'react'
import { SeasonButton } from './buttons'


function Seasoncard({seasonimg,alt,seasonName,link}) {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img className='h-[400px] w-full'
                    src={seasonimg}
                    alt={alt} />
            </figure>
            
            <div className="card-body">
                <p className='text-center text-lg font-bold'>{seasonName}</p>
                <a href={link}><button className="btn bg-primary ml-16 mt-6">Explore</button></a>
            </div>
        </div>
    )
}

export default Seasoncard