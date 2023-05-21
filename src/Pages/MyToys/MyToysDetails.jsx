import React from 'react';
import { Link } from 'react-router-dom';
import UpdateMyToys from './UpdateMyToys';

const MyToysDetails = ({myToy,deleteToy,updateMyToys,index}) => {
    const {_id,sellerName,name,subCategory,price,quantity}=myToy;
    


    return (
        
             <tr>
              <td>{index+1}</td>
             <td>{sellerName}</td>
             <td>{name}</td>
             <td>{subCategory}</td>
             <td>${price}</td>
             <td>{quantity}</td>
            
            <td >
             <div className='flex justify-items-start gap-2'>
             <Link to={'/updateMyToys'} state={myToy}>
              
              <button className='btn btn-info'>Update</button>
              </Link>
             
            <Link onClick={() => deleteToy(_id)}  className=" btn btn-error">Delete </Link>
            
             </div>
            </td>
          
            
             
         </tr>
            
          
    );
};

export default MyToysDetails;