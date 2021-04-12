import React from "react";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Home from "./Home";

const App = () => {
  const options = {
    timeout: 5000,
    position: positions.TOP_CENTER,
  };
  return (
    <>
      <Provider template={AlertTemplate} {...options}>
        <Home />
      </Provider>
    </>
  );
};

export default App;
