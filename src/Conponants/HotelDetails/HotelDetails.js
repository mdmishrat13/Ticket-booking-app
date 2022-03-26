import React from "react";
import './../Styles/global.css'
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import styles from "./../Styles/hoteldetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import Details from "./Details";
import Comments from "./Comments";
import Facilities from "./Facilities";
import Conditions from "./Conditions";

const HotelDetails = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <div className="pageNavSpace"></div>
      <div className="container">
        <div className="hotelInfo">
          <div className="hotelContainer">
            <div className="hotelImage">
              <img
                src="https://i.ibb.co/mhZzbgF/hallstatt-3609863.jpg"
                alt=""
              />
              <div className="moreImages"></div>
            </div>
            <div className="hotelTexts">
              <div className="nameAndLocation">
                <h1>Modhumoti Nibash </h1>
                <p
                  style={{
                    fontSize: "20px",
                    color: " rgb(111, 41, 240)",
                    padding: ".5rem",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ marginLeft: ".2rem" }}
                    icon={faLocationDot}
                  ></FontAwesomeIcon>
                  Mohammadpur Dhaka{" "}
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, maiores!
              </p>
              <div className="feedback">
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
                Cost:<span className="cost">2000</span>
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
                Book Now
              </button>
            </div>
          </div>
          <div className="links">
                <Link to="details">Details</Link>
                <Link to="comments">Comments</Link>
                <Link to="facilities">Facilities</Link>
                <Link to="conditions">Conditions</Link>
                <Outlet/>
              </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
