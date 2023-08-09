import React from "react";

const Modal = ({ setShowModal, subBreed }) => {
  console.log(subBreed);
  return (
    <div className="Modal">
      <div className="ModalBody">
        {subBreed.map((breed, index) => (
          <p key={index}>{breed}</p>
        ))}
      </div>
      <button className="close" onClick={() => setShowModal(false)}>
        x
      </button>
    </div>
  );
};

export default Modal;
