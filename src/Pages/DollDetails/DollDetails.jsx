import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

const DollDetails = () => {
    const details=useLoaderData()
    const {picture,name,price,Rating,description,quantity,sellerEmail,sellerName}=details
   return (
    <div className='bg-[#00685E] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl '>
      <div className="hero min-h-screen bg-[#00685E]  glass shadow-2xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <Helmet>
			<title> Toy Paragon | Doll Details</title>
			</Helmet>
    <div className="hero-content flex-col lg:flex-row">
      <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
      <div className='px-2 py-2'>
        <h1 className="text-5xl font-bold">{name}</h1>
        <p className="py-3">{description}</p>
        <p><span className='font-bold'>Price: </span>{price}</p>
        <p><span className='font-bold'>Rating: </span>{Rating} Star</p>
        <p><span className='font-bold'>Quantity: </span>{quantity} </p>
        <p><span className='font-bold'>Seller Name: </span>{sellerName} </p>
        <p><span className='font-bold '>Seller Email: </span>{sellerEmail} </p>
        <Link  className="btn btn-primary mt-2">Buy Now</Link>
      </div>
    </div>
  </div>
    </div>
    );
};

export default DollDetails;