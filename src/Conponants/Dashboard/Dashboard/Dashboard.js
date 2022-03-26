import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./../../Styles/dashboard.module.css";

const Dashboard = () => {
  return (
    <div>
      <div className="pageNavSpace"></div>
      <div className={styles.dashboard}>
        <div className={styles.leftMenu}>
          <ul className={styles.listStyle}>
            <div className="dashboardLinks">
              <li>
                {" "}
                <Link to="allhotel">All Hotels</Link>
              </li>
              <li>
                {" "}
                <Link to="addhotel">Add Hotel</Link>
              </li>
              <li>
                {" "}
                <Link to="bookingrequests">Booking Request</Link>
              </li>
              <li>
                {" "}
                <Link to="admins">Admins</Link>
              </li>
              <li>
                {" "}
                <Link to="adddestination">Add Destination</Link>
              </li>
              <li>
                {" "}
                <Link to="alldestination">All Destination</Link>
              </li>
              <li>
                {" "}
                <button className={styles.logoutbtn}>logout</button>
              </li>
            </div>
          </ul>
        </div>
        <div className={styles.rightbar}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
