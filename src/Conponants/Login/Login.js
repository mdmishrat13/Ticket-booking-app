import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";
import styles from "./../Styles/login.module.css";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const {error, uaer,googleSignIn,loading,emailPasswordSignIn } = useFirebase();
  const [userData, setUserData]=useState({})

  let email;
  let pass;

  const getUserInput= (e)=>{
    email = e.target.value;
    pass= e.target.value;
    // const {name, value} = e.target;
    // setUserData({...userData, [name]: value});
    // console.log(userData)
  }
  const handleSubmit= e=>{
    emailPasswordSignIn(email,pass)
    e.preventDefault();
  }
    return (
    <div>
      <div className="pageNavSpace"></div>
      <div className={styles.loginArea}>
        <div className={styles.loginForm}>
          <p>{error}</p>
          <h1 className={styles.authTitle}>Please Login Here</h1>
          <form className={styles.formStyle} onSubmit={handleSubmit}>
            <label htmlFor="email">Your Email</label>
            <input
              onBlur={getUserInput}
              placeholder="john@smith.com"
              type="email"
              name="email"
              className={styles.inpunField}
              id="email"
            />
            <label htmlFor="password">Password</label>
            <input
              onBlur={getUserInput}
              placeholder="**********"
              type="password"
              name="password"
              className={styles.inpunField}
              id="password"
            />
            <p style={{ textAlign: "right", color: "red", margin: "10px" }}>
              Forgot Password? Recover Now
            </p>
            <div className={styles.loginBtn}>
              <input
                style={{ display: "block" }}
                type="submit"
                className={styles.submitBtn}
                name="Register Now"
              />
            </div>
          </form>
          <div className={styles.otehrLink}>
            <p className={styles.authRedirect}>
              New user? <Link to="/register">Register here</Link>
            </p>
            <div className={styles.socialLogin}>
              <button
              onClick={googleSignIn}
                style={{
                  fontSize: "18px",
                  color: "white",
                  backgroundColor: "green",
                  border: 0,
                  borderRadius: "5px",
                  padding: ".7rem 2rem",
                  margin: "2rem 0",
                  cursor:'pointer'
                }}
              >
                {" "}
                <FontAwesomeIcon
                  style={{
                    fontSize: "20px",
                    color: "white",
                    marginRight: "10px",
                  }}
                  icon={faGoogle}
                />
                Login With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
