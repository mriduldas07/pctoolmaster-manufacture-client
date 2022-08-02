import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import CustomerSupport from './CustomerSupport';
import Faq from './Faq';
import HomeReviews from './HomeReviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <HomeReviews></HomeReviews>
            <CustomerSupport></CustomerSupport>
            <Faq></Faq>
        </div>
    );
};

export default Home;