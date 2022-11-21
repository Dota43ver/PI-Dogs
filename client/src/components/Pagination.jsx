import React from 'react';
import style from "./Pagination.module.css"

export default function Pagination({dogsPerPage, allDogs, pagination}){
    const pageNumbers = []

    for(let i = 1; i<=Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav className={`${style.nav_container}`}>
            <ul className={`${style.ul_container}`}>
                {pageNumbers?.map(number=>(
                    <div className={`${style.ul_container2}`}>
                    <li className={`${style.li_container2}`} key={number}>
                    <button className={`${style.li_container}`} onClick={()=> pagination(number)}>{number}</button>
                    </li>
                    </div>
                ))}
            </ul>
        </nav>
    )
}