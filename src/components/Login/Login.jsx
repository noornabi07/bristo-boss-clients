import React, { useContext, useEffect, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        loadCaptchaEnginge(6); 
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your login has success',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const hanldeValidateCaptcha = e =>{
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 rounded-xl">
                <div className="hero-content mt-20 flex-col lg:flex-row">

                    <div className="mr-20 w-1/2">
                        <img src={loginImg} alt="" />
                    </div>

                    <div className="card flex-shrink-0 mt-10 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center text-red-600">Login now!</h1>

                            <p className='text-2xl text-center font-semibold text-green-600'></p>
                            <p className='text-2xl text-center font-semibold text-orange-400'></p>

                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover font-bold text-red-600">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={hanldeValidateCaptcha} type="text" name='captcha' placeholder="type captcha code" className="input input-bordered" />

                                    <button className="btn btn-outline btn-xs mt-2">validate</button>

                                </div>

                                <div className="form-control mt-6">
                                    <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='text-center mt-5 font-semibold text-orange-500'>Don't Have An Account? <Link to="/register" className='text-lime-700 underline'>Register</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;