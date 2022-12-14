import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        <Loading></Loading>
    }
    const handleLogOut = e => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    const navItem = <>
        <li><NavLink to={`/home`}>Home</NavLink></li>
        <li><NavLink to={`/allTools`}>All Tools</NavLink></li>
        <li><NavLink to={`/blogs`}>Blogs</NavLink></li>
        <li><NavLink to={`/contactUs`}>Contact us</NavLink></li>
        <li><NavLink to={`/portfolio`}>My Portfolio</NavLink></li>
        {
            user ? '' : <li><NavLink to={`/login`}>Login</NavLink></li>
        }
    </>
    return (
        <div className="navbar">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to={`/`} className="btn btn-ghost normal-case text-xl">PCtool Master</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItem}
                </ul>
            </div>
            {
                user ?
                    <>
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user?.photoURL
                                            ?
                                            <img src={user?.photoURL} alt='' />
                                            :
                                            <img src={'https://i.ibb.co/56d3Hfw/images.png'} alt="" />
                                    }
                                </div>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to="/dashboard" className="justify-between">
                                        Dashboard
                                        <span className="badge">New</span>
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