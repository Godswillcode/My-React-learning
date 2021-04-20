import React from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";

function FormTest() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      alert(JSON.stringify(data));
    };

  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
       <label>First Name</label>
      <input
        name="firstName"
        ref={register({
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {_.get("firstName.type", errors) === "required" && (
        <p>This field is required</p>
      )}
      {_.get("firstName.type", errors) === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {_.get("firstName.type", errors) === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Laste Name</label>
      <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      {_.get("lastName.type", errors) === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Age</label>a
      <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
      {errors.age && (
        <p>You Must be older then 18 and younger then 99 years old</p>
      )}
      <input type="submit" />
    </form>
    </div>
  );
}

export default FormTest;
