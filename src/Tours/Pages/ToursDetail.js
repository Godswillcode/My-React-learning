import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "./Tours.css";
import { TourContext } from "../Components/TourProvider";

const ToursDetail = () => {
  const [tours] = useContext(TourContext);
  const { tourName } = useParams();

  const tourItem = tours.find((p) => p.id === tourName);
  let tourData;

  if (tourItem) {
    tourData = (
      <div
        className="content-wrapper img-thumbnail"
        style={{ marginTop: "8rem" }}
      >
        <img
          src={tourItem.image}
          className="img-fluid"
          alt="my_image"
          style={{ height: 500, width: "100%" }}
        />

        <div className="container-fluid pb-3">
          <div className="d-flex justify-content-between pt-4 pb-3">
            <h4 className="text-left">{tourItem.name}</h4>
            <p className="text-primary">$ {tourItem.price}</p>
          </div>
          <p className="text-justify">{tourItem.info}</p>
        </div>
      </div>
    );
  } else {
    tourData = (
      <div className="page-wrap">
        <div className="container d-flex justify-content-center align-items-center wrapper">
          <div className="content-wrap text-center p-3">
            <h1>404</h1>
            <h4>OPPS! TOUR NOT FOUND</h4>
            <p>Sorry, the product your are looking for does not exist </p>

            <Link to="/tours" className="btn btn-outline-primary">
              Return to tours
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <div>{tourData}</div>;
};

export default ToursDetail;
