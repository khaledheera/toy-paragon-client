import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import TopSeller from '../TopSeller/TopSeller';
import SatisfiedPeople from '../SatisfiedProple/SatisfiedProple';



const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
            <TopSeller/>
            <SatisfiedPeople/>
        </div>
    );
};

export default Home;