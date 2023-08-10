import React, { useEffect, useState } from "react";

/*
  subBreed: Array(n)
  
*/

const Modal = ({ setShowModal, subBreed, clickedDog }) => {
  const [subBreedData, setSubBreedData] = useState(null); // [{subBreed: "bulldog", subBreedImage: "https://bulldog.com"}
  useEffect(() => {
    subBreedApiCall(subBreed);
  }, []);
  async function subBreedApiCall(subBreed) {
    // we have  a fetch call but it only fetchs image for a single subBreed

    let arrayOfData = [];
    for (let i = 0; i < subBreed.length; i++) {
      const data = await fetch(
        `https://dog.ceo/api/breed/${clickedDog}/${subBreed[i]}/images/random`
      );
      const response = await data.json();
      arrayOfData.push({
        singleSubBreed: subBreed[i],
        singleSubBreedImage: response.message,
      });
    }
    console.log(arrayOfData);
    setSubBreedData(arrayOfData);
  }
  console.log(subBreed);
  return (
    <div className="Modal">
      <div className="ModalBody">
        <button className="close" onClick={() => setShowModal(false)}>
          x
        </button>
        {subBreedData &&
          subBreedData.map(({ singleSubBreed, singleSubBreedImage }, index) => (
            <div>
              <img
                className="singleSubBreedImage"
                src={singleSubBreedImage}
                alt={singleSubBreed}
              />
              <p key={index}>{singleSubBreed}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Modal;
