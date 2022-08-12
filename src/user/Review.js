import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';
import AddReviewModal from './AddReviewModal';

const Review = () => {
    const [user, loading, error] = useAuthState(auth);
    const [data, setData] = useState([]);
    const [isReload, setIsReload] = useState(false)

    useEffect(() => {
        fetch(`https://dry-ridge-79622.herokuapp.com/review/${user?.email}`)
            .then(res => res.json())
            .then(result => setData(result))
    }, [data]);

    const handleReviewCancel = id => {
        const proceed = window.confirm("Are you want to delete this review??");
        if (proceed) {
            fetch(`https://dry-ridge-79622.herokuapp.com/review/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(result => {
                    toast.warning(`Delete your review is that => ${data[0].userReview}`)
                    setIsReload(!isReload)
                })
        }
    }


    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <label className="btn btn-success btn-outline" htmlFor="AddReview-Modal">
                Add Review
            </label>
            <br />
            <div>
                <div className="overflow-x-auto mt-5">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Review</th>
                                <th>Rating</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((review, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index = index + 1}</td>
                                            <td>{review.toolName}</td>
                                            <td>{review.userReview}</td>
                                            <td>{review.userRating}</td>
                                            <td>
                                                <button className='btn btn-error btn-outline btn-sm' onClick={() => handleReviewCancel(review._id)}>
                                                    Delete Review
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <AddReviewModal></AddReviewModal>
        </div>
    );
};

export default Review;