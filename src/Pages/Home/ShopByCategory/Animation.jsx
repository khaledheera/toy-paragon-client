import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Animation = ({animationCharacter}) => {
    const {_id, picture,name,price,Rating} = animationCharacter;

    return (
        <div className="card lg:w-96 glass py-5 mx-auto  md:px-24 lg:px-10">
        <figure><img src={picture} alt="car!"/></figure>
        <div className="card-body text-center">
          <h2 className="card-title justify-center">{name}</h2>
          
          <div className='flex justify-center items-center gap-2 mt-6'>
          <p><span className='font-bold'>Price: $</span>{price}</p>
          <p><span className='font-bold'>Rating: </span>{Rating} Star</p>
            
          </div>
          <NavLink className="card-actions justify-center mt-6">
            <Link to={`/dollDetails/${_id}`} className="btn btn-info">View Details  </Link>
          </NavLink>
        </div>
      </div>
    );
};

export default Animation;