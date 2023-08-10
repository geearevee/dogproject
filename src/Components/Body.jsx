import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
// list all breed => https://dog.ceo/api/breeds/list/all
// breed images https://dog.ceo/api/breed/{breed_name}/images
import Dogcard from "./Dogcard";
const Body = () => {
  const [dogBreeds, setDogBreeds] = useState(null);
  const [breedImages, setBreedImages] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [subBreed, setSubBreed] = useState([]);
  const [clickedDog, setClickedDog] = useState(null);
  // you have
  useEffect(() => {
    getBreed();
    getBreedImages();
  }, []);
  async function getBreed() {
    const allAllBreed = [];
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      let data = await response.json();
      data = data.message;
      for (const breedName in data) {
        const imageOfBreed = await getBreedImages(breedName);
        allAllBreed.push({
          breedName: breedName,
          breedImage: imageOfBreed,
          subBreed: data[breedName],
        });
        console.log(
          {
            breedName: breedName,
            breedImage: imageOfBreed,
            subBreed: data[breedName],
          },
          "look here"
        );
      }
      setDogBreeds(allAllBreed);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBreedImages(breed_name) {
    // const allAllBreed = []
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed_name}/images/random`
      );
      const data = await response.json();
      // setBreedImages(data.message);
      return data.message;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return (
    <div className="card-container">
      {dogBreeds &&
        dogBreeds.map(({ breedName, breedImage, subBreed }, index) => (
          <Dogcard
            key={index}
            breedName={breedName}
            breedImage={breedImage}
            showModal={showModal}
            setShowModal={setShowModal}
            subBreed={subBreed}
            setSubBreed={setSubBreed}
            setClickedDog={setClickedDog}
          />
        ))}
      {/* {
        showModal &&
        createPortal(
          <Modal setShowModal={setShowModal} subBreed={subBreed} />,
          document.body
        )} */}
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          subBreed={subBreed}
          clickedDog={clickedDog}
        />
      )}
    </div>
  );
};

export default Body;
