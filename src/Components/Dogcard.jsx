import React from "react";
import Modal from "./Modal";
const Dogcard = ({
  breedName,
  breedImage,
  subBreed,
  setSubBreed,
  setShowModal,
  setClickedDog,
}) => {
  const handleClick = () => {
    setSubBreed(subBreed);
    setShowModal(true);
    setClickedDog(breedName);
  };
  return (
    <div className="Dog-card-container" onClick={handleClick}>
      <img src={breedImage} alt={breedName} className="Dog-card-image" />
      <h4 className="Dog-card-Name">{breedName}</h4>
    </div>
  );
};

export default Dogcard;
