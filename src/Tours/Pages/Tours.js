import React, { useContext } from "react";
import "./Tours.css";
import { NavLink, useRouteMatch } from "react-router-dom";
import {TourContext} from '../Components/TourProvider'

function Tours() {
const [tours, setTours, isLoading, isError] = useContext(TourContext)
  const { url } = useRouteMatch();

  if (isLoading) {
    return (
      <div className="text-center">
        <img src="images/loader.gif" alt="loader" />
      </div>
    );
  }

  if (isError) {
    return <h4 className="text-center pt-5">Oops! There was an error</h4>;
  }

  function handleDelete(id) {
    const newShowTour = tours.filter((tourItem) => {
      return tourItem.id !== id;
    });
    setTours(newShowTour);
  }

  ////

  return (
    <div className="container pt-4">
      <div className="title">
        <h2 className="text-center">
          <span className="pr-2">{tours.length !== 0 ? "Our" : "No more"}</span>
          Tours <span>{tours.length}</span>
        </h2>
      </div>
      <div className="underline"></div>

      {tours.map((tourItem) => {
        return (
          <div key={tourItem.id}>
            <TourItem {...tourItem} handleDelete={handleDelete} url={url} />
          </div>
        );
      })}
           {/* <div className="flex justify-content-center text-center">
           <button className="btn btn-outline-primary" onClick={() => setTours(tours)}>Refresh Tours</button>
           </div> */}
    </div>
  );
}

// tourItem component
function TourItem({ image, name, price, info, id, url, handleDelete }) {
  const text = info.slice(0, 150);

  return (
    <div className="text-center mb-3 content-wrapper img-thumbnail">
      <img
        src={image}
        className="img-fluid"
        alt="my_image"
        style={{ height: 500, width: "100%" }}
      />
      <div className="container-fluid">
        <div className="d-flex justify-content-between pt-4 pb-3">
          <h4 className="text-left">{name}</h4>
          <p className="text-primary">$ {price}</p>
        </div>
        <p className="text-justify">
          {text}
          <button className="btn text-primary">
            <NavLink to={`${url}/${id}`}> ...readMore </NavLink>
          </button>
        </p>

        <button
          className="mb-4 btn btn-outline-danger"
          onClick={() => handleDelete(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Tours;
