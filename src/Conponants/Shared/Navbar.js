import React, { useState } from "react";
import styles from "./../Styles/navbar.module.css";
import "./../Styles/global.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../Hooks/useAuth";
import useFirebase from "../Hooks/useFirebase";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [scroll, setScroll] = useState(false);
  const {user} = useFirebase();

  const handleScroll = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", () => {
    handleScroll();
  });

  return (
    <div className='position'>
      <nav className={scroll ? "navColor" : "navTransparent"}>
        <div className="container">
          <div className={styles.navItems}>
            <div className={styles.logosection}>
              <h2 className={styles.logoTitle}>TICKET.COM </h2>
              <ul className={styles.pages}>
                <li>
                  {" "}
                  <Link to="home"> Home </Link>
                </li>
                <li>
                  <Link to="hotels"> Hotels </Link>
                </li>
                <li>
                  <Link to="destinations"> Destinations </Link>
                </li>
                <li>
                  <Link to="about"> About</Link>
                </li>
                <li>
                  <Link to="dashboard"> Dashboard</Link>
                </li>
              </ul>
            </div>
            <div className={styles.loginButtons}>
              <Link className={styles.loginBtn} to="/login">
                {" "}
                Login{" "}
              </Link>
              <Link className={styles.signupBtn} to="/register">
                {" "}
                SignUp{" "}
              </Link>
            </div>
            {clicked?<FontAwesomeIcon
              onClick={() => setClicked(!clicked)}
              className={styles.closeMenuIcon}
              icon={faXmark}
            />
            :<FontAwesomeIcon
              onClick={() => setClicked(!clicked)}
              className={styles.menuIcon}
              icon={faBars}
            />}
            
          </div>
          <ul className={clicked ? "smallpages" : "hideSmallPages"}>
            <li>
              {" "}
              <Link to="home"> Home </Link>
            </li>
            <li>
              <Link to="hotels"> Hotels </Link>
            </li>
            <li>
              <Link to="destinations"> Destinations </Link>
            </li>
            <li>
              <Link to="about"> About Us </Link>
            </li>

            <li>
              <Link className={styles.loginBtn} to="/login">
                {" "}
                Login{" "}
              </Link>
            </li>
            <li style={{paddingBottom:'.2rem'}}>
              <Link className={styles.signupBtn} to="/register">
                {" "}
                Signup{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
