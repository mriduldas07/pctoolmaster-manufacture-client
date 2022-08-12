import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const [user, loading] = useAuthState(auth);

    const handleSubmitAdd = e => {
        e.preventDefault();
        const CLIENT_API_KEY = `41638383b537c533d6c237f313e5cf71`;
        const admin_name = e.target.admin_name.value;
        const admin_email = e.target.admin_email.value;
        const name = e.target.product_name.value;
        const description = e.target.description.value;
        const minimumQuantity = e.target.min_Order.value;
        const availableQuantity = e.target.quantity.value;
        const price = e.target.price.value;
        const imgURL = e.target.img.files[0];
        const formData = new FormData();

        formData.append("image", imgURL);

        const url = `https://api.imgbb.com/1/upload?key=${CLIENT_API_KEY}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tool = {
                        admin_name,
                        admin_email,
                        name,
                        img,
                        description,
                        minimumQuantity,
                        availableQuantity,
                        price
                    }
                    fetch('https://dry-ridge-79622.herokuapp.com/addTool', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(tool),
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success("Tool added to database succesfully..");
                            e.target.reset();
                        });
                }
            })
    }

    if (loading) {
        <Loading></Loading>
    }

    return (
        <div>
            <form onSubmit={handleSubmitAdd}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Admin Email</span>
                    </label>
                    <input
                        type="email"
                        name="admin_email"
                        readOnly
                        value={user?.email}
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Admin Name</span>
                    </label>
                    <input
                        type="text"
                        value={user?.displayName}
                        readOnly
                        name="admin_name"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        name="product_name"
                        required
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <input
                        type="text"
                        name="description"
                        required
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Quantity</span>
                    </label>
                    <input
                        type="number"
                        name="quantity"
                        required
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Price</span>
                    </label>
                    <input
                        type="number"
                        name="price"
                        required
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Minimum Order</span>
                    </label>
                    <input
                        type="number"
                        name="min_Order"
                        required
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Img</span>
                    </label>
                    <input
                        type="file"
                        name="img"
                        required
                        className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-200
          "
                    />
                </div>

                <div className="form-control mt-6 max-w-sm m-auto">
                    <button className="btn btn-success" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;