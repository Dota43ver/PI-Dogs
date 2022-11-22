import React from 'react';


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
            <img src={image} alt="sin imagen" width="200px" height="250px" />
        </div>
    )
}
