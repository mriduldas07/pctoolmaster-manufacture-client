import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = e => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    const navItem = <>
        <li><NavLink to={`/home`}>Home</NavLink></li>
        <li><NavLink to={`/blogs`}>Blogs</NavLink></li>
        <li><NavLink to={`/contactUs`}>Contact us</NavLink></li>
        {
            user ? '' : <li><NavLink to={`/login`}>Login</NavLink></li>
        }
    </>
    return (
        <div class="navbar">
            <div class="navbar">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to={`/`} class="btn btn-ghost normal-case text-xl">PCtool Master</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navItem}
                </ul>
            </div>
            {
                user ?
                    <>
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    {
                                        user?.photoURL
                                            ?
                                            <img src={user?.photoURL} alt='' />
                                            :
                                            <img src={'https://i.ibb.co/56d3Hfw/images.png'} alt="" />
                                    }
                                </div>
                            </label>
                            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to="/dashboard" class="justify-between">
                                        Dashboard
                                        <span class="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link to="/login" onClick={handleLogOut} className="text-error">Logout</Link></li>
                            </ul>
                        </div>
                    </>
                    :
                    ""
            }
        </div>
    );
};

export default Navbar;