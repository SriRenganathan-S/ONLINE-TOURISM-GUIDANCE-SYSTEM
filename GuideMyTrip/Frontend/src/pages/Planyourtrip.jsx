import React from 'react'
import Transport from '../assets/Planyourtrip/Transport.png'
import Hotel from '../assets/Planyourtrip/Hotel.png'
import Holidaypackage from '../assets/Planyourtrip/Holidaypackage.png'
import Forex from '../assets/Planyourtrip/Forex.png'
import { WideButton } from '../Components/utils/buttons'
import { Link, useLocation, useNavigate } from 'react-router-dom'



function Planyourtrip() {

	const loc = useLocation() 
	const {location} = loc.state || '';
	console.log(location)
	function handleClick1() {
		window.location.href = 'https://www.omio.com/'
	}
	function handleClick2() {
		window.location.href = 'https://www.gtholidays.in/packages/'
	}
	function handleClick3() {
		window.location.href = 'https://in.hotels.com/'
	}
	
	return (
		<div className='bg-accent w-full h-[700px] rounded-2xl mb-5'>
			<div className='flex justify-center items-center pt-4 gap-2 pl-20'>
			<h1 className='flex justify-center items center pt-4 text-3xl'>Check out these itineraries to prepare for your upcoming trip!!!</h1>
			<h1 className='flex justify-center items center pt-4 text-3xl underline font-bold '>{location}</h1>
			</div>
			<div className='grid grid-cols-4 h-[550px] gap-5  mx-7 pt-12'>
				<div className=' flex flex-col justify-center items-center bg-secondary w-full rounded-xl place-item'>
					<img className='size-36' src={Transport}></img>
					<WideButton onclick={handleClick1} className='w-36 ml-18 mt-8' btnText={'Transport'}></WideButton>
				</div>
				<div className=' flex flex-col justify-center items-center bg-secondary w-full rounded-xl'>
					<img src={Hotel} className='size-36'></img>
					<WideButton onclick={handleClick3}className='w-36 ml-18 mt-8' btnText={'Hotels'}></WideButton>
				</div>
				<div className=' flex flex-col justify-center items-center bg-secondary w-full rounded-xl'>
					<img src={Holidaypackage} className='size-36'></img>
					<WideButton onclick={handleClick2} className='w-36 ml-18 mt-8' btnText={'Holiday Packages'}></WideButton>
				</div>
				<div className='flex flex-col justify-center items-center bg-secondary w-full rounded-xl'>
					<img src={Forex} className='size-36'></img>
					<div>
						<Link to='/forex'><WideButton className='w-36 ml-18 mt-8' btnText={'Forex'}></WideButton></Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Planyourtrip