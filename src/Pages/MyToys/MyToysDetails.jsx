import React from 'react';

const MyToysDetails = ({myToy}) => {
    const {sellerName,name,subCategory,price,quantity}=myToy;
    


    return (
        <div>
             <div>
             <tr>
             <td>{sellerName}</td>
             <td>{name}</td>
             <td>{subCategory}</td>
             <td>${price}</td>
             <td>{quantity}</td>
            <div>
            <Link  className="btn btn-info">Update  </Link>
            </div>
            <div>
            <Link  className="btn btn-info">Delete </Link>
            </div>
            
             
         </tr>
            
               
          </div>
        </div>
    );
};

export default MyToysDetails;