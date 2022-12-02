import React from 'react';
import style from "./Home.module.css"


export default function Card({ name, image, temperament, weight}){
    return(
        <div>
            <h3>
                {name}
            </h3>
            <div>
            {temperament + ", "}
            </div>
            <h5>{weight + " kg"}</h5>
            <img className={`${style.img_card}`} src={image} alt="sin imagen" width="300px" height="300px" />
        </div>
    )
}
