import React from 'react'
import trophylogo from '../assets/icons/trophylogo.png'
import bali from '../assets/destination/bali.jpg'
import {WideButton } from '../Components/utils/buttons'


function Yearcontainer() {
    return (
        <div className=' flex  gap-10 my-10 bg-accent rounded-2xl w-fit'>
            <div className='flex flex-col gap-10 w-[450px] justify-center items-center'>
                <p className='text-3xl'>Destination of the year</p>
                <img className='w-36 h-auto' src={trophylogo}></img>
                <p className='text-5xl'>Bali</p>
                <WideButton btnText={'Read more'}/>
            </div>
            <div className=' w-full h-auto'>
                <img className='w-full rounded-r-2xl' src={bali}></img>
            </div>
        </div>
    )
}

export default Yearcontainer