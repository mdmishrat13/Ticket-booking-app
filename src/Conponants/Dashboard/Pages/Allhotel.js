import React from "react";
import styles from "./../../Styles/dashboard.module.css";

const Allhotel = () => {
  return (
    <div className="container">
      <table className={styles.table}>
        <tr className={styles.tabledata}>
          <td className={styles.tdstyle}>
            <div className={styles.name}>
              <img
                className={styles.AllHotelImage}
                src="https://i.ibb.co/mhZzbgF/hallstatt-3609863.jpg"
                alt=""
              />
              <div className={styles.texts}>
                <h2>Modhumoti nibash</h2>
                <p>Mohammadpur Dhaka</p>
              </div>
            </div>
            <div >
              <button className={styles.actionbtns}>Delete</button>
              <button>Edit</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Allhotel;
