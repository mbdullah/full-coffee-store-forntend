import React from 'react';
import Header from '../components/Header';
import OurPopular from '../components/OurPopular';
import FollowUs from '../components/FollowUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurPopular></OurPopular>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;