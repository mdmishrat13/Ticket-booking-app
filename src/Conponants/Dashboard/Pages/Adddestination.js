import React from "react";
import styles from "./../../Styles/dashboard.module.css";

const Adddestination = () => {
  return (
    <div className="container">
      <form className={styles.inputform}>
        <h2 className={styles.pagetitle}>Add A Hotel</h2>
        <div className={styles.inputfields}>
          <label className={styles.inputlabel} htmlFor="hotelname">Name</label>
          <input type="text" className={styles.hoteltextinput} id="hotelname" />
        </div>
        <div className={styles.inputfields}>
          <label className={styles.inputlabel} htmlFor="hotellocation">Location</label>
          <input type="text" className={styles.hoteltextinput} id="hotellocation" />
        </div>
        <div className={styles.inputfields}>
          <label className={styles.inputlabel} htmlFor="hotelimage1">Image 1</label>
          <input type="text" className={styles.hoteltextinput} id="hotelimage1" />
        </div>
        <div className={styles.inputfields}>
          <label className={styles.inputlabel} htmlFor="hotelimage2">Image 2</label>
          <input type="text" className={styles.hoteltextinput} id="hotelimage2" />
        </div>
        <div className={styles.inputfields}>
          <label className={styles.inputlabel} htmlFor="hotelimage3">Image 3</label>
          <input type="text" className={styles.hoteltextinput} id="hotelimage3" />
        </div>
        <div className={styles.inputfields}>
          <label className={styles.inputlabel} htmlFor="hotelcost">Cost Per Night</label>
          <input type="number" className={styles.hoteltextinput} id="hotelcost" />
        </div>
        <div className={styles.inputfields}>
          <label className={styles.inputlabel} htmlFor="hotelfacilities">Facilities</label>
          <p className={styles.inputinfo}> Facilities will be separeted by comma </p>
          <input type="text" className={styles.hoteltextinput} id="hotelfacilities" />
        </div>
        <div className={styles.inputfields}>
          <label className={styles.inputlabel} htmlFor="hoteltitle">Title</label>
          <input type="text" className={styles.hoteltextinput} id="hoteltitle" />
        </div>
        <label className={styles.inputlabel} htmlFor="descriptions">Description</label>
        <textarea className={styles.hoteltextinput} name="description" id="descriptions" cols="30" rows="10"></textarea>
      </form>
    </div>
  );
};

export default Adddestination;
