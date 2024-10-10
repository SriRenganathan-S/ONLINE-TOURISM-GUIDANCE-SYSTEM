import React from 'react'
import { GoButton } from '../Components/utils/buttons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Searchcontainer() {
    const [location,setLocation] = useState('')
    const navigate = useNavigate()
    
    function handleonchange(event){
        const loc = event.target.value;
        setLocation(loc);
    }
    
    function handleonclick(){
        navigate('/plan-your-trip',{state:{location}})
    }
    return (
        <div className='flex items-center gap-5 px-60 my-10'>
            <p className='text-2xl mb-1'>Find your next trip</p>
            <div className='flex px-6 gap-5'>
                <label className="input  bg-secondary input-bordered flex items-center gap-2 rounded-lg border-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-6 w-6 opacity-100">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="text" onChange={handleonchange} value={location} className="text-md w-96 " />

                </label>
                <div><button onClick={handleonclick} className="btn btn-primary w-24">Go</button></div>
            </div>
        </div>

    )
}

export default Searchcontainer