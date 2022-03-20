import React, { useEffect, useState } from "react";
import Hotel from "./Hotel";
import styles from "./../Styles/hotels.module.css";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("hotels.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHotels(data);
      });
  }, []);
  return (
    <div className="hotelss">
      <div className="pageNavSpace"></div>
      <div className={styles.hotelPages}>
        <div className="leftBar">
          <h1>filter</h1>
        </div>
        <div className={styles.rightBar}>
        {hotels.map((hotel, key) => (
          <Hotel key={key} hotel={hotel}></Hotel>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
