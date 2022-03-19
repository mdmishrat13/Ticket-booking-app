import React from "react";
import styles from "./../Styles/register.module.css";

const Login = () => {
  return (
    <div>
        <div className="pageNavSpace">

        </div>
      <div className={styles.loginArea}>
        <div className={styles.loginForm}>
          <h1 className={styles.authTitle}>Please Register Here</h1>
          <form className={styles.formStyle}>
            <div className={styles.inputNames}>
              <div className="firstName">
                <label htmlFor="inputNamef">First Name</label>
                <input
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
              placeholder="john@smith.com"
              type="email"
              name="email"
              className={styles.inpunField}
              id="email"
            />
            <label htmlFor="img">Your Profile Pic Link</label>
            <input
              placeholder="https://www.picbay.com/img"
              type="text"
              name="img"
              className={styles.inpunField}
              id="img"
            />
            <label htmlFor="password1">Choose A Password</label>
            <input
              placeholder="**********"
              type="password"
              name="password1"
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
              style={{backgroundColor:'tomato'}}
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
        </div>
      </div>
    </div>
  );
};

export default Login;
