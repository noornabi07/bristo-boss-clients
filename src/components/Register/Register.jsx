import React, { useContext } from 'react';
import registerImg from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser)

                updateUserProfile(data.name, data.photoURL)

                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'Your account create succuss',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Registration</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 rounded-xl">
                <div className="hero-content mt-20 flex-col lg:flex-row">

                    <div className="mr-20 w-1/2">
                        <img src={registerImg} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center text-red-600">Please Registration</h1>
                            <p className='text-2xl text-center font-semibold text-green-600'></p>
                            <p className='text-2xl text-center font-semibold text-orange-400'></p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* name field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-500'>Name is required</span>}
                                </div>

                                {/* photo field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className='text-red-500'>Photo is required</span>}
                                </div>

                                {/* email field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-500'>Email is required</span>}
                                </div>

                                {/* password field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" {...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 12,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} name='password' placeholder="password" className="input input-bordered" />

                                    {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}

                                    {errors.password?.type === 'minLength' && <p className='text-red-500'>Password add at least 6 character</p>}

                                    {errors.password?.type === 'pattern' && <p className='text-red-500'>Password add must be lowercase, uppercase, special character</p>}

                                    {errors.password?.type === 'maxLength' && <p className='text-red-500'>Password must be less then 12 character</p>}

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover font-bold text-red-600">Forgot password?</a>
                                    </label>
                                </div>

                                {/* submit button */}
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Register" />
                                </div>

                            </form>

                            <div className='text-center'>
                                <SocialLogin></SocialLogin>
                            </div>
                            <p className='text-center mt-5 font-semibold text-orange-500'>Have An Account? <Link to="/login" className='text-lime-700 underline'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;