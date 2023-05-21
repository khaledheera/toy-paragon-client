import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DollDetails = () => {
    const details=useLoaderData()
    const {picture,name,price,Rating,description,quantity,sellerEmail,sellerName}=details
   return (
    <div className="hero min-h-screen bg-[#00685E]  glass shadow-2xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
    <div className="hero-content flex-col lg:flex-row">
      <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">{name}</h1>
        <p className="py-6">{description}</p>
        <p><span className='font-bold'>Price: $</span>{price}</p>
        <p><span className='font-bold'>Rating: </span>{Rating} Star</p>
        <p><span className='font-bold'>Quantity: </span>{quantity} </p>
        <p><span className='font-bold'>Seller Name: </span>{sellerName} </p>
        <p><span className='font-bold'>Seller Email: </span>{sellerEmail} </p>
        <Link to="/gdhg" className="btn btn-primary">Buy Now</Link>
      </div>
    </div>
  </div>
    );
};

export default DollDetails;