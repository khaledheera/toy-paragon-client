import React from 'react';
import { Link } from 'react-router-dom';

const MyToysDetails = ({myToy,deleteToy,updateToys}) => {
    const {_id,sellerName,name,subCategory,price,quantity}=myToy;
    


    return (
        
             <tr>
             <td>{sellerName}</td>
             <td>{name}</td>
             <td>{subCategory}</td>
             <td>${price}</td>
             <td>{quantity}</td>
            
            <td><Link onClick={()=>updateToys(_id)} className="btn btn-info">Update  </Link></td>
            
            
           <td> <Link onClick={() => deleteToy(_id)}  className="btn btn-info">Delete </Link></td>
          
            
             
         </tr>
            
          
    );
};

export default MyToysDetails;