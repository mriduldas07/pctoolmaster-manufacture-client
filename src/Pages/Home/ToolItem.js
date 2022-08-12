import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolItem = ({ tool }) => {
    const navigate = useNavigate();
    const { _id, name, img, description, minimumQuantity, availableQuantity, price } = tool;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-3">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description?.slice(0, 100) + '...'}</p>
                <p>Minimum Quantity: {minimumQuantity}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p><small>Price: $ {price}</small></p>
                <div className="card-actions">
                    <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-success w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolItem;