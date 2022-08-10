import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ setProductDetails, details, isReload, setIsReload }) => {
    const { name, _id } = details

    const handleDelete = () => {
        fetch(`http://localhost:5000/deleteTool/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(result => {
                toast.success("Your Tool Delete Successfully done!");
                setProductDetails(null)
                setIsReload(!isReload)
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="delete-confirm-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">
                        Are You confirm to delete <span className='text-primary'>{name}</span>
                    </h3>
                    <div className="modal-action">
                        <button onClick={handleDelete} className="btn btn-primary">
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;