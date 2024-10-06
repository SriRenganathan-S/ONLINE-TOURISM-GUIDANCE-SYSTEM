import React from 'react'
import { GoButton } from '../Components/utils/buttons'
import { Link } from 'react-router-dom'

function Searchcontainer() {
    return (
        <div className='flex items-center gap-5 px-60 my-10'>
            <p className='text-2xl'>Find your next trip</p>
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
                    <input type="text" className="text-md w-96 "/>

                </label>
                <Link to='/plan-your-trip'><GoButton btnText={'Go'} /></Link>
            </div>
        </div>

    )
}

export default Searchcontainer