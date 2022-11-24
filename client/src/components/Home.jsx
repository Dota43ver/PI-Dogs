import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getDogs,filterDogsByTemperament, filterCreated, orderByName, orderByWeight, getTemperaments } from '../actions';
import {Link} from 'react-router-dom';
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import style from "./Home.module.css"

export default function Home(){

const dispatch = useDispatch()
const allDogs = useSelector((state) => state.dogs)
const temperaments = useSelector((state) => state.temperaments)
const [orden, setOrden] = useState('')
const [currentPage,setCurrentPage] = useState(1)
const [dogsPerPage, setDogsPerPage] = useState(8)
const [refresh, setRefresh] = useState()
const indexOfLastDog = currentPage * dogsPerPage
const indexOfFirstDog = indexOfLastDog - dogsPerPage
const currentDogs = allDogs.slice(indexOfFirstDog,indexOfLastDog)

const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
}

useEffect(()=>{
     dispatch(getDogs());
     dispatch(getTemperaments())
},[dispatch])

function handleClick(e){
e.preventDefault();
dispatch(getDogs());
setRefresh('default')
setCurrentPage(1)
}

function handleFilterTemperament(e){
dispatch(filterDogsByTemperament(e.target.value))
setCurrentPage(1)
setRefresh()
}

function handleFilterCreated(e){
    dispatch(filterCreated(e.target.value))
    setCurrentPage(1)
    setRefresh()
}
const handleOrderByName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`);
    setRefresh()
  };
  const handleOrderByWeight = (e) => {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`);
    setRefresh()
  };

return(
    <div>
        <Link to='/dog'><button className={`${style.landingPage}`}>Crear dog</button></Link>
        <h1>DOGS</h1>
        <button onClick={e=> {handleClick(e)}} className={`${style.landingPage}`}>
            volver a cargar dogs
        </button>
        <div>
        <select onChange={handleOrderByName} className={style.select_temperaments} value={refresh}>
                <option value="default" disabled selected defaultValue >
                  Alphabetical order
                </option>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
              </select>
        <select onChange={handleOrderByWeight} className={style.select_temperaments} value={refresh}>
            <option value='default' disabled selected defaultValue>
                less weight order
            </option>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
        </select>
            <select onChange={e => handleFilterTemperament(e)} className={style.select_temperaments} value={refresh}>
                <option value='default' disabled selected defaultValue>temperaments</option>
            {temperaments.map((e)=>(
                    <option value={e.name} key={e.id} className={style.option_temperaments}>{e.name}</option>
                ))}
                
            </select>
            <select onChange={e => handleFilterCreated(e)} className={style.select_temperaments} value={refresh}>
                <option value="default" disabled selected defaultValue>All</option>
                <option value="created">created dogs</option>
                <option value="api">api Dogs</option>
            </select>
            <div className={`${style.pagination}`}>
            <Pagination
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            pagination= {pagination}/>
            </div>
            <SearchBar pagination={pagination}/>
            <div className={style.main_container}>
                <div className={style.container_cards}>
            {
                currentDogs?.map((e)=> {
                    return(
                        <div className={`${style.container_card}`} key={e.id}>
                        <Link to={"/home/" + e.id}>
                          <Card name={e.name} temperament={e.temperaments} image={e.image} weight ={e.weight} key={e.id}/>                         
                        </Link>
                        </div>
                    )
                })
            }
                </div>
            </div>
        </div>
    </div>
)

}