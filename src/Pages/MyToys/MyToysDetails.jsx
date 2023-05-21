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
            
            <td>
              <Link to={'/updateMyToys'} state={myToy}>
              
              <button className='btn btn-info'>Update</button>
              </Link>
              {/* <UpdateMyToys
            
             

            UpdateMyToys={updateMyToys}
           
            ></UpdateMyToys> */}
            </td>
            
            
           <td> <Link onClick={() => deleteToy(_id)}  className="btn btn-info">Delete </Link></td>
          
            
             
         </tr>
            
          
    );
};

export default MyToysDetails;