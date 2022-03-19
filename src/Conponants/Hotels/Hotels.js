import React, { useEffect, useState } from 'react';
import Hotel from './Hotel';

const Hotels = () => {
    const [hotels ,setHotels]= useState([])

    useEffect(()=>{
        fetch('hotels.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setHotels(data)
        })
       
    },[])
    return (
        <div>
            <div className="pageNavSpace"></div>
            {hotels.map((hotel, key) =><Hotel key={key} hotel={hotel}></Hotel>)}
            
        </div>
    );
};

export default Hotels;