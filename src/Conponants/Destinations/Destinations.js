import React from 'react';
import styles from './../Styles/destinations.module.css';

const Destinations = () => {
    return (
        <div>
             <div className="pageNavSpace"></div>
            <div className='container'>
                <div className={styles.destinationContainer}>
                    <div className="destination">
                        <div className="image">
                            <img className={styles.img} src="https://i.ibb.co/mhZzbgF/hallstatt-3609863.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;