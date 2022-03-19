import React from "react";
import "./../Styles/global.css";
import styles from "./../Styles/home.module.css";
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div>
      <header>
        <div className={styles.headerImage}>
          <div className={styles.headerContent}>
            <h1 id="headerTitle">
              FINDOUT YOUR_
                <Typewriter
                className="typewritting"
                  options={{
                    strings: ["DESTINATION", "RELAXTANT","CONVEYANCE"],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </h1>
            <p id="headerText">find out your destination</p>
            <div className="searchArea">
              
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
