import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';
import UpdateProduct from './UpdateProduct';

const ManageProducts = () => {
    const [user, loading] = useAuthState(auth);
    const [tools, setTools] = useState([]);
    const [toolDetails, setToolDetails] = useState(null);
    const [isReload, setIsReload] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/tools`)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [user.email, isReload]);

    if (loading) {
        <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Img</th>
                        <th>Price</th>
                        <th>Minimum Order</th>
                        <th>Quantity</th>
                        <th>Admin Email</th>
                        <th>Delete</th>
                        <th>Update</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tools.map((pd, index) => (
                        <ProductRow
                            key={pd._id}
                            index={index}
                            details={pd}
                            setToolDetails={setToolDetails}
                        />
                    ))}
                </tbody>
            </table>
            {toolDetails && (
                <DeleteConfirmModal
                    details={toolDetails}
                    key={toolDetails._id}
                    setProductDetails={setToolDetails}
                    isReload={isReload}
                    setIsReload={setIsReload}
                />
            )}
            {toolDetails && (
                <UpdateProduct
                    details={toolDetails}
                    key={toolDetails._id}
                    setProductDetails={setToolDetails}
                    isReload={isReload}
                    setIsReload={setIsReload}
                />
            )}
        </div>
    );
};

export default ManageProducts;