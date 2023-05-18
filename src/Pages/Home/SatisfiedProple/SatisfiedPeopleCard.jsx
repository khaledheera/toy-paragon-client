import React from 'react';

const SatisfiedPeopleCard = ({satisfied}) => {
    const { photo,name,review} = satisfied;
    return (
        <div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
     
      <div className="mb-10 sm:text-center ">
        <a href="/" aria-label="Author" className="inline-block mb-1">
          <img
            alt="avatar"
            src={photo}
            className="object-cover w-10 h-10 rounded-full shadow-sm"
          />
        </a>
        <div>
          
          <p className="text-sm font-medium leading-4 text-gray-600">{name}</p>
          <p className="text-sm font-medium leading-4 text-gray-600">"{review}"</p>
          
        </div>
      </div>
    </div>
        </div>
    );
};

export default SatisfiedPeopleCard;