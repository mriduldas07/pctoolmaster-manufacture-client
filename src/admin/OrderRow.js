import React from 'react';

const OrderRow = ({ order, index }) => {
    const {
        customer_name,
        customer_email,
        customer_phone,
        product_name,
        quantity,
        shipping_address
    } = order
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
                <button className="btn btn-sm btn-success btn-outline">Delivery</button>
            </td>
        </tr>
    );
};

export default OrderRow;