import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import ApiAxios from '../../Learning/ApiAxios';

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Home page</h2>

      <ApiAxios />
    </div>
  );
};

function ApiAxios() {
  const [tours, setTours] = useState([]);



  const getTours = () => {
    axios
      .get("https://gist.githubusercontent.com/pamtel/f3d8276b23a39051a582a2d0ce9efb29/raw/00b9b773184d5955b5f8e92c7d223660f1d92249/mydata.json/2")
      .then((response) => {
        setTours(response.data);
     
      })

      .catch((err) => {
        
      });
  };

  useEffect(() => {
    getTours();
  }, []);

 



  return (
    <div>
      {tours.map((tour) => (
        <h4>{tour.title}</h4>
      ))}

      <img src="https://user-images.githubusercontent.com/74419039/117164917-f58c4680-adbc-11eb-98c7-2f54034e719e.jpg" alt=""/>


       <img src="https://user-images.githubusercontent.com/74419039/117165502-73e8e880-adbd-11eb-8064-017583b2b9b1.jpg" alt=""/>
    </div>
  );
}

export default Home;
