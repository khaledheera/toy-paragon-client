import React, { useEffect, useState } from 'react';
import SatisfiedPeopleCard from './SatisfiedPeopleCard';

   

const SatisfiedPeople = () => {
    const [satisfy, setSatisfy] = useState([]);

    useEffect(() => {
        fetch('satisfy.json')
            .then(res => res.json())
            .then(data => setSatisfy(data));
    }, [])
    return (
       <div className='bg-[#00685E] '>
         <div className=' glass rounded shadow-lg text-black px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h2 className='font-sans text-3xl font-bold text-center'>Satisfied People from Toy Paragon Services</h2>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

            <div className='grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
                {
satisfy.map(satisfied=><SatisfiedPeopleCard
key={satisfied.id}
satisfied={satisfied}
></SatisfiedPeopleCard>)
                }
            </div>
            </div>
            
        </div>
       </div>
    );
};

export default SatisfiedPeople;