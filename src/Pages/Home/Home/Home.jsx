import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import TopSeller from '../TopSeller/TopSeller';
import SatisfiedPeople from '../SatisfiedProple/SatisfiedProple';
import { Helmet } from 'react-helmet-async';




const Home = () => {
    return (
        <div className=' mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl   '>
            <Helmet>
			<title> Toy Paragon | Home</title>
			</Helmet>
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
            <TopSeller/>
            <SatisfiedPeople/>
        </div>
    );
};

export default Home;