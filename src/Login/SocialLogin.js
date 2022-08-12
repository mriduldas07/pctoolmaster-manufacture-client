import React from 'react';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth'
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineGithub } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router-dom'
import auth from '../firebase.init';
import Loading from '../Shared/Loading';
import useToken from '../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [token] = useToken(user);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    if (loading || gitLoading) {
        <Loading></Loading>
    }
    if (error || gitError) {
        console.log(error?.message || gitError?.message);
    }
    if (user || token || gitUser) {
        navigate(from, { replace: true })
    }
    return (
        <div className='flex justify-center gap-x-3 w-full'>
            <div className="tooltip" data-tip="Sign In With Google">
                <button class="btn btn-ghost btn-outline" onClick={() => signInWithGoogle()}><FcGoogle size={30}></FcGoogle></button>
            </div>
            <div className="tooltip" data-tip="Sign In With GitHub">
                <button class="btn btn-ghost btn-outline" onClick={() => signInWithGithub()}><AiOutlineGithub size={30}></AiOutlineGithub></button>
            </div>
        </div>
    );
};

export default SocialLogin;