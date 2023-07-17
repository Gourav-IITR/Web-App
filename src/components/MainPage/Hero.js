import landingPhoto from './landingPhoto.png';
import React from 'react';
import "./Hero.css"
import { Link, Route } from "react-router-dom/cjs/react-router-dom.min";
import RegisterNovel from '../RegisterNovel/RegisterNovel';

function Hero(){
    return(
        <div className="container">
            <img src={landingPhoto} alt="Book background"></img>        
            <button className="btn">
                Rent Now               
            </button>
        </div>       
    );
}

export default Hero;