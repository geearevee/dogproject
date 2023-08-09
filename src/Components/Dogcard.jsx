import React from "react";
import Modal from "./Modal";
const Dogcard = ({ breedName, breedImage, subBreed, setSubBreed }) => {
  return (
    <div className="Dog-card-container" onClick={() => setSubBreed(subBreed)}>
      <img src={breedImage} alt={breedName} className="Dog-card-image" />
      <h4 className="Dog-card-Name">{breedName}</h4>
    </div>
  );
};

export default Dogcard;
