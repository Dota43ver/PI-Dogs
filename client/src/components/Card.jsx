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
                        <div>
                        <h5>{e}</h5>
                        </div>
                    )
                })}
            </div>
            <h5>{weight + " kg"}</h5>
            <img src={image} alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VkmYSYNnbdidqoCvKahRLuWnzMZ6phD-xg&usqp=CAU" width="200px" height="250px" />
        </div>
    )
}
