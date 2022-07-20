import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const form = useRef();

    const sendUs = e => {
        e.preventDefault();

        emailjs.sendForm('service_niw1vpj', 'template_g0ih9dj', form.current, 'CJak_Jyq5AXnQ_Whi')
            .then(result => {
                toast.success("Thanks to contact us!!");
                console.log(result.text);
            }, error => {
                console.log(error.text);
            })
        e.target.reset();
    }

    return (
        <div className="min-h-screen mt-10">
            <h3 className="text-center font-serif text-5xl">
                We’d Love to Hear From You!
            </h3>
            <p className="text-center my-5">
                We’re happy to answer any questions you may have about{" "}
                <strong className="text-secondary">PC Tool Master</strong> Fill
                out the form and we will get in touch with you as soon as possible.
            </p>
            <div className="">
                <div style={{ width: "70%", margin: "auto" }}>
                    <h3 className="lg:text-3xl md:text-2xl sm:text-sm">
                        Have any question about <strong className="text-secondary">PC Tool Master</strong> ?
                    </h3>
                    <form ref={form} onSubmit={sendUs}>
                        <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    name="user_name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    autoComplete="false"
                                    type="text"
                                    name="user_email"
                                    className="input input-bordered"
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input
                                autoComplete="false"
                                type="text"
                                name="company_name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea
                                name="message"
                                className="textarea textarea-bordered"
                            ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success btn-outline btn-sm" type="submit">
                                Send US
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;