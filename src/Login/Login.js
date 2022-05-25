import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    if (loading || sending) {
        return <Loading></Loading>
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleSubmitForLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const sendEmailToResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent email to reset password");
        }
        else {
            toast("Please input email first");
        }
    }
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center flex-1 lg:text-left">
                    <img className='w-96 rounded-lg' src="https://i.ibb.co/WgTwQr8/4860253.jpg" alt="" />
                </div>
                <div class="card flex-1 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h1 className='text-center text-3xl'>Login</h1>
                        <form onSubmit={handleSubmitForLogin}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input onBlur={handleEmailBlur} type="email" name='email' placeholder="Your Email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input onBlur={handlePasswordBlur} type="password" name='password' placeholder="Password" class="input input-bordered" />
                                <p className='text-error'>{error?.message}</p>
                                {
                                    loading && <Loading></Loading>
                                }
                                <label class="label">
                                    <p>New to PCtool Master?<span className='text-success' style={{ cursor: 'pointer', fontWeight: 700 }} onClick={() => navigate('/register')}> Create an account</span></p>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-accent">Login</button>
                            </div>
                            <p>Forget Password?<span className='text-warning' style={{ cursor: 'pointer', fontWeight: 700 }} onClick={sendEmailToResetPassword}> Reset Password</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;