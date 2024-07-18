import React from 'react';
import { NavLink } from 'react-router-dom';

const Baneer = () => {
    return (
        <>
            <div className='container'>
                <div className='row gy-3 justify-content-center align-items-center'>
                    <div className='col-lg-6 order-lg-1 order-2 mb-lg-0 mb-5 text-justify'>
                        <h2 className='fw-semibold mb-4'>Hello, Welcomes here to learn something to
                            <span className='text-pink'> new everyday!!!</span>
                        </h2>
                        <p className='mb-4'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                            et totam. Tempora amet atque expedita, quae corrupti totam sed
                            pariatur corporis at veniam est voluptas animi!
                        </p>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className="fi fi-sr-envelope pt-1"></i></span>
                            <input type='email' className='form-control' placeholder='Email' />
                        </div>
                        <NavLink to='/signup' className='btn btn-dark bg-pink border-0'>Get Started</NavLink>
                    </div>
                    <div className='col-lg-6 col-md-10 order-lg-2 order-1'>
                        <img src='./Image/Banner.png' className='w-100 py-5' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Baneer;