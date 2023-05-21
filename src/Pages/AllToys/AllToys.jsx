import React, { useEffect, useState } from 'react';
import AllToysDetails from './AllToysDetails';
import { Helmet } from 'react-helmet-async';


const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchToys, setSearchToys] = useState("");
    useEffect(()=>{
        fetch('https://toy-paragon-server.vercel.app/allToys')
        .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
    }, []);


    const searchToy = () => {
        fetch(`https://toy-paragon-server.vercel.app/getToysByText/${searchToys}`)
          .then((res) => res.json())
          .then((data) => {
            setToys(data);
          });
      };

    return (
        <div className='px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
          <Helmet>
			<title> Toy Paragon | All Toys </title>
			</Helmet>
             <div className="search-box p-2 text-center ">
          <input
            onChange={(e) => setSearchToys(e.target.value)}
            type="text"
            className="p-1 border shadow-xl"
          />{" "}
          <button className='font-bold' onClick={searchToy }>Search</button>
        </div>
             <table className="table w-full border-8 p-4 rounded-lg shadow-lg ">
                   
                    <tbody>
                        <tr>
                            <th>No.</th>
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
                         toys.map((toy,index)=><AllToysDetails
                         index={index}
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


