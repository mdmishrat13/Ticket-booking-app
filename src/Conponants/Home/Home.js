import React from "react";
import "./../Styles/global.css";
import styles from "./../Styles/home.module.css";
import Typewriter from "typewriter-effect";

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
                  strings: ["DESTINATION", "RELAXTANT", "CONVEYANCE"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
        </div>
      </header>
      {/* <section className="searchSection">
        <div className="searchArea">
              <form>
                <input
                  className="searchInput"
                  list="locations"
                  name="location"
                  id="location"
                />
                <datalist id="locations">
                  <option value="Shylet" />
                  <option value="CoxsBazar" />
                  <option value="Bandarban" />
                  <option value="Bogura" />
                  <option value="Bhola" />
                </datalist>
                <input type="submit" value="search" />
              </form>
            </div>
        </section> */}
      <div className="container">
        <section className="topVisited">
          <div className="text-center">
            <h2>Top Visited</h2>
            <p>Lots people visited last year</p>
          </div>
          <div className={styles.topVisitedCards}>
            <div className="card text-center">
              <div className="img">
                <img
                  src="https://i.ibb.co/mhZzbgF/hallstatt-3609863.jpg"
                  alt=""
                />
              </div>
              <div className="texts">
                <h2>Sent Martin</h2>
                <p>
                  sent martin is beautiful Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Laborum, non.
                </p>
                <button className="btn">See more</button>
              </div>
            </div>
            <div className="card text-center">
              <div className="img">
                <img
                  src="https://i.ibb.co/mhZzbgF/hallstatt-3609863.jpg"
                  alt=""
                />
              </div>
              <div className="texts">
                <h2>Sent Martin</h2>
                <p>
                  sent martin is beautiful Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Laborum, non.
                </p>
                <button className="btn">See more</button>
              </div>
            </div>
            <div className="card text-center">
              <div className="img">
                <img
                  src="https://i.ibb.co/mhZzbgF/hallstatt-3609863.jpg"
                  alt=""
                />
              </div>
              <div className="texts">
                <h2>Sent Martin</h2>
                <p>
                  sent martin is beautiful Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Laborum, non.
                </p>
                <button className="btn">See more</button>
              </div>
            </div>
          </div>
        </section>
        <section className="top-hotels">
          <div className="text-center">
            <h2>Top Rated Hotels</h2>
            <p>Lots people visited last year</p>
          </div>
          <div className={styles.topVisitedCards}>
            <div className="card text-center">
              <div className="img">
                <img
                  src="https://i.ibb.co/mhZzbgF/hallstatt-3609863.jpg"
                  alt=""
                />
              </div>
              <div className="texts">
                <h2>Sent Martin</h2>
                <p>
                  sent martin is beautiful Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Laborum, non.
                </p>
                <button className="btn">See more</button>
              </div>
            </div>
            <div className="card text-center">
              <div className="img">
                <img
                  src="https://i.ibb.co/mhZzbgF/hallstatt-3609863.jpg"
                  alt=""
                />
              </div>
              <div className="texts">
                <h2>Sent Martin</h2>
                <p>
                  sent martin is beautiful Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Laborum, non.
                </p>
                <button className="btn">See more</button>
              </div>
            </div>
            <div className="card text-center">
              <div className="img">
                <img
                  src="https://i.ibb.co/mhZzbgF/hallstatt-3609863.jpg"
                  alt=""
                />
              </div>
              <div className="texts">
                <h2>Sent Martin</h2>
                <p>
                  sent martin is beautiful Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Laborum, non.
                </p>
                <button className="btn">See more</button>
              </div>
            </div>
          </div>
        </section>
        <section className="discount">
          <div className="text-center">
            <h2>Get Discount Hotels</h2>
            <p>Lots people visited last year</p>
          </div>
          <div className={styles.topVisitedCards}>
            <div className="card text-center">
              <div className="img">
                <img
                  src="https://i.ibb.co/mhZzbgF/hallstatt-3609863.jpg"
                  alt=""
                />
              </div>
              <div className="texts">
                <h2>Sent Martin</h2>
                <p>
                  sent martin is beautiful Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Laborum, non.
                </p>
                <button className="btn">See more</button>
              </div>
            </div>
            <div className="card text-center">
              <div className="img">
                <img
                  src="https://i.ibb.co/mhZzbgF/hallstatt-3609863.jpg"
                  alt=""
                />
              </div>
              <div className="texts">
                <h2>Sent Martin</h2>
                <p>
                  sent martin is beautiful Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Laborum, non.
                </p>
                <button className="btn">See more</button>
              </div>
            </div>
            <div className="card text-center">
              <div className="img">
                <img
                  src="https://i.ibb.co/mhZzbgF/hallstatt-3609863.jpg"
                  alt=""
                />
              </div>
              <div className="texts">
                <h2>Sent Martin</h2>
                <p>
                  sent martin is beautiful Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Laborum, non.
                </p>
                <button className="btn">See more</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
