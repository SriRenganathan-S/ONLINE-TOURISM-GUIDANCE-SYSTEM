import React from 'react'
import { SignUpButton } from '../utils/buttons'
import {Link, useNavigate} from 'react-router-dom'

function Header() {
    const nav =useNavigate()
    function handleClick(){
        nav('/sign-up')
    }
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <Link to='/'>
                <a className="btn btn-ghost text-xl w-20 h-20"><img src="/logo.png" alt="logo" /></a></Link>
                
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li>
                        <details>
                            <summary>Discover</summary>
                            <ul className="p-2 text-base w-48 bg-white">
                                <li><Link to='/traveller-choice'>Traveller's Choice</Link></li>
                                <li><Link to='/travel-stories'>Travel Stories</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link  to='/plan-your-trip'>Plan your trip</Link></li>
                    <li><Link  to='/hotels'>Hotels</Link></li>
                    <li><Link  to='/contact-us'>Contact Us</Link></li>
                    <li><Link  to='/review'>Review</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'><a className='px-5 btn bg-transparent border-none shadow-none mx-2 active:bg-transparent hover:bg-[#C4E7DC]'>Login</a></Link>
                <SignUpButton btnText={'Sign Up'} onclick={handleClick} />
            </div>
        </div>
    )
}

export default Header