import { useState } from "react";
// import validate from "./Validate";

const initialState = {
  firstName: "",
  email: "",
  password: "",
  password2: "",
};

const useForm = (validate) => {
  const [formInput, setFormInput] = useState(initialState);

  const [inputArray, setInputArray] = useState([]);
  const [errorMsg, setErrorMsg] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg(validate(formInput));

    //    console.log(object.keys(formErrors));
    if (Object.keys(errorMsg).length) {
      setErrorMsg(validate(formInput));
    } else {
      const newInput = { ...formInput, id: new Date().getTime().toString() };
      setInputArray([...inputArray, newInput]);
      setFormInput(initialState);
      setErrorMsg(initialState);
    }
  };

  return { handleChange, handleSubmit, formInput, inputArray, errorMsg };
};

export default useForm;
