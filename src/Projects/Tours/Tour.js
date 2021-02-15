import React, { useState, useEffect } from "react";
import TourData from "./TourData";
import "./tour.css";

function Tour() {
  const [showTour, setShowTour] = useState([]);

  // is loading
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setShowTour(TourData);
      setIsLoading(false);
    }, 2000);
  }, []);

  function handleDelete(id) {
    const newShowTour = showTour.filter((tourItem) => {
      return tourItem.id !== id;
    });

    setShowTour(newShowTour);
  }

  function handleRefresh() {
    setShowTour(TourData);
  }

  if (isLoading) {
    return (
      <>
        <h2 className="text-center mt-5">Loading...</h2>
      </>
    );
  }
  return (
    <div className="container">
      <div className="title">
        <h2 className="text-center">
          <span style={{ display: showTour.length === 0 && "none" }}>Our</span>{" "}
          <span style={{ display: showTour.length !== 0 && "none" }}>
            No more
          </span>{" "}
          Tours
        </h2>
      </div>
      <div className="underline"></div>
      {showTour.map((tourItem) => {
        return (
          <div key={tourItem.id}>
            <TourItem {...tourItem} handleDelete={handleDelete} />
          </div>
        );
      })}

      <div className="text-center">
        <button
          className="btn btn-danger mt-2"
          onClick={handleRefresh}
          style={{ display: showTour.length !== 0 && "none" }}
        >
          Refresh Tours
        </button>
      </div>
    </div>
  );
}

function TourItem({ image, name, info, price, handleDelete, id }) {
  const [readMore, setReadMore] = useState(true);

  const text = readMore ? info.slice(0, 260) : info;

  const read = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="text-center mb-3 content-wrapper img-thumbnail">
      <img src={image} className="img-fluid" alt="my_image" />
      <div className="container">
        <div className="d-flex justify-content-between container pt-4 pb-3">
          <h4>{name}</h4>
          <p className="text-primary">$ {price}</p>
        </div>
        <p>
          {text}{" "}
          <button className="btn text-primary" onClick={read}>
            <span>{readMore ? "Read More" : "Read Less"}</span>
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

export default Tour;
