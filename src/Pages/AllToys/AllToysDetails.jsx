import React from 'react';
import { Link, } from 'react-router-dom';

const AllToysDetails = ({toy,index}) => {
    const {_id,sellerName,name,subCategory,price,quantity}=toy;
    return (
        
             
           
           <tr>
           
          
           <td>{index+1}</td>
           <td>{sellerName}</td>
           <td>{name}</td>
           <td>{subCategory}</td>
           <td>${price}</td>
           <td>{quantity}</td>
          <div>
          <Link to={`/dollDetails/${_id}`} className="btn btn-info">View Details  </Link>
          </div>
          
           
       </tr>
          
             
       
    );
};

export default AllToysDetails;