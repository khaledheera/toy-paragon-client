import React, { useEffect, useState } from 'react';
import AllToysDetails from './AllToysDetails';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allToys')
        .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
    }, []);
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
                        </tr>
                    </tbody>
                    <tbody>
                        {
                         toys.map(toy=><AllToysDetails
                         key={toy._id}
                         toy={toy}
                         ></AllToysDetails>)
                        }
                    </tbody>

                </table>
        </div>
    );
};

export default AllToys;