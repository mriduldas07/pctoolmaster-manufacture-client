
import React from "react";

const BusinessSummary = () => {
    return (
        <div className="my-20">
            <h4 className="text-center text-primary text-4xl font-medium">
                Our Last 4 year business Summary
            </h4>
            <div className="stats stats-vertical w-full lg:stats-horizontal shadow mt-10">
                <div className="stat">
                    <div className="grid grid-flow-col justify-around items-center">
                        <div>
                        </div>
                        <div>
                            <div className="stat-title font-bold">Success Delivery</div>
                            <div className="stat-value text-secondary">31K</div>
                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>
                    </div>
                </div>

                <div className="stat">
                    <div className="grid grid-flow-col justify-around items-center">
                        <div>
                        </div>
                        <div>
                            <div className="stat-title font-bold">World Wide User</div>
                            <div className="stat-value text-info">4,200</div>
                            <div className="stat-desc">↖ 400 (22% increase per year)</div>
                        </div>
                    </div>
                </div>

                <div className="stat">
                    <div className="grid grid-flow-col justify-around items-center">
                        <div>
                        </div>
                        <div>
                            <div className="stat-title font-bold">Client Satisfaction</div>
                            <div className="stat-value text-success">1,200</div>
                            <div className="stat-desc">↖ (90%)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;