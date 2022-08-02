import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = ({ details, index, refetch }) => {
    const {
        customer_name,
        customer_email,
        customer_phone,
        product_name,
        quantity,
        price,
        shipping_address,
        productId
    } = details;

    const handleOrderCancel = () => {
        const proceed = window.confirm("Are you sure to delete this order?");
        if (proceed) {
            fetch(`http://localhost:5000/orderCancel/${productId}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    refetch();
                    toast.success("Order delete successfully done");
                });
        };
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{customer_name}</td>
            <td>{customer_email}</td>
            <td>{customer_phone}</td>
            <td>{product_name}</td>
            <td>{quantity}</td>
            <td>$ {price}</td>
            <td>{shipping_address}</td>
            <td>{productId}</td>
            <td>
                <button className='btn btn-error btn-outline btn-sm' onClick={handleOrderCancel}>
                    Delete Order
                </button>
            </td>
        </tr>
    );
};

export default Order;