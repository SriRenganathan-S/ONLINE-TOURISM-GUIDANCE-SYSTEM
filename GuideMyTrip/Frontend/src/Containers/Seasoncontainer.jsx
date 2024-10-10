import React from 'react'
import seasondata from '../data/Seasonimg.js'
import Seasoncard from '../Components/utils/Seasoncard'


function SeasonContainer() {
    return (
        <div className='flex flex-cols my-10 bg-accent gap-3 p-5  rounded-2xl h-[600px] w-full'>
            <div className='flex justify-center items-center '>
                <p className='text-2xl'>Best places for seasons</p>
            </div>
            {seasondata.map((season) => (
                <Seasoncard key={season.id} seasonimg={season.details.image} seasonName={season.details.name} alt={season.details.alt} link={season.details.link}/>
            ))}
        </div>
    )
}

export default SeasonContainer