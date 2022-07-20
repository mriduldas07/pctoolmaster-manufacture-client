import React from 'react';

const Blogs = () => {
    return (
        <div className="min-h-screen">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co/nmm0Ypv/1616394211.jpg"
                            alt="Movie"
                            className="rounded-lg"
                        />
                    </figure>
                    <div className="card-body">
                        <h1 className="card-title text-primary font-semibold text-2xl">
                            How will you improve the performance of a React Application?
                        </h1>
                        <p className="font-medium text-xl">
                            In React, function components and PureComponent provide two
                            different ways of optimizing React apps at the component level.
                            Function components prevent constructing class instances while
                            reducing the overall bundle size as it minifies better than
                            classes. On the other hand, in order to optimize UI updates, we
                            can consider converting function components to a PureComponent
                            class (or a class with a custom shouldComponentUpdate method).
                            However, if the component doesn't use state and other life cycle
                            methods, the initial render time is a bit more complicated when
                            compared to function components with potentially faster updates.
                        </p>
                        <a href="#" className="btn-link">
                            Read more
                        </a>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co/F5dbGXx/Reactstatepng.png"
                            alt="Movie"
                            className="rounded-lg"
                        />
                    </figure>
                    <div className="card-body">
                        <h1 className="card-title text-primary font-semibold text-2xl">
                            What are the different ways to manage a state in a React
                            application?
                        </h1>
                        <p className="font-medium text-xl">
                            <strong>Local (UI) state:</strong>
                            <br />
                            Local state is data we manage in one or another component. Local
                            state is most often managed in React using the useState hook. For
                            example, local state would be needed to show or hide a modal
                            component or to track values for a form component, such as form
                            submission, when the form is disabled and the values of a form's
                            inputs. <br />
                            <strong>Global (UI) state:</strong>
                            <br />
                            Global state is data we manage across multiple components.Global
                            state is necessary when we want to get and update data anywhere in
                            our app, or in multiple components at least. A common example of
                            global state is authenticated user state. If a user is logged into
                            our app, it is necessary to get and change their data throughout
                            our application. Sometimes state we think should be local might
                            become global.
                        </p>
                        <a href="#" className="btn-link">
                            Read more
                        </a>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co/cQw0BS5/inheritance.png"
                            alt="Movie"
                            className="rounded-lg"
                        />
                    </figure>
                    <div className="card-body">
                        <h1 className="card-title text-primary font-semibold text-2xl">
                            How does prototypical inheritance work?
                        </h1>
                        <p className="font-medium text-xl">
                            Prototype-based programming is a style of object-oriented
                            programming in which behaviour reuse (known as inheritance) is
                            performed via a process of reusing existing objects that serve as
                            prototypes. This model can also be known as prototypal,
                            prototype-oriented, classless, or instance-based programming.
                        </p>
                        <p className="font-medium text-xl">
                            The Prototypal Inheritance is a feature in javascript used to add
                            methods and properties in objects. It is a method by which an
                            object can inherit the properties and methods of another object.
                            Traditionally, in order to get and set the [[Prototype]] of an
                            object, we use Object. getPrototypeOf and Object.
                        </p>
                        <a href="#" className="btn-link">
                            Read more
                        </a>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co/k5KxYbd/unit-testing.webp"
                            alt="Movie"
                            className="rounded-lg"
                        />
                    </figure>
                    <div className="card-body">
                        <h1 className="card-title text-primary font-semibold text-2xl">
                            What is a unit test? Why should write unit tests?
                        </h1>
                        <p className="font-medium text-xl">
                            <strong>Unit Test</strong> This is a type of testing which is done
                            by software developers in which the smallest testable module of an
                            application - like functions, procedures or interfaces - are
                            tested to ascertain if they are fit to use.
                        </p>
                        <p className="font-medium text-xl">
                            <strong>Objective </strong> The main objective of unit testing is
                            to ensure that each individual part is working well and as it's
                            supposed to work. The entire system will only be able to work well
                            if the individual parts are working well. Unit testing is
                            performed by the software developers themselves.
                        </p>
                        <a href="#" className="btn-link">
                            Read more
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;