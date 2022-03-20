import { faImages } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styles from './../Styles/hotels.module.css';

const Hotel = ({ hotel }) => {
  const {
    name,
    costPerNight,
    reviews,
    description,
    rattings,
    hotelImages,
    facilities,
    location,
  } = hotel;
  const [image, setImage] = useState(hotelImages[0]);
  const handleImageChange = (e) => {
    setImage(e.target.src);
  };
  return (
    <div>
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
            <div className="nameAndLocation">
              <h1>{name} </h1>
              <p style={{ fontSize: "20px", color: " rgb(111, 41, 240)", padding: ".5rem" }}>
                <FontAwesomeIcon
                  style={{ marginLeft: ".2rem" }}
                  icon={faLocationDot}
                ></FontAwesomeIcon>
                {location}{" "}
              </p>
            </div>
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
                <p>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </p>
                <p> review: 5 </p>
              </div>
            </div>
            <h2>
              Cost:<span className="cost">{costPerNight}</span>
            </h2>
            <button
              style={{
                fontSize: "15px",
                color: "white",
                cursor: "pointer",
                borderRadius: "5px",
                margin: "10px",
                padding: ".7rem",
                backgroundColor: " rgb(111, 41, 240)",
                border: "none",
              }}
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
