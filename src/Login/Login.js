import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center flex-1 lg:text-left">
                    <img className='w-96' src="https://i.ibb.co/WgTwQr8/4860253.jpg" alt="" />
                </div>
                <div class="card flex-1 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h1 className='text-center text-3xl'>Login</h1>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Your Email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="Password" class="input input-bordered" />
                            <label class="label">
                                <p>New to PCtool Master?<span className='text-success' style={{ cursor: 'pointer', fontWeight: 700 }} onClick={() => navigate('/register')}> Create an account</span></p>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-accent">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;