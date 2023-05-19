import React from 'react';
import { Link, } from 'react-router-dom';

const AllToysDetails = ({toy}) => {
    const {_id,sellerName,name,subCategory,price,quantity}=toy;
    return (
        <div>
             
           
           <tr>
           
          
              
           <td>{sellerName}</td>
           <td>{name}</td>
           <td>{subCategory}</td>
           <td>${price}</td>
           <td>{quantity}</td>
          <div>
          <Link to={`/dollDetails/${_id}`} className="btn btn-info">View Details  </Link>
          </div>
          
           
       </tr>
          
             
        </div>
    );
};

export default AllToysDetails;