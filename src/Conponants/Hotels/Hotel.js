import { faImages } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
// import styles from './../Styles/hotels.module.css';

const Hotel = ({ hotel }) => {
    
  const {
    name,
    costPerNight,
    reviews,
    description,
    rattings,
    hotelImages,
    facilities
  } = hotel;
  const [image,setImage] =useState(hotelImages[0])
  const handleImageChange=e=>{
      setImage(e.target.src)
  }
  return (
    <div className="container">
      <div className="hotelInfo">
        <div className="hotelContainer">
          <div className="hotelImage">
            <img src={image} alt="" />
            <div className="moreImages">
              {hotelImages?.map((image) => (
                <img onClick={handleImageChange} src={image} />
              ))}
            </div>
          </div>
          <div className="hotelTexts">
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="feedback">
              <ul>
                  <strong>Facilities</strong>

                {facilities?.map((facilitiy) => (
                  <li>{facilitiy}</li>
                ))}
              </ul>
              <div className="rattings">
                  <strong>Review and Rattings</strong>
                <p> ratting: 5 star</p>
                <p> review: 5 </p>
              </div>
            </div>
            <h1>
              Cost:<span className="cost">{costPerNight}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
