import React from 'react';
import { Link } from 'react-router-dom'

const Faq = () => {
    return (
        <div className="my-10">
            <h5 className="text-center text-4xl font-mono text-success my-4">
                Frequently Ask Question
            </h5>
            <div className="lg:max-w-xl m-auto">
                <div
                    tabIndex="0"
                    className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box max-w-lg"
                >
                    <div className="collapse-title text-2xl font-medium text-primary">
                        Where are you located?
                    </div>
                    <div className="collapse-content">
                        <p className="text-indigo-500 text-2xl">
                            Our corporate address is 10 Corporate Dr. Burlington, MA 01803.{" "}
                        </p>
                    </div>
                </div>
                <div
                    tabIndex="0"
                    className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box max-w-lg"
                >
                    <div className="collapse-title text-2xl font-medium text-primary">
                        How much do you guys cost?
                    </div>
                    <div className="collapse-content">
                        <p className="text-indigo-500 text-2xl">
                            Our pro packages start at $25 for 30+ sales orders and go up from
                            there. Your monthly cost will change depending on your sales order
                            volume for that month.
                        </p>
                    </div>
                </div>
                <div
                    tabIndex="0"
                    className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box max-w-lg"
                >
                    <div className="collapse-title text-2xl font-medium text-primary">
                        Do you charge an onboarding fee?
                    </div>
                    <div className="collapse-content">
                        <p className="text-indigo-500 text-2xl">
                            Nope! We even throw in a free one-hour onboarding session where
                            we’ll coach you on all the basic setup needs.
                        </p>
                    </div>
                </div>
                <div
                    tabIndex="0"
                    className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box max-w-lg"
                >
                    <div className="collapse-title text-2xl font-medium text-primary">
                        Do I have to sign a contract?
                    </div>
                    <div className="collapse-content">
                        <p className="text-indigo-500 text-2xl">
                            Nope, not at all. You can pay month-to-month or annually for our
                            software and cancel at any time. Though, we do offer an annual
                            package which offers 20% discount off our listed prices.
                        </p>
                    </div>
                </div>
                <div
                    tabIndex="0"
                    className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box max-w-lg"
                >
                    <div className="collapse-title text-2xl font-medium text-primary">
                        I only process 25 orders. Do I still have access to your support
                        team?
                    </div>
                    <div className="collapse-content">
                        <p className="text-indigo-500 text-2xl">
                            Absolutely! Everyone has access to our support services. The only
                            difference is that pro plan users have phone support in addition
                            to live chat and email support.
                        </p>
                    </div>
                </div>
                <div
                    tabIndex="0"
                    className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box max-w-lg"
                >
                    <div className="collapse-title text-2xl font-medium text-primary">
                        Have more questions?
                    </div>
                    <div className="collapse-content">
                        <p className="text-indigo-500 text-2xl">
                            Visit our support center or contact us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;