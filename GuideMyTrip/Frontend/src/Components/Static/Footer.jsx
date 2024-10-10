import React from 'react'
import instagramlogo from '../../assets/icons/instagramlogo.png'
import twitterlogo from '../../assets/icons/twitterlogo.png'
import facebooklogo from '../../assets/icons/facebooklogo.png'
import whatsapplogo from '../../assets/icons/whatsapplogo.png'


function Footer() {
    return (
        <div>
            <footer className="footer bg-black text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <img src='/logo.png' className=''></img>
                    <p className='text-lg text-white'>GuideMyTrip</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <img src={instagramlogo} className=''></img>
                <img src={twitterlogo} className=''></img>
                <img src={facebooklogo} className=''></img>
                <img src={whatsapplogo} className=''></img>
                </nav>
                    
            </footer>
        </div>
    )
}

export default Footer