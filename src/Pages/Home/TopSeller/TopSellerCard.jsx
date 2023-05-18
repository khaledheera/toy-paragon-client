import React from 'react';

const TopSellerCard = ({sell}) => {
    const { photo,name,rating,sales} = sell;
    return (
        <div>
             <div className="p-8 bg-white border rounded shadow-sm">
          
          <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src={photo}
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
             
              <p className="text-sm font-medium leading-4 text-gray-600">
                {name}
              </p>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Rating: {rating}
              </p>
              <p className="text-sm font-medium leading-4 text-gray-600">
                {sales} sales
              </p>
            </div>
          </div>
        </div>
        </div>
    );
};

export default TopSellerCard;