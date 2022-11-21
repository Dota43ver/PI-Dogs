import React from "react";
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getDetail} from "../actions/index";
import { useEffect } from "react";
import style from "./Detail.module.css"


export default function Detail(props){
    console.log("esto es props: ",props)

const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getDetail(props.match.params.id));
},[dispatch])

const myDog = useSelector((state)=> state.detail)

return(
    <div className={style.container_details}>
        {
            myDog.length>0 ?
            <div className={`${style.container_detail}`}>
                <h1>{myDog[0].name}</h1>
                <img src={myDog[0].image} alt="" width="300px" height="300px"/>
                <h2>{myDog[0].temperaments + ' '}</h2>
                <p>{myDog[0].height + " cm"}</p>
                <p>{myDog[0].weight + " kg"} </p>
                <p>{myDog[0].life_span}</p>
            </div> : <p>Loading...</p>
        }
        <Link to='/home'>
            <button className={`${style.landingPage}`}>Volver</button>
        </Link>
    </div>
    
)

}