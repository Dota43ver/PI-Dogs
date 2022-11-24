import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import { getNameDogs } from "../actions";
import { useHistory } from "react-router-dom";
import style from "./SearchBar.module.css"

export default function SearchBar({pagination}){
const dispatch = useDispatch()
const [name, setName] = useState("")
const history = useHistory();

function handleInputChange(e){
e.preventDefault()
setName(e.target.value)
console.log(name)
}

function handleSubmit(e){
e.preventDefault()
dispatch(getNameDogs(name))
setName("")
history.push('/home')
pagination(1)
}
return (
    <div>
        <input type = 'text' placeholder="Buscar..."  onChange={(e)=> handleInputChange(e)}/>
        <button type='submit' onClick={(e)=> handleSubmit(e)} className={`${style.landingPage}`}>Buscar</button>    
        
    </div>
)
}