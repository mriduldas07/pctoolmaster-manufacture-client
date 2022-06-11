import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [toolError, setToolError] = useState('');
    const [quantity, setQuantity] = useState(tool.minimumQuantity);
    const [isReload, setIsReload] = useState(false)
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id, isReload])

    if (loading) {
        return <Loading></Loading>
    }


    const orderSubmit = e => {
        e.preventDefault();
        const customer_name = e.target.name.value;
        const customer_email = e.target.email.value;
        const customer_phone = e.target.phone_number.value;
        const product_name = e.target.product_name.value;
        const quantity = e.target.orderQuantity.value;
        const shipping_address = e.target.shipping_address.value;
        const productId = tool._id;

        const order = {
            customer_name,
            customer_email,
            customer_phone,
            product_name,
            quantity,
            price: tool.price,
            shipping_address,
            productId
        }
        const url = `http://localhost:5000/tools`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json)
            .then(data => {
                e.target.reset();
                setIsReload(!isReload)
            })
    }

    const changeQuantity = e => {
        const typed = parseInt(e.target.value);
        if (typed < 0) {
            return;
        }
        if (typed >= tool.minimumQuantity && typed < tool.availableQuantity) {
            setQuantity(e.target.value);
            setToolError('');
        }
        else {
            setToolError(
                `Order Minimum ${tool.minimumQuantity} to Maximum ${tool.availableQuantity}`
            );
            setQuantity(e.target.value);
        }
    }
    return (
        <div class="hero min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-lg">
                    <div class="card max-w-96 shadow-xl">
                        <div class="card-body">
                            <img src={tool.img} alt="" />
                        </div>
                    </div>
                    <h1 class="text-5xl font-bold mt-5">{tool.name}</h1>
                    <p class="py-6">{tool.description}</p>
                    <form onSubmit={orderSubmit}>
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Customer Email</span>
                            </label>
                            <input type="text" name='email' value={user.email} disabled class="input text-xl input-bordered w-full" />
                            <label class="label">
                                <span class="label-text">Customer Name</span>
                            </label>
                            <input type="text" name='name' value={user.displayName} disabled class="input text-xl input-bordered w-full" />
                            <label class="label">
                                <span class="label-text">Product Name</span>
                            </label>
                            <input type="text" name='product_name' value={tool.name} disabled class="input text-xl input-bordered w-full" />
                            <label class="label">
                                <span class="label-text">Order Quantity</span>
                            </label>
                            <input type="number" name='orderQuantity' placeholder={`Minimum Quantity ${tool.minimumQuantity}`} class="input text-xl input-bordered w-full max-w-xm" onChange={changeQuantity} />
                            <label class="label">
                                <span class="label-text text-error">{toolError}</span>
                            </label>
                            <label class="label">
                                <span class="label-text text-xl">Price (per unit): ${tool.price}</span>
                            </label>
                            <label class="label">
                                <span class="label-text text-xl">Available Quantity: {tool.availableQuantity}</span>
                            </label>
                            <label class="label">
                                <span class="label-text text-xl">Customer Phone No.</span>
                            </label>
                            <input type="number" name='phone_number' class="input text-xl input-bordered w-full" />
                            <label class="label">
                                <span class="label-text text-xl">Product Shipping Address</span>
                            </label>
                            <textarea name="shipping_address" className='textarea textarea-bordered'></textarea>
                            <br />
                        </div>
                        <input type="submit" class="btn btn-success w-full uppercase" value="Order now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;