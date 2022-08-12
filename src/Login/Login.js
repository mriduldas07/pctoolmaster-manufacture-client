import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import useToken from '../hooks/useToken';
import Loading from '../Shared/Loading';
import Divider from './Divider';
import SocialLogin from './SocialLogin';

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

    const [token] = useToken(user)

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

    if (token || user) {
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
        <>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center flex-1 lg:text-left">
                        <img className='w-96 rounded-lg' src="https://i.ibb.co/WgTwQr8/4860253.jpg" alt="" />
                    </div>
                    <div className="card flex-1 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-center text-3xl'>Login</h1>
                            <form onSubmit={handleSubmitForLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onBlur={handleEmailBlur} type="email" name='email' placeholder="Your Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input onBlur={handlePasswordBlur} type="password" name='password' placeholder="Password" className="input input-bordered" />
                                    <p className='text-error'>{error?.message}</p>
                                    {
                                        loading && <Loading></Loading>
                                    }
                                    <label className="label">
                                        <p>New to PCtool Master?<span className='text-success' style={{ cursor: 'pointer', fontWeight: 700 }} onClick={() => navigate('/register')}> Create an account</span></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-accent">Login</button>
                                </div>
                                <p>Forget Password?<span className='text-warning' style={{ cursor: 'pointer', fontWeight: 700 }} onClick={sendEmailToResetPassword}> Reset Password</span></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Divider></Divider>
            <SocialLogin></SocialLogin>
        </>
    );
};

export default Login;