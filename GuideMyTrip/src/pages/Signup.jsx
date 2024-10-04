import React from 'react'
import { WideButton } from '../Components/utils/buttons'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
	const nav = useNavigate()
	function handleClick() {
		nav('/sign-up')
	}
	return (
		<div className='flex justify-center items-center pb-20'>
			<div className='w-[600px] h-[700px]'>
				<div className=" flex items-start justify-center my-5 bg-secondary rounded-xl w-full h-full  mb=15 border-black border-2">
					<div className='flex flex-col justify-center items-center'>
						<h1 className='text-2xl pt-16 '>Sign Up</h1>
						<h2 className='mr-48 pt-10 px-5'>Enter Username:</h2>
						<input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs " />
						<h3 className='mr-60 pt-5'>Email-ID:</h3>
						<input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs " />
						<h3 className='mr-40 pt-5'>Enter new Password:</h3>
						<input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs" />
						<h4 className='mr-44 pt-5'>Re-enter Password:</h4>
						<input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs" />
						<WideButton className='w-36 mt-10' btnText={'Sign Up'}></WideButton>
						<div className='flex mt-16 '>
							<h4>Already a member?</h4>
							<Link to='/login'><h5 className='text-blue-700 mx-2 '>Login</h5></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Signup