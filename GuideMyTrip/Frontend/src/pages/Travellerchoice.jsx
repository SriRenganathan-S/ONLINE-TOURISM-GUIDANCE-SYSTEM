import React from 'react'
import Choicecard from '../Components/utils/Choicecard'
import choicedata from '../data/choice.js'

function Travellerchoice() {
  return (
    <div className='flex flex-col my-10 bg-accent gap-3 p-5  rounded-2xl h-[700px] w-full'>
            
                <p className='text-2xl text-center mb-10'>Traveller's Choice</p>
            <div className='flex gap-5'>
            {choicedata.map((choice) => (
                <Choicecard key={choice.details.id} choiceimg={choice.details.image} locationName={choice.details.name} alt={choice.details.alt} title={choice.details.title} desc={choice.details.desc}/>
            ))}
            </div>
        </div>
  )
}

export default Travellerchoice