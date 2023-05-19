import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysDetails from './MyToysDetails';

const MyToys = () => {


    const { user } = useContext(AuthContext);
    const [myToys,setMyToys] = useState([]);

    
    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyToys(data)
            }
                
                )
    }, [user.email]);

    const deleteToy = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/myToys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = myToys.filter(myToys => myToys._id !== id);
                        setMyToys(remaining);
                    }
                })
        }
    }
    

    return (
        <div className='px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
             <table className="table w-full">
                   
                    <tbody>
                        <tr>
                            
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {
                        myToys.map(myToy=><MyToysDetails
                         key={myToy._id}
                         myToy={myToy}
                         deleteToy={deleteToy}
                         ></MyToysDetails>)
                        }
                    </tbody>

                </table>
        </div>
    );
};

export default MyToys;