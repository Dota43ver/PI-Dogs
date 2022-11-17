import React from "react";
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getDetail} from "../actions/index";
import { useEffect } from "react";


export default function Detail(props){
    console.log("esto es props: ",props)

const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getDetail(props.match.params.id));
},[dispatch])

const myDog = useSelector((state)=> state.detail)

return(
    <div>
        {
            myDog.length>0 ?
            <div>
                <h1>{myDog[0].name}</h1>
                <img src={myDog[0].image} alt="" width="500px" height="700px"/>
                <h2>{myDog[0].temperaments + ' '}</h2>
                <p>{myDog[0].height}</p>
                <p>{myDog[0].weight}</p>
                <p>{myDog[0].life_span}</p>
            </div> : <p>Loading...</p>
        }
        <Link to='/home'>
            <button>Volver</button>
        </Link>
    </div>
)

}