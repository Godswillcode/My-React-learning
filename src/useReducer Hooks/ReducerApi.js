import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

const initialState = {
  tours: [],
  isLoading: true,
  isError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOURS":
      return {
        ...state,
        tours: action.payload, isLoading: false
      };

    case "IS_ERROR":
      return { ...state, isError: true, isLoading: false };
    
    default:
      return state;
  }
};

function ReducerApi() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {isLoading, isError, tours} = state
  // const [tours, setTours] = useState([]);
  // const [isLoading, setIsLoading] = useState(true)
  // const [isError, setIsError] = useState(false)

  const getTours = () => {
    axios
      .get("https://course-api.netlify.app/api/react-tours-project")
      .then((response) => {
        dispatch({ type: "SET_TOURS", payload: response.data });
        // setTours(response.data)
        // setIsLoading(false)
      })

      .catch((err) => {
        dispatch({ type: "IS_ERROR" });
        // setIsError(true);
        // setIsLoading(false);
      });
  };

  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center">
        <img src="images/loader.gif" alt="loader" />
      </div>
    );
  }

  if (isError) {
    return <h4>Oops! There was an error</h4>;
  }

  return (
    <div>
      {tours.map((tour) => (
        <h4 key={tour}>{tour.name}</h4>
      ))}
    </div>
  );
}

export default ReducerApi;
