import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./../Styles/register.module.css";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../Hooks/useAuth";


const Login = () => {
  const [userData,setUserData]= useState({
    displayName:'',
    email:'',
    photoURL:'',
    password:'',
    password2:''
  })
  const {createUserWithEmail,error,loading} = useAuth();
  const getUserInput = e=>{
    setUserData({...userData, [e.target.name]:e.target.value})
    console.log(userData)
    // const name = e.target.value;
    // console.log(name)
  }
  // const getFirstName = e=>{
  //   const firstName = e.target.value;
  //   setUserData({displayName:firstName})
  //   console.log(userData)
  // }
  // const getLastName = e=>{
  //   const lastName = e.target.value;
  //   console.log(lastName)
  // }
  // const getEmail = e=>{
  //   const email = e.target.value;
  //   setUserData({email:email})
  //   console.log(userData)
  // }
  // const getPhotoURL = e=>{
  //   const photoURL = e.target.value;
  //   setUserData({ photoURL:photoURL})
  //   console.log(userData)
  // }
  // const getPassword = e=>{
  //   const password = e.target.value;
  //   setUserData({ password:password})
  //   console.log(userData)
  // }
  // const getPassword2 = e=>{
  //   const password2 = e.target.value;
  //   console.log(password2)
  // }
  const handleSubmit = e=>{
    createUserWithEmail(userData)
    e.preventDefault();
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
                onChange={getUserInput}
                  type="Text"
                  name="displayName"
                  className={styles.inputName}
                  id="inputNamef"
                  placeholder="John"
                />
              </div>
              {/* <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                onKeyUp={getLastName}
                  type="Text"
                  name="lastName"
                  className={styles.inputName}
                  id="lastName"
                  placeholder="Smith"
                />
              </div> */}
            </div>
            <label htmlFor="email">Your Email</label>
            <input
            onChange={getUserInput}
              placeholder="john@smith.com"
              type="email"
              name="email"
              className={styles.inpunField}
              id="email"
            />
            <label htmlFor="img">Your Profile Pic Link</label>
            <input
            onChange={getUserInput}
              placeholder="https://www.picbay.com/img"
              type="text"
              name="photoURL"
              className={styles.inpunField}
              id="img"
            />
            <label htmlFor="password1">Choose A Password</label>
            <input
            onChange={getUserInput}
              placeholder="**********"
              type="password"
              name="password"
              className={styles.inpunField}
              id="password1"
            />
            <label htmlFor="password2">Retype Password</label>
            <input
            onChange={getUserInput}
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
            {error&& <p>{error} </p> }
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
