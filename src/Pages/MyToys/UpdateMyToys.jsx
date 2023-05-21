import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import ReactModal from 'react-modal';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateMyToys = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const {Rating,description,name,picture,quantity,price,_id} = location.state;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      // const  {updateMyToys} = props;
      // console.log(updateMyToys);
      // const updateToy=data=>{
        const updateMyToys = (data) => {
          console.log(data);
          fetch(`http://localhost:5000/updateMyToys/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.modifiedCount > 0) {
                console.log(result);
                toast.success(`${name} updated successfully`)
                navigate('/myToys')
                // setControl(!control);
              }
            });
        };
      // }
    return (
        <div >
  <form
          className="container text-center"
          onSubmit={handleSubmit(updateMyToys)}
        >
          {errors.exampleRequired && <span>This field is required</span>}
          <div>
           <label htmlFor="">Price</label>
            <input
            defaultValue={price}
              className="p-4 m-5 border rounded"
              {...register("price")}
              placeholder="Price"
              type="number"
              
            />
            </div>
            <div>
           <label htmlFor="">Quantity</label>

            <input
            defaultValue={quantity}
              className="p-4 m-5 border rounded"
              {...register("quantity")}
              placeholder="Quantity"
              type="number"
            />
            
            </div>
            
           
            <div >
           <label htmlFor="">Description</label>

            <input
            defaultValue={description}
              className="p-4 m-5 border rounded"
              {...register("description")}
              placeholder="Description"
            /> 
            
            </div>
           
           <div className='text-center'>
           <input className="btn btn-info" value="Update Toy" type="submit" />
           </div>
           
        </form>


        </div>
    );
};

export default UpdateMyToys;


