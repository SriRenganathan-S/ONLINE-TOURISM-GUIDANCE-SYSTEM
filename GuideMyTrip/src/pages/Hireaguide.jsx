import React from 'react'
import { WideButton } from '../Components/utils/buttons'

function Hireaguide() {
	return (
		<div className='flex flex-col justify-center items-center mt-10 mb-20'>
			<h1 className='mb-10 text-3xl font-bold'>"Your Journey, Your Guide!"</h1>
			<div className='bg-accent w-1/2 h-[900px] rounded-2xl mb-10'>
				<form>
					<div className='flex flex-col gap-10 justify-center items-center py-10 px-40'>
						<div className='flex flex-col gap-3 w-full'>
							<h1 className='text-xl font-semibold'>Your Details:</h1>
							<label className='text-lg'>
								Name:
								<input type="text" name="name" className='w-full h-8' />
							</label>
							<label className='text-lg'>
								Contact No:
								<input type="text" name="name" className='w-full h-8' />
							</label>
							<label className='text-lg'>
								Email ID:
								<input type="text" name="name" className='w-full h-8' />
							</label>
						</div>
						<div className='flex flex-col gap-3 w-full'>
							<h1 className='text-xl font-semibold'>Your travel details:</h1>
							<label className='text-lg'>
								Destination:
								<input type="text" name="name" className='w-full h-8' />
							</label>
							<label className='text-lg'>
								Number of Days:
								<input type="text" name="name" className='w-full h-8' />
							</label>
						</div>
						<div className='flex flex-col gap-3 w-full'>
							<h1 className='text-xl font-semibold'>Guide preference:</h1>
							<label className='text-lg'>prefered Language:</label>
							<select className="select select-black w-full max-w-s">
								<option disabled selected>select your guide language</option>
								<option>Tamil</option>
								<option>English</option>
								<option>telugu</option>
								<option>Malayalam</option>
								<option>kannada</option>
								<option>Hindi</option>
								<option>Marathi</option>
								<option>Gujarathi</option>
								<option>Tulu</option>
								<option>Bengali</option>
								<option>Urdu</option>
								<option>Punjabi</option>
								<option>Dutch</option>
								<option>French</option>
								<option>Arabic</option>
								<option>Spanish</option>
								<option>Portugese</option>
								<option>Mandarin chinese</option>
								<option>Japanese</option>
								<option>German</option>
								<option>korean</option>
								<option>Greek</option>
								<option>Latin</option>
								<option>Chinese</option>
								<option>Russian</option>
							</select>
							<label className='text-lg'>Gender:</label>
							<select className="select select-black w-full max-w-s">
								<option disabled selected>select the prefered guide gender</option>
								<option>Male</option>
								<option>Female</option>
							</select>
						</div>
					</div>
				</form>
				<WideButton className='w-42 ml-52 my-4' btnText={'Submit'}></WideButton>
			</div>
		</div>
	)
}

export default Hireaguide