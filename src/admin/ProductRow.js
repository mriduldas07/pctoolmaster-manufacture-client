import React from 'react';
import { useState } from 'react';

const ProductRow = ({ details, index, setToolDetails }) => {
    const { name, description, img, minimumQuantity, price, admin_email, availableQuantity, status } = details;
    const [seeMore, setSeeMore] = useState(false);
    return (
        <tr>
            <th>{(index += 1)}</th>
            <td>{name}</td>
            <td>

                {
                    seeMore ? description : description?.slice(0, 50) + '...'
                }
                {
                    seeMore || <button className='btn btn-outline btn-xs btn-success' onClick={() => setSeeMore(!seeMore)}>see more</button>
                }
            </td>
            <td>
                <img src={img} alt={name} />
            </td>
            <td>{price}</td>
            <td>{minimumQuantity}</td>
            <td>{availableQuantity}</td>
            <td>{admin_email}</td>
            <td>
                <label
                    htmlFor="delete-confirm-modal"
                    onClick={() => setToolDetails(details)}
                    className="btn btn-xs btn-error btn-outline"
                >
                    Delete
                </label>
            </td>
            <td>
                <label
                    className="btn btn-xs btn-success btn-outline"
                    onClick={() => setToolDetails(details)}
                    htmlFor="update-product-modal"
                >
                    Update
                </label>
            </td>
            <td>
                {status ? (
                    "Published"
                ) : (
                    "Not Published"
                )}
            </td>
        </tr>
    );
};

export default ProductRow;