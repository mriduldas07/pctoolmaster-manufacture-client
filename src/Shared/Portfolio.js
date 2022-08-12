import {
    faCode,
    faGraduationCap,
    faLink,
    faMailBulk,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import myPic from '../Assets/MyPic.JPG'

const Portfolio = () => {
    return (
        <div className="min-h-screen">
            <div className="grid gap-5 items-start lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
                <div className="avatar">
                    <div className="rounded mt-8">
                        <img src={myPic} alt="Developer Rayhan" className="w-6/12" />
                    </div>
                </div>
                <div className="">
                    <div className="card bg-info sm:mt-5">
                        <div className="card-body">
                            <h2 className="card-title text-4xl">I'm Mridul Chandra Das</h2>
                            <h2 className="card-title text-2xl font-bold">
                                Passionate Web Developer
                            </h2>
                            <p className="text-xl">
                                I am a student of BSC in Textile of Pabna Textile Enginerring College,Pabna,
                                Bachelor of Textile Engineering Major in Fabric Engineering.
                            </p>
                            <p className="text-xl">
                                I love to programming for my own desire i learn HTML, CSS,
                                Javascript, Bootstrap, Tailwind CSS, React JS, Node JS, Express
                                JS and MongoDB
                            </p>
                            <p className="text-xl">
                                I'm a passionate Web developer. In my university carrier i'm
                                focus of this web development sector. I'm tech enthusiast and
                                love to take new challenge in daily life also love every new
                                technology taking to easily for increase my Professional Carrier
                                Development.
                            </p>

                            <p className="text-xl">
                                I believe if any chance come to me prove this sector i'm the
                                best, i will do my best for achieve this.
                            </p>
                            <div className="grid gap-2 lg:grid-cols-9 md:grid-cols-4 sm:grid-cols-3">
                                <label className="badge bg-success text-black">HTML</label>
                                <label className="badge bg-info text-black">CSS</label>
                                <label className="badge bg-primary text-black">Bootstrap</label>
                                <label className="badge bg-blue-500 text-black">Tailwind</label>
                                <label className="badge bg-warning text-white">
                                    Javascript
                                </label>
                                <label className="badge bg-primary text-black">ReactJS</label>
                                <label className="badge bg-accent text-white">NodeJS</label>
                                <label className="badge bg-success text-black">Expressjs</label>
                                <label className="badge bg-warning text-white">Github</label>
                                <label className="badge bg-blend-darken text-white">
                                    MongoDB
                                </label>
                                <label className="badge ">Firebase</label>
                                <label className="badge bg-red-400 text-black">Heroku</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div>
                <div className="mt-5">
                    <h1 className="text-4xl font-mono my-10 text-accent font-bold">
                        Education Background
                    </h1>
                </div>
                <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center">
                    <div>
                        <ul>
                            <FontAwesomeIcon
                                icon={faGraduationCap}
                                className="text-accent text-2xl"
                            />
                            <li className="text-2xl">BSc in Textile Engineering</li>
                            <p className="text-xl">Major in Fabric Engineering</p>
                            <p className="text-xl">Pabna Textile Enginerring College,Pabna</p>
                            <p className="text-xl">(Current Student)</p>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <FontAwesomeIcon
                                icon={faGraduationCap}
                                className="text-accent text-2xl"
                            />
                            <li className="text-2xl">Higher Secondary Certificate(HSC)</li>
                            <p className="text-xl">
                                Board of Intermediate and Secondary Education, Dhaka.
                            </p>
                            <p className="text-xl">Govt. Shahid Smirity college, Muktagacha</p>
                            <p className="text-xl">Science Group</p>
                            <p className="text-xl">Passing Year 2019</p>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <FontAwesomeIcon
                                icon={faGraduationCap}
                                className="text-accent text-2xl"
                            />
                            <li className="text-2xl">SecondarySchool Certificate(SSC)</li>
                            <p className="text-xl">Board of Intermediate and Secondary Education, Dhaka.</p>
                            <p className="text-xl">Nobarun Bidyaniketon, Muktagacha</p>
                            <p className="text-xl">Science Group</p>
                            <p className="text-xl">Passing Year 2017</p>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div>
                <div className="mt-5">
                    <h1 className="text-4xl font-mono my-10 text-accent font-bold">
                        Contact Me
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="grid gap-5 grid-cols-1 justify-start items-center">
                        <span>
                            <FontAwesomeIcon
                                icon={faMailBulk}
                                className="text-accent text-2xl"
                            />
                            <a className="btn btn-link" href="mailto:mriduldas0325@gmail.com">
                                Email
                            </a>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faPhone} className="text-accent text-2xl" />
                            <a className="btn btn-link" href="tel:01961534220">
                                Contact Number
                            </a>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faLink} className="text-accent text-2xl" />
                            <a
                                className="btn btn-link"
                                href="https://www.linkedin.com/mwlite/in/mridul-das-8ba910220"
                            >
                                Linkedin
                            </a>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faCode} className="text-accent text-2xl" />
                            <a className="btn btn-link" href="https://github.com/mriduldas07">
                                Github
                            </a>
                        </span>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2>My Three Best Project Link</h2>
                            <i>1. <a href="https://ubiquitous-rolypoly-5c27e0.netlify.app">Portfolio</a></i>
                            <i>2. <a href="https://deft-crumble-9afc77.netlify.app
                            ">Phone Zone (Products Stock website)</a></i>
                            <i>3. <a href="https://travelers-web.netlify.app">Travelers(a travel guide website)</a></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;