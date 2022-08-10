import React, { useEffect, useState } from "react";
import HomeReview from "./HomeReview";

const HomeReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div className="my-10">
            <div className="divider divider-vertical"></div>
            <h5 className="text-center text-4xl font-mono text-accent my-3">
                Our Customer Review
            </h5>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
                {reviews?.slice(0, 3)?.map((review) => (
                    <HomeReview key={review._id} details={review} />
                ))}
            </div>
        </div>
    );
};

export default HomeReviews;