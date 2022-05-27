import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [reload, setReload] = useState(false)
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id])

    if (loading) {
        return <Loading></Loading>
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

                    <div class="form-control w-full max-w-xs">

                        <label class="label">
                            <span class="label-text text-xl">Price (per unit): ${tool.price}</span>
                        </label>
                        <label class="label">
                            <span class="label-text text-xl">Available Quantity: {tool.availableQuantity}</span>
                        </label>
                        <label class="label">
                            <span class="label-text">Order More than Minimum Quantity</span>
                        </label>
                        <input type="number" placeholder={`Minimum Quantity ${tool.minimumQuantity}`} class="input text-xl input-bordered w-full max-w-xm" />
                        <label class="label">
                            <span class="label-text-alt"></span>
                        </label>
                    </div>
                    <button class="btn btn-success w-full">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;