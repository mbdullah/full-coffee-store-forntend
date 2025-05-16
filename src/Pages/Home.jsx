import React, { useState } from 'react';
import Header from '../components/Header';
import OurPopular from '../components/OurPopular';
import FollowUs from '../components/FollowUs';
import { useLoaderData } from 'react-router';

const Home = () => {
    const initial = useLoaderData();
    const [coffees, setCoffees] = useState(initial);
    return (
        <div>
            <Header></Header>
            <OurPopular coffees = {coffees} setCoffees={setCoffees}></OurPopular>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;