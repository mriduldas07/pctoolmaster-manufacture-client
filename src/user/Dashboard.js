import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';
import { AiOutlineBars } from "react-icons/ai";

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        console.log(error);
    }

    const dashboardNavItem = (
        <React.Fragment>
            <>
                <li>
                    <Link to="/dashboard">My Order</Link>
                </li>
                <li>
                    <Link to="/dashboard/review">My Review</Link>
                </li>
                <li>
                    <Link to="/dashboard/myProfile">My Profile</Link>
                </li>
            </>
        </React.Fragment>
    )
    return (
        <div className="">
            <div className="drawer drawer-mobile">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    <div className="flex flex-row justify-between items-center">
                        <span className="text-default my-4 font-semibold text-xl">
                            Welcome to Dashboard Mr{" "}
                            <span className="text-error">{user?.displayName}</span>
                        </span>
                        <span>
                            <label
                                htmlFor="dashboard-drawer"
                                className="drawer-button lg:hidden"
                            >
                                <AiOutlineBars size={'1.5rem'}></AiOutlineBars>
                            </label>
                        </span>
                    </div>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {dashboardNavItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;