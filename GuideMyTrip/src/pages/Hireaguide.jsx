import React from 'react'
import { WideButton } from '../Components/utils/buttons'
import { useState } from 'react'

function Hireaguide() {

	const [hiredata, sethiredata] = useState({
		name: '',
		contactno: '',
		email: '',
		destination: '',
		numberofdays: '',
		preferedlanguage: '',
		gender: ''
	});

	const handlechange = (e) => {
		const { name, value } = e.target;
		sethiredata((prevState) => ({
			...prevState,
			[name]: value
		}));
	};
	const handlesubmit = (e) => {
		e.preventDefault();
		console.log(hiredata);
		const reply = confirm("thanks for your submission! we will arrange your prefered guide soon");
		sethiredata({
			name: '',
			contactno: '',
			email: '',
			destination: '',
			numberofdays: '',
			preferedlanguage: '',
			gender: ''
		})
	}
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
								<input type="text" value={hiredata.name} name="name" onChange={handlechange} className='w-full h-8' />
							</label>
							<label className='text-lg'>
								Contact No:
								<input type="text" value={hiredata.contactno} name="contactno" onChange={handlechange} className='w-full h-8' />
							</label>
							<label className='text-lg'>
								Email ID:
								<input type="text" value={hiredata.email} name="email" onChange={handlechange} className='w-full h-8' />
							</label>
						</div>
						<div className='flex flex-col gap-3 w-full'>
							<h1 className='text-xl font-semibold'>Your travel details:</h1>
							<label className='text-lg'>
								Destination:
								<input type="text" value={hiredata.destination} name="destination" onChange={handlechange} className='w-full h-8' />
							</label>
							<label className='text-lg'>
								Number of Days:
								<input type="text" value={hiredata.numberofdays} name="numberofdays" onChange={handlechange} className='w-full h-8' />
							</label>
						</div>
						<div className='flex flex-col gap-3 w-full'>
							<h1 className='text-xl font-semibold'>Guide preference:</h1>
							<label className='text-lg'>prefered Language:</label>
							<select value={hiredata.preferedlanguage} name='preferedlanguage' onChange={handlechange} className="select select-black w-full max-w-s">
								<option Value='select your guide language'>select your guide language</option>
								<option value="Tamil" >Tamil</option>
								<option value="English" >English</option>
								<option value="telugu" >telugu</option>
								<option value="Malaylam" >Malayalam</option>
								<option value="Kannada" >kannada</option>
								<option value="Hindi" >Hindi</option>
								<option value="Marathi" >Marathi</option>
								<option value="Gujarathi" >Gujarathi</option>
								<option value="Tulu" >Tulu</option>
								<option value="Bengali" >Bengali</option>
								<option value="Urdu" >Urdu</option>
								<option value="Punjabi" >Punjabi</option>
								<option value="Dutch" >Dutch</option>
								<option value="French" >French</option>
								<option value="Arabic" >Arabic</option>
								<option value="Spanish" >Spanish</option>
								<option value="Portugese" >Portugese</option>
								<option value="Mandarin" >Mandarin</option>
								<option value="Japanese" >Japanese</option>
								<option value="German" >German</option>
								<option value="korean" >korean</option>
								<option value="Greek" >Greek</option>
								<option value="Latin" >Latin</option>
								<option value="Chinese" >Chinese</option>
								<option value="Russian" >Russian</option>
							</select>
							<label className='text-lg'>Gender:</label>
							<select value={hiredata.gender} name='gender' onChange={handlechange} className="select select-black w-full max-w-s">
								<option Value='select the prefered guide gender'>select the prefered guide gender</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
					</div>
				</form>
				<WideButton onclick={handlesubmit} className='w-42 ml-52 my-4' btnText={'Submit'}></WideButton>
			</div>
		</div>
	)
}

export default Hireaguide