import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='py-4 border-top'>
                <div className='container'>
                    <nav class="nav justify-content-center">
                        <NavLink to="/about" className="nav-link text-black">Aboutus</NavLink>
                        <NavLink to="/contact" className="nav-link text-black">Contact</NavLink>
                        <a href="#" className="nav-link text-black">Jobs</a>
                        <a href="#" className="nav-link text-black">Press Kit</a>
                    </nav>
                    <div className='text-center my-3'>
                        <i className="fi fi-brands-twitter fs-5 px-2"></i>
                        <i className="fi fi-brands-youtube fs-5 px-2"></i>
                        <i className="fi fi-brands-facebook fs-5 px-2"></i>
                    </div>
                    <p className='text-center mb-0'>
                        Copyright © 2024 - All right reserved by
                        <span className='text-pink'> Akshay Anil Nalkol</span>
                    </p>
                </div >
            </div>
        </>
    )
}

export default Footer;