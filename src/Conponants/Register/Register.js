import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./../Styles/register.module.css";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Login = () => {
  const [userData,setUserData]= useState({})
  const getUserInput = e=>{
    const {name,value}= e.target;
    setUserData({...userData, [name]:value})
    console.log(userData)
  }
  const handleSubmit = e=>{
    e.preventDefault();
    alert('form submitted')
  }
  return (
    <div>
      <div className="pageNavSpace"></div>
      <div className={styles.loginArea}>
        <div className={styles.loginForm}>
          <h1 className={styles.authTitle}>Please Register Here</h1>
          <form onSubmit={handleSubmit} className={styles.formStyle }>
            <div className={styles.inputNames}>
              <div className="firstName">
                <label htmlFor="inputNamef">First Name</label>
                <input
                onBlur={getUserInput}
                  type="Text"
                  name="firstName"
                  className={styles.inputName}
                  id="inputNamef"
                  placeholder="John"
                />
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="Text"
                  name="lastName"
                  className={styles.inputName}
                  id="lastName"
                  placeholder="Smith"
                />
              </div>
            </div>
            <label htmlFor="email">Your Email</label>
            <input
            onBlur={getUserInput}
              placeholder="john@smith.com"
              type="email"
              name="email"
              className={styles.inpunField}
              id="email"
            />
            <label htmlFor="img">Your Profile Pic Link</label>
            <input
            onBlur={getUserInput}
              placeholder="https://www.picbay.com/img"
              type="text"
              name="img"
              className={styles.inpunField}
              id="img"
            />
            <label htmlFor="password1">Choose A Password</label>
            <input
            onBlur={getUserInput}
              placeholder="**********"
              type="password"
              name="password"
              className={styles.inpunField}
              id="password1"
            />
            <label htmlFor="password2">Retype Password</label>
            <input
              placeholder="**********"
              type="password"
              name="password2"
              className={styles.inpunField}
              id="password2"
            />
            <div className={styles.submitBtns}>
              <input
                style={{ backgroundColor: "tomato" }}
                type="reset"
                className={styles.submitBtn}
                name="Clear All"
              />
              <input
                type="submit"
                className={styles.submitBtn}
                name="Register Now"
              />
            </div>
          </form>
          <div className={styles.otherLink}>
          <div className={styles.socialLogin}>
            <p>Already Registered? <Link to="/login">Login Here</Link></p>
            <p>Or</p>
              <button
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
