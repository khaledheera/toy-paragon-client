import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddToys = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
   
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
      fetch('https://toy-paragon-server.vercel.app/addToys',{
        method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`${name} Added successfully`)
        navigate('/allToys')
      });
    };
    



    return (
       <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center border bg-orange-200'>
        <Helmet>
			<title> Toy Paragon | Add Toys </title>
			</Helmet>
         
            <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <div>
            <input
              className="p-4 m-5 border rounded"
              {...register("name")}
              placeholder="Doll Name"
             
            />
            <input
              className="p-4 m-5 border rounded"
              {...register("price", { required: true })}
              placeholder="Price"
              type="number"
              
            />
            </div>
            <div>
            <input
              className="p-4 m-5 border rounded"
              {...register("quantity", { required: true })}
              placeholder="Quantity"
              type="number"
            />
            <input
              className="p-4 m-5 border rounded"
              {...register("sellerName")}
              placeholder="Seller Name"
             
            />
            </div>
            <div>
            <input
              className="p-4 m-5 border rounded"
              value={user?.email}
              {...register("sellerEmail")}
              placeholder="Your Email"
              type="email"
            />

        
            <select className="p-4 m-5 border rounded" {...register("subCategory")}>
              <option value="Disney Princes">Disney Princes</option>
              <option value="Frozen Doll">Frozen Doll</option>
              <option value="Animation Characters">Animation Characters</option>
              <option value="Donald Duck">Donald Duck</option>
            </select>
            </div>
           
            <div >
            <input
              className="p-4 m-5 border rounded"
              {...register("picture")}
              placeholder="image link"
              type="url"
             
            />
            
          
            <input
              className="p-4 m-5 border rounded"
              {...register("description")}
              placeholder="Description"
            /> 
            </div>
            <input
              className="p-4 m-5 border rounded"
              {...register("Rating")}
              placeholder="Rating"
              type='number'
            /> 
           <div className='text-center'>
           <input className="btn btn-info" value="Add Toy" type="submit" />
           </div>
          </form>
        </div>
       
    );
};

export default AddToys;