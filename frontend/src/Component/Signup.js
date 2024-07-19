import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import Login from './Login';
import axios from 'axios';

const Signup = () => {
    const nav = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data);
        const user = data;
        // console.log(user);

        await axios.post('https://bookstoreapp-production.up.railway.app/user/signup', user)
            .then(res => {
                console.log(res.data);
                nav('/');
                toast.success('SignUp Successfully');
                localStorage.setItem('User', JSON.stringify(res.data.user));
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            })
            .catch(err => {
                console.log(err.response.data);
                toast.error('Error : ' + err.response.data.message);
            })
    }
    // console.log(watch("email")) // watch input value by passing the name of it

    return (
        <>
            <div className='container'>
                <div className='row justify-content-center align-items-center' style={{ height: '100vh' }}>
                    <div className='col-lg-4 col-md-6 col-sm-8'>
                        <div className='border p-3 rounded shadow'>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h4 className='fw-bold mb-0'>SignUp</h4>
                                <NavLink to='/' className='btn-close'></NavLink>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='mb-3'>
                                    <label className='' htmlFor='name'>Name</label>
                                    <input type='text' className='form-control' id='name'
                                        placeholder='Enter Your Full Name'
                                        {...register("fullName", { required: true })} />
                                    {errors.fullName && <span className='text-danger'>This field is required</span>}
                                </div>
                                <div className='mb-3'>
                                    <label className='' htmlFor='mail'>Email</label>
                                    <input type='email' className='form-control' id='mail'
                                        placeholder='Enter Your Email'
                                        {...register("email", { required: true })} />
                                    {errors.email && <span className='text-danger'>This field is required</span>}
                                </div>
                                <div className='mb-3'>
                                    <label className='' htmlFor='pwd'>Password</label>
                                    <input type='password' className='form-control' id='pwd'
                                        placeholder='Enter Your Password'
                                        {...register("password", { required: true })} />
                                    {errors.password && <span className='text-danger'>This field is required</span>}
                                </div>
                                <div className='text-center'>
                                    <button className='btn btn-dark bg-pink border-0 w-100 mb-1'>SignUp</button>
                                    {/* <p className='mb-0  fw-semibold'>Not Registered?{' '}
                                        <NavLink to='/' className='text-primary text-decoration-underline'>Login</NavLink>
                                    </p> */}
                                    <p className='mb-0  fw-semibold'>Have Account?{' '}
                                        <a href='' className='text-primary text-decoration-underline'
                                            data-bs-toggle='modal' data-bs-target='#loginModal'
                                        >Login</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Login />
        </>
    )
}

export default Signup;