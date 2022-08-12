import React from 'react';
import { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from '../hooks/useAdmin';
import auth from '../firebase.init'
import { useEffect } from 'react';
import OrderRow from './OrderRow';
import Loading from '../Shared/Loading';

const ManageOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://dry-ridge-79622.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders, admin])

    if (loading) {
        <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Product Name</th>
                        <th>quantity</th>
                        <th>shipping Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <OrderRow key={order._id} index={index} order={order} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;