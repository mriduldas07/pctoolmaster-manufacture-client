import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import useToken from '../hooks/useToken';
import SocialLogin from './SocialLogin';
import Divider from './Divider';

const Register = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const navigateToLogin = (e) => {
        navigate('/login')
    }
    const [createUserWithEmailAndPassword, user, loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile,
        updating,
    ] = useUpdateProfile(auth);

    const [token] = useToken(user);

    if (updating || loading) {
        return <Loading></Loading>
    }

    if (token || user) {
        navigate('/home');
    }

    const handleNameBlur = e => {
        setDisplayName(e.target.value);
    }
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleRegisterOnSubmit = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Password and Confirm Password must be matched!!!");
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 digits');
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ email: email, displayName: displayName });
        toast.success("New Acount Created")
    }
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center flex-1 lg:text-left">
                        <img className='w-96 rounded-lg' src="https://i.ibb.co/WgTwQr8/4860253.jpg" alt="" />
                    </div>
                    <div className="card flex-1 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-center text-3xl'>Register</h1>
                            <form onSubmit={handleRegisterOnSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input onBlur={handleNameBlur} type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
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
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' placeholder="Confirm Password" className="input input-bordered" />
                                    <label className="label">
                                        <p className='text-error'>{error}</p>
                                        <p>Already Have an account?<span
                                            onClick={navigateToLogin}
                                            className='text-success' style={{ cursor: 'pointer', fontWeight: 700 }}> Login</span></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-accent">Register</button>
                                </div>
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

export default Register;