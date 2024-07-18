import React, { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthProvider';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';
import Login from './Login';

const Navbar = () => {
    const [authUser, setAuthUser] = useAuth();
    // console.log(authUser);

    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    // const element = document.documentElement;
    useEffect(() => {
        if (theme === "dark") {
            // element.classList.add("dark");
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
        } else {
            // element.classList.remove("dark");
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark");
        }
    }, [theme]);

    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) setSticky(true);
            else setSticky(false);
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`navbar navbar-expand-lg sticky-top  ${sticky ? 'bg-light shadow-lg' : ''}`}>
                <div className="container">
                    <NavLink to='/' className='navbar-brand order-lg-1 order-1'>
                        <h4 className='text-black fw-semibold mb-0'>bookStore</h4>
                    </NavLink>
                    <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target="#navbar">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse order-2' id='navbar'>
                        <ul className='navbar-nav ms-auto '>
                            <li className='nav-item'>
                                <NavLink to='/' className='nav-link mx-2'>Home</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/course' className='nav-link mx-2'>Course</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/about' className='nav-link mx-2'>About</NavLink>  
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/contact' className='nav-link mx-2'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <form className='ms-2 d-lg-inline-block d-none order-3'>
                        <input type='search' className='form-control' placeholder='Search' />
                    </form>
                    <div className='mx-3 pt-2 order-4'>
                        {
                            theme === 'dark' ?
                                <i className="fi fi-rr-brightness fs-4"
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}></i> :
                                <i className="fi fi-rr-moon fs-4"
                                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}></i>
                        }
                    </div>
                    {
                        authUser ?
                            <Logout /> :
                            <button className='btn btn-dark order-5' data-bs-toggle='modal' data-bs-target='#loginModal'>
                                Login
                            </button>
                    }
                </div>
            </nav >
            <Login />
        </>
    )
}

export default Navbar;                     