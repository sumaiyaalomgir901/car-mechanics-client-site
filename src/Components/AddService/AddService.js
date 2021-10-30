import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:1003/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Successfully added service");
        reset();
      }
    });
  };
  return (
    <div className="add-service">
      <h3 className="mt-5 mb-3">Add Your Service</h3>
      <form className="mx-auto py-5 shadow" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-75 mx-auto mb-3 border py-2 ps-2 rounded"
          {...register("serviceName", { required: true })}
          placeholder="Service Name"
        />
        <textarea
          className="w-75 mx-auto mb-3 border py-2 ps-2 rounded"
          rows="8"
          {...register("serviceDescription", { required: true })}
          placeholder="Service Description"
        />

        <input
          className="w-75 mx-auto mb-3 border py-2 ps-2 rounded"
          {...register("serviceImage", { required: true })}
          placeholder="Service Image URL"
        />
        <input
          className="w-75 mx-auto mb-3 border py-2 ps-2 rounded"
          type="number"
          {...register("servicePrice", { required: true })}
          placeholder="Service Price"
        />
        <input
          className="w-50 mx-auto border bg-success text-white fw-bold fs-5 rounded py-2 "
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddService;
