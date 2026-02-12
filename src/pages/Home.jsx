import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Heritage from '../components/Heritage';
import ArtOfDetail from '../components/ArtOfDetail';
import InstagramFeed from '../components/InstagramFeed';

const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Heritage />
            <ArtOfDetail />
            <InstagramFeed />
        </>
    );
};

export default Home;
