import React from 'react'
import { WideButton } from '../Components/utils/buttons'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


function Login() {
	const nav = useNavigate()

	const [logindata, setlogindata] = useState({
		email: '',
		password: ''
	});

	const [error, setError] = useState(''); 
	const [rememberMe, setRememberMe] = useState(false);

	const handlemailchange = (e) => {
		setlogindata({
			...logindata,
			email: e.target.value
		});
	};

	const handlepasschange = (e) => {
		setlogindata({
			...logindata,
			password: e.target.value
		});
	};

	const handleRememberMeChange = (e) => {
		setRememberMe(e.target.checked);
	};

	const handlelogin = async (e) => {
		e.preventDefault();
		setError('');

		if (!logindata.email || !logindata.password) {
			setError('Please fill in both fields.');
			const result = confirm('Please enter the credentials to login')
			return;
		}

		try{
			const res = await axios.post("http://localhost:3000/login/logincon",logindata)
			console.log(res.data.message)
			console.log(res.data.user)

			if (rememberMe) {
				localStorage.setItem('savedEmail', logindata.email);
			} else {
				localStorage.removeItem('savedEmail');
			}

			nav('/')
		}
		catch(error){
			console.log("invalid credentials")
			const result = confirm('Invalid Credentials')
		}
		
	};

	const isButtonDisabled = !logindata.email || !logindata.password;

	return (
		<div className='flex justify-center'>
			<div className=" flex items-start justify-center my-5 bg-secondary rounded-xl artboard phone-1 mb=15 border-black border-2">
				<div className='flex flex-col justify-center items-center'>
					<h1 className='text-2xl pt-16 '>Login</h1>
					<h2 className='mr-40 pt-10'>Email-ID:</h2>
					<input type="text" onChange={handlemailchange} placeholder="Type here" className="input input-bordered  w-full max-w-xs " />
					<h3 className='mr-40 pt-5'>Password:</h3>
					<input type="text" onChange={handlepasschange} placeholder="Type here" className="input input-bordered  w-full max-w-xs" />
					<div className="form-control mr-24 mt-3">
						<label className="label cursor-pointer gap-3">
							<input type="checkbox" className="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
							<span className="label-text">Remember me</span>
						</label>
					</div>
					<WideButton onclick={handlelogin} className='w-36 mt-5' btnText={'Login'} disabled={isButtonDisabled}></WideButton>
					<div className='flex mt-24 '>
						<h4>Not a member?</h4>
						<Link to='/sign-up'><h5 className='text-blue-700 mx-2 '>Signup</h5></Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login