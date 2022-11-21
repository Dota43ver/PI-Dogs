import React from 'react';
import {Link} from 'react-router-dom';
import style from "./LandingPage.module.css"

export default function LandingPage(){
    return(
        <div>
            <h1>Welcome to my Dog app</h1>
            <Link to = '/home'>
                <button className={`${style.landingPage}`}>Enter</button>
            </Link>
        </div>
    )
}