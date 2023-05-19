import React, { useEffect, useState } from 'react';
import TopSellerCard from './TopSellerCard';

const TopSeller = () => {

    const [seller, setSeller] = useState([]);

    useEffect(() => {
        fetch('topRatedSeller.json')
            .then(res => res.json())
            .then(data => setSeller(data));
    }, [])




    return (
        <div>
            <div className='font-sans text-3xl font-bold text-center'>
                <h2>Top Rated Sellers
                   of the Month</h2>
            </div>
               
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
       
        {
            seller.map(sell=><TopSellerCard
            key={sell.id}
            sell={sell}
            ></TopSellerCard>)
        }
       
        
        
      </div>
    </div>




               
        </div>
    );
};

export default TopSeller;