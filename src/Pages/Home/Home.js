import React from 'react';
import Banner from './Banner';
import CustomerSupport from './CustomerSupport';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <CustomerSupport></CustomerSupport>
        </div>
    );
};

export default Home;