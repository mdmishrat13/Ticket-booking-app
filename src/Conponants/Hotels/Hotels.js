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
        <div className={styles.leftBar}>
          <form>
            <label for="browser">Choose a Destination</label>
            <input list="browsers" name="browser" id="browser" />
            <datalist id="browsers">
              <option value="Edge" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>
            
            <input list="browsers" name="browser" id="browser" />
            <datalist id="browsers">
              <option value="Edge" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>
            
            <input list="browsers" name="browser" id="browser" />
            <datalist id="browsers">
              <option value="Edge" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>
            <input type="submit" />
          </form>
        </div>
        <div className="container">
        <div className={styles.rightBar}>
          {hotels.map((hotel, key) => (
            <Hotel key={key} hotel={hotel}></Hotel>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
