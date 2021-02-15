import React, { useState } from "react";

const Bulb = () => {
  const [isBulbOn, setIsBulbOn] = useState(false);

  const turnOn = () => setIsBulbOn(!isBulbOn);

  return (
    <>
      <h3 className="text-center pt-5">React Bulb</h3>
      <div className="container text-center mt-3 img-thumbnail pt-5 pb-5">
        <img
          src={isBulbOn ? "images/on.gif" : "images/off.gif"}
          alt="bulb_image"
          height="200"
        />
        <div className="d-flex justify-content-around mt-4">
          <button className="btn bg-primary text-white" onClick={turnOn}>
            {!isBulbOn ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Bulb;
