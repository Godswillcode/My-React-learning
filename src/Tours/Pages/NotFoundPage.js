import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="page-wrap">
      <div className="container d-flex justify-content-center align-items-center wrapper">
        <div className="content-wrap text-center p-3">
          <h1>404</h1>
          <h4>OPPS! PAGE NOT FOUND</h4>
          <p>Sorry, the page you are looking for does not exist </p>

          <Link to="/" className="btn btn-outline-primary">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
