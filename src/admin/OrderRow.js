import React, { useState } from 'react';
import { toast } from 'react-toastify'

const OrderRow = ({ order, index }) => {
    const [isReload, setIsReload] = useState(false);
    const {
        customer_name,
        customer_email,
        customer_phone,
        product_name,
        quantity,
        shipping_address
    } = order;

    const deliveryItem = id => {
        const proceed = window.confirm("Are you sure to deliverd this???");
        if (proceed) {
            fetch(`http://localhost:5000/orderDelivery/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(result => {
                    toast.success(`${product_name}, Delivery Successfully Done`)
                    setIsReload(!isReload)
                })
        }
    }
    return (
        <tr>
            <td>{(index += 1)}</td>
            <td>{customer_name}</td>
            <td>{customer_email}</td>
            <td>{customer_phone}</td>
            <td>{product_name}</td>
            <td>{quantity}</td>
            <td>{shipping_address}</td>
            <td>
                <button className="btn btn-sm btn-success btn-outline" onClick={() => deliveryItem(order._id)}>Delivery</button>
            </td>
        </tr>
    );
};

export default OrderRow;