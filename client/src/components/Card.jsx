import React from 'react';

export default function Card({ name, image, temperament, weight}){
    return(
        <div>
            <h3>
                {name}
            </h3>
            <div>
                {temperament?.map(e => {
                    return(
                        <h5>{e}</h5>
                    )
                })}
            </div>
            <h5>{weight + " kg"}</h5>
            <img src={image} alt="img not found" width="200px" height="250px" />
        </div>
    )
}
