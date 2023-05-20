import React from 'react';
import { useForm } from "react-hook-form";
import ReactModal from 'react-modal';

const UpdateMyToys = (props) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const  {updateMyToys} = props;
      console.log(updateMyToys);
    return (
        <div {...props}>
            
<label htmlFor="my-modal"  className="btn">update</label>
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div     className="modal-box">
  <form
          className="container text-center"
          onSubmit={handleSubmit(updateMyToys)}
        >
          {errors.exampleRequired && <span>This field is required</span>}
          <div>
           
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
            
            </div>
            
           
            <div >
            <input
              className="p-4 m-5 border rounded"
              {...register("description")}
              placeholder="Description"
            /> 
            <input
              className="p-4 m-5 border rounded"
              {...register("name")}
              placeholder="Doll name"
              defaultChecked={props?.myToy?.name}
            /> 
            </div>
           
           <div className='text-center'>
           <input className="btn btn-info" value="Update Toy" type="submit" />
           </div>
           
        </form>
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn text-center justify-center">Close</label>
    </div>
  </div>
</div>


        </div>
    );
};

export default UpdateMyToys;


