import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from "react-toastify";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const AddReviewModal = () => {
    const [user, loading, error] = useAuthState(auth);
    const [tools, setTools] = useState([]);
    const [toolName, setToolName] = useState("");
    const [rating, setRating] = useState("");

    useEffect(() => {
        const url = `http://localhost:5000/tools`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data))
    }, []);


    const handleAddReview = e => {
        e.preventDefault();
        const userReview = e.target.review.value;

        let photoURL = "";
        if (user?.photoURL !== null) {
            photoURL = user.photoURL;
        } else {
            photoURL = "https://i.ibb.co/56d3Hfw/images.png";
        }

        const review = {
            toolName: toolName,
            userReview: userReview,
            userRating: rating,
            reviewEmail: user.email,
            reviewName: user.displayName,
            reviewPhoto: photoURL
        };

        fetch(`http://localhost:5000/review`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json)
            .then(data => {
                toast.success("Your Review Submitted.Thanks For your opinion...");
                e.target.reset();
            })
    };

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        console.log(error.message);
    }
    return (
        <div>
            <input type="checkbox" id="AddReview-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="AddReview-Modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">Product Review</h3>
                    <form onSubmit={handleAddReview} className="py-4">
                        <div className="form-control mb-5">
                            <select
                                className="select select-bordered w-full"
                                onChange={(e) => setToolName(e.target.value)}
                            >
                                <option disabled>
                                    Pick a product
                                </option>
                                {tools.map((product, index) => (
                                    <option key={index} value={product.name}>
                                        {product.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="email"
                                value={user?.email}
                                readOnly
                                className="input input-primary"
                            />
                        </div>
                        <div className="form-control mt-5">
                            <textarea
                                name="review"
                                required
                                className="textarea textarea-primary"
                                placeholder="Enter Your Review"
                            ></textarea>
                        </div>

                        <div className="form-control mt-5">
                            <div className="rating rating-lg rating-half">
                                <input type="radio" className="rating-hidden" />
                                <input
                                    type="radio"
                                    value=".5"
                                    onChange={(e) => setRating(e.target.value)}
                                    className="bg-green-500 mask mask-star-2 mask-half-1"
                                />
                                <input
                                    type="radio"
                                    value="1"
                                    onChange={(e) => setRating(e.target.value)}
                                    className="bg-green-500 mask mask-star-2 mask-half-2"
                                />
                                <input
                                    type="radio"
                                    value="1.5"
                                    onChange={(e) => setRating(e.target.value)}
                                    className="bg-green-500 mask mask-star-2 mask-half-1"
                                />
                                <input
                                    type="radio"
                                    value="2"
                                    onChange={(e) => setRating(e.target.value)}
                                    className="bg-green-500 mask mask-star-2 mask-half-2"
                                />
                                <input
                                    type="radio"
                                    value="2.5"
                                    onChange={(e) => setRating(e.target.value)}
                                    className="bg-green-500 mask mask-star-2 mask-half-1"
                                />
                                <input
                                    type="radio"
                                    value="3"
                                    onChange={(e) => setRating(e.target.value)}
                                    className="bg-green-500 mask mask-star-2 mask-half-2"
                                />
                                <input
                                    type="radio"
                                    value="3.5"
                                    onChange={(e) => setRating(e.target.value)}
                                    className="bg-green-500 mask mask-star-2 mask-half-1"
                                />
                                <input
                                    type="radio"
                                    value="4"
                                    onChange={(e) => setRating(e.target.value)}
                                    className="bg-green-500 mask mask-star-2 mask-half-2"
                                />
                                <input
                                    type="radio"
                                    value="4.5"
                                    onChange={(e) => setRating(e.target.value)}
                                    className="bg-green-500 mask mask-star-2 mask-half-1"
                                />
                                <input
                                    type="radio"
                                    value="5"
                                    onChange={(e) => setRating(e.target.value)}
                                    className="bg-green-500 mask mask-star-2 mask-half-2"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="btn btn-outline btn-success">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReviewModal;