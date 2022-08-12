import React, { useState } from 'react';
import { useAuthState, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [education, setEducation] = useState('');
    const [address, setAddress] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [user, loading] = useAuthState(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [gUser, gLoading] = useSignInWithGoogle(auth);

    if (loading || updating) {
        return <Loading></Loading>
    }
    const educationBlur = e => {
        setEducation(e.target.value);
    }
    const locationBlur = e => {
        setAddress(e.target.value);
    }
    const imgUrlBlur = e => {
        setImgUrl(e.target.value)
    }

    const updateProfileSubmit = async e => {
        e.preventDefault();
        await updateProfile({ photoURL: imgUrl })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col gap-36 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className="avatar online">
                        <div className="w-48 rounded-full">
                            {
                                user?.photoURL
                                    ?
                                    <img src={user?.photoURL} alt='' />
                                    :
                                    <img src={'https://i.ibb.co/nBn1hP3/blank-profile-picture-973460-340.webp'} alt="" />
                            }
                        </div>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-3xl text-center text-secondary'>Update Profile</h1>
                        <form onSubmit={updateProfileSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" value={user?.displayName} disabled className="input input-bordered text-xl" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" value={user?.email} disabled={user?.email} className="input input-bordered text-lg" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <input type="text" onBlur={educationBlur} name="education" placeholder="Education Status" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" onBlur={locationBlur} name='address' placeholder="your Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="photoURL" onBlur={imgUrlBlur} name='imgUrl' placeholder="Your Profile Picture" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Update Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;