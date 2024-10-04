import React from 'react'
import Forexcard from '../assets/Forex/Forexcard.png'
import Multicurrency from '../assets/Forex/Multicurrency.png'
import { WideButton } from '../Components/utils/buttons'


function Forex() {
  return (
    <div className='bg-accent w-full h-[600px] rounded-2xl mb-5'>	
		<div className='grid grid-cols-2 h-[550px] gap-10 px-5 mx-5 pt-12'>
				<div className=' flex flex-col justify-center items-center bg-secondary w-full rounded-xl place-item'>
				<img className='size-44' src={Forexcard}></img>
					<WideButton  className='w-36 ml-18 mt-8'btnText={'Forexcard'}></WideButton>
				</div>
				<div className=' flex flex-col justify-center items-center bg-secondary w-full rounded-xl'>
				<img src={Multicurrency} className='size-44'></img>
					<WideButton  className='w-36 ml-18 mt-8'btnText={'Forex Notes'}></WideButton>	
				</div>
		</div>
	</div>
	
  )
}

export default Forex 