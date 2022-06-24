import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';
import Order from './Order';

const Orders = () => {
    const [user, loading, error] = useAuthState(auth);

    const { isLoading, queryError, refetch, data } = useQuery('orderData', () =>
        fetch(`http://localhost:5000/orders/${user?.email}`, {
            method: "GET",
        }).then(res => res.json())
    );

    if (loading || isLoading) {
        return <Loading></Loading>
    }

    if (error || queryError) {
        console.log(error?.message);
    }

    return (
        <div>
            <h2 className="text-success text-2xl">Total Order : {data.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Per Price</th>
                            <th>Shipping Address</th>
                            <th>Order ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((order, index) => (
                            <Order
                                key={order._id}
                                index={index}
                                details={order}
                                refetch={refetch}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;