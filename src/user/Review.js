import React from 'react';
import AddReviewModal from './AddReviewModal';

const Review = () => {
    return (
        <div className="">
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

                        </tbody>
                    </table>
                </div>
            </div>
            <AddReviewModal></AddReviewModal>
        </div>
    );
};

export default Review;