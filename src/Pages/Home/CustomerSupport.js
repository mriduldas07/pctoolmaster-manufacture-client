
import React from "react";
import { useNavigate } from "react-router-dom";

const CustomerSupport = () => {
    const navigate = useNavigate()
    return (
        <div className="">
            <h3 className="text-center text-primary text-4xl font-medium mt-10">24/7 Online customer service</h3>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co/L6zMmMP/ecomdash-support-chat.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt="Customer support Chat"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Outstanding Customer Service</h1>
                        <p className="py-6">
                            No matter how much you pay, ecomdash provides outstanding customer
                            service to all our users. We also offer many resources to help you
                            get started.
                        </p>
                        <ul>
                            <li>
                                Support guides and videos present step-by-step instructions on
                                how to use our features, along with common workflows.
                            </li>
                            <li className="my-5">
                                Optional professional services help with onboarding, FTP feed
                                setup, and more.
                            </li>
                        </ul>
                        <button className="btn btn-success" onClick={() => navigate('/dashboard')}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSupport;