import React, { useState } from 'react'
import ChoiceModal from './Modal'

function Choicecard({ choiceimg, alt, locationName, desc, title }) {

    const [open, setOpen] = useState(false)
    const isOpen = () => {
        setOpen(true)
    }
    const isClosed = () => {
        setOpen(false)
    }

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
                <button className="btn btn-primary " onClick={isOpen}>Explore Now</button>
                <ChoiceModal isOpen={open} onClose={isClosed} modalDesc={desc} modalTitle={title} btnText={"Close"}/>
            </div>
        </div>
    )
}

export default Choicecard