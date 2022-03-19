import React from "react";
import useFirebase from "../Hooks/useFirebase";
import styles from "./../Styles/login.module.css";

const Login = () => {
  const{googleSignIn,user}=useFirebase();
  console.log(user)
  return (
    <div>
        <div className="pageNavSpace">

        </div>
      <div className={styles.loginArea}>
        <div className={styles.loginForm}>
          <h1 className={styles.authTitle}>Please Login Here</h1>
          <form className={styles.formStyle}>

            <label htmlFor="email">Your Email</label>
            <input
              placeholder="john@smith.com"
              type="email"
              name="email"
              className={styles.inpunField}
              id="email"
            />
           <label htmlFor="password">Retype Password</label>
            <input
              placeholder="**********"
              type="password"
              name="password"
              className={styles.inpunField}
              id="password"
            />
            <p style={{textAlign:"right",color:"red",margin:"10px"}}>Forgot Password? Recover Now</p>
              <div className={styles.loginBtn}>
              <input
              style={{display:'block'}}
                type="submit"
                className={styles.submitBtn}
                name="Register Now"
              />
              </div>
              
          </form>
          <button onClick={googleSignIn}>login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
