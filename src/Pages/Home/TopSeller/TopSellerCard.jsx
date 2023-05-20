import React from 'react';

const TopSellerCard = ({sell}) => {
    const { photo,name,rating,sales} = sell;
    return (
        <div>
             <div className="p-8 text-black border rounded shadow-sm card  glass px-4 py-5 mx-auto  md:px-24 lg:px-10">
          
          <div className="flex items-center ">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src={photo}
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
             
              <p className="text-sm font-medium leading-4 ">
                {name}
              </p>
              <p className="text-sm font-medium leading-4 ">
                Rating: {rating}
              </p>
              <p className="text-sm font-medium leading-4 ">
                {sales} sales
              </p>
            </div>
          </div>
        </div>
        </div>
    );
};

export default TopSellerCard;