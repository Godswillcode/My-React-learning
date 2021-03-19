import React from "react";
import PT from "prop-types";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
//

const GROUP1 = [
  ["images/item-1.jpeg", "images/item-1.jpeg"],
  ["images/item-2.jpeg", "images/item-2.jpeg"],
  ["images/item-4.jpeg", "images/item-4.jpeg"],
];

const PhotoItem = ({ image, thumb, group }) => (
  <div style={{ maxWidth: "250px", width: "200px", padding: "5px" }}>
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} style={{ width: "100%" }} alt="gallery" />
    </LightgalleryItem>
  </div>
);

PhotoItem.propTypes = {
  image: PT.string.isRequired,
  thumb: PT.string,
  group: PT.string.isRequired,
};

function App() {
  return (
    <div>
      <LightgalleryProvider>
        <h1 style={{ textAlign: "center" }}>Gallery</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {GROUP1.map((p, idx) => (
            <PhotoItem key={idx} image={p[0]} thumb={p[1]} group="group1" />
          ))}
        </div>
      </LightgalleryProvider>
    </div>
  );
}

export default App;
