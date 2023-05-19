import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DollDetails = () => {
    const details=useLoaderData()
    const {picture,name,price,Rating,description,quantity,sellerEmail,sellerName}=details
   return (
    <div className="hero min-h-screen bg-base-200">
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
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
    );
};

export default DollDetails;