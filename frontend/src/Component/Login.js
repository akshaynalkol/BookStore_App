import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
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

        await axios.post('http://localhost:4002/user/login', user)
            .then(res => {
                console.log(res.data);
                toast.success('Login Successfully');
                // document.getElementById('loginModal').dataset.dismiss='modal';
                setTimeout(() => {
                    window.location.reload();
                    localStorage.setItem("User", JSON.stringify(res.data.user));
                }, 1000);
            })
            .catch(err => {
                // console.log(err.response.data);
                toast.error('Error : ' + err.response.data.message);
            })
    }
    // console.log(watch("email")) // watch input value by passing the name of it

    return (
        <>
            <div className='modal fade' id='loginModal' data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h4 className='modal-title fw-bold'>Login</h4>
                            <button className='btn-close' data-bs-dismiss='modal'></button>
                        </div>
                        <form className="modal-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-3'>
                                <label className='' htmlFor='email'>Email</label>
                                <input type='email' className='form-control' id='email'
                                    placeholder='Enter Your Email'
                                    {...register("email", { required: true })} />
                                {errors.email && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className='mb-3'>
                                <label className='' htmlFor='password'>Password</label>
                                <input type='password' className='form-control' id='password'
                                    placeholder='Enter Your Password'
                                    {...register("password", { required: true })} />
                                {errors.password && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-dark bg-pink border-0 w-100 mb-1'>Login</button>
                                <p className='mb-0  fw-semibold'>Not Registered?{' '}
                                    <NavLink to='/signup' className='text-primary text-decoration-underline'> SignUp</NavLink>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;