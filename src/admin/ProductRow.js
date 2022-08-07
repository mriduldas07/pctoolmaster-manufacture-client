import React from 'react';

const ProductRow = ({ details, index, setToolDetails }) => {
    const { name, description, img, min_Order, price, stock, status } = details;
    return (
        <tr>
            <th>{(index += 1)}</th>
            <td>{name}</td>
            <td>
                {
                    description?.slice(0, 200) + '...'
                }
            </td>
            <td>
                <img src={img} alt={name} />
            </td>
            <td>{price}</td>
            <td>{min_Order}</td>
            <td>{stock}</td>
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
                    "unPublished"
                )}
            </td>
        </tr>
    );
};

export default ProductRow;