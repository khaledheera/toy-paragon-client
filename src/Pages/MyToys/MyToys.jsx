import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysDetails from "./MyToysDetails";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const { control, setControl } = useState();
 

  useEffect(() => {
    fetch(`https://toy-paragon-server.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyToys(data);
      });
  }, [user?.email]);

  const deleteToy = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`https://toy-paragon-server.vercel.app/myToys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success(`${name} Delete successfully`)
               
            const remaining = myToys.filter((myToys) => myToys._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };

  const updateMyToys = (data) => {
    // console.log(data);
    fetch(`https://toy-paragon-server.vercel.app/updateMyToys/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
        }
        console.log(result);
      });
  };

  const sortingPrice = (event) => {
    const sort = event.target.value;
    // console.log(sort);
    fetch(`https://toy-paragon-server.vercel.app/sort?user=${user?.email}&&sort=${sort}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data)
      });
  };

  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <Helmet>
        <title> Toy Paragon | My Toys</title>
      </Helmet>

      <label className="flex flex-col items-end font-bold mt-10">
        <span className="text-lg mb-2">Sort By Price</span>
        <select onChange={sortingPrice} className="border p-3" name="sort">
          <option value={1}>High To Low</option>
          <option value={-1}>Low To High </option>
        </select>
      </label>


      <table className="table w-full border-8 rounded-lg shadow-lg ">
        <tbody>
          <tr>
            <th>No.</th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Action</th>
            {/* <th>Action</th> */}
          </tr>
        </tbody>
        <tbody>
          {myToys.map((myToy, index) => (
            <MyToysDetails
              index={index}
              key={myToy._id}
              myToy={myToy}
              deleteToy={deleteToy}
              updateMyToys={updateMyToys}
            ></MyToysDetails>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
