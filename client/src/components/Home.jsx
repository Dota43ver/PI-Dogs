import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getDogs,filterDogsByTemperament, filterCreated, orderByName } from '../actions';
import {Link} from 'react-router-dom';
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

export default function Home(){

const dispatch = useDispatch()
const allDogs = useSelector((state) => state.dogs)
const [orden, setOrden] = useState('')
const [currentPage,setCurrentPage] = useState(1)
const [dogsPerPage, setDogsPerPage] = useState(8)
const indexOfLastDog = currentPage * dogsPerPage
const indexOfFirstDog = indexOfLastDog - dogsPerPage
const currentDogs = allDogs.slice(indexOfFirstDog,indexOfLastDog)

const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
}

useEffect(()=>{
     dispatch(getDogs());
},[dispatch])

function handleClick(e){
e.preventDefault();
dispatch(getDogs());
}

function handleFilterTemperament(e){
dispatch(filterDogsByTemperament(e.target.value))
}

function handleFilterCreated(e){
    dispatch(filterCreated(e.target.value))
}
const handleOrderByName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  };

return(
    <div>
        <Link to='/dog'>Crear dog</Link>
        <h1>DOGS</h1>
        <button onClick={e=> {handleClick(e)}}>
            volver a cargar dogs
        </button>
        <div>
        <select onChange={handleOrderByName}>
                <option disabled selected defaultValue>
                  Alphabetical order
                </option>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
              </select>
            <select onChange={e => handleFilterTemperament(e)}>
                <option value="All">All</option>
                <option value="Confident">Confident</option>
                <option value="Trainable">Trainable</option>
                <option value="Fast">Fast</option>
                <option value="Stubborn">Stubborn</option>
                <option value="Active">Active</option>
                <option value="Agile">Agile</option>
                <option value="Bright">Bright</option>
                <option value="Joyful">Joyful</option>
                <option value="Adaptable">Adaptable</option>
                <option value="Spirited">Spirited</option>
                <option value="Spunky">Spunky</option>
                <option value="Unflappable">Unflappable</option>
                <option value="Gay">Gay</option>
                <option value="Patient">Patient</option>
                <option value="Easygoing">Easygoing</option>
                <option value="Lively">Lively</option>
                <option value="Self-assured">Self-assured</option>
                <option value="Sociable">Sociable</option>
                <option value="Diligent">Diligent</option>
                <option value="Good-natured">Good-natured</option>
                <option value="Trusting">Trusting</option>
                <option value="Fierce">Fierce</option>
                <option value="Hardworking">Hardworking</option>
                <option value="Cautious">Cautious</option>
                <option value="Benevolent">Benevolent</option>
                <option value="Reliable">Reliable</option>
                <option value="Mischievous">Mischievous</option>
                <option value="Bubbly">Bubbly</option>
                <option value="Vigilant">Vigilant</option>
                <option value="Cooperative">Cooperative</option>
                <option value="Loving">Loving</option>
                <option value="Brave">Brave</option>
                <option value="Cheerful">Cheerful</option>
                <option value="Bold">Bold</option>
                <option value="Vocal">Vocal</option>
                <option value="Respectful">Respectful</option>
                <option value="Watchful">Watchful</option>
                <option value="Lovable">Lovable</option>
                <option value="Strong">Strong</option>
                <option value="Fun-loving">Fun-loving</option>
                <option value="Even Tempered">Even Tempered</option>
                <option value="Energetic">Energetic</option>
                <option value="Sensitive">Sensitive</option>
                <option value="Self-important">Self-important</option>
                <option value="Familial">Familial</option>
                <option value="Extroverted">Extroverted</option>
                <option value="Responsible">Responsible</option>
                <option value="Docile">Docile</option>
                <option value="Quiet">Quiet</option>
                <option value="Alert">Alert</option>
                <option value="Sturdy">Sturdy</option>
                <option value="Clownish">Clownish</option>
                <option value="Reserved">Reserved</option>
                <option value="Cat-like">Cat-like</option>
                <option value="Receptive">Receptive</option>
                <option value="Kind">Kind</option>
                <option value="Opinionated">Opinionated</option>
                <option value="Proud">Proud</option>
                <option value="Obedient">Obedient</option>
                <option value="People-Oriented">People-Oriented</option>
                <option value="Thoughtful">Thoughtful</option>
                <option value="Strong Willed">Strong Willed</option>
                <option value="Tolerant">Tolerant</option>
                <option value="Steady">Steady</option>
                <option value="Stable">Stable</option>
                <option value="Companionable">Companionable</option>
                <option value="Wild">Wild</option>
                <option value="Territorial">Territorial</option>
                <option value="Tenacious">Tenacious</option>
                <option value="Fearless">Fearless</option>
                <option value="Hard-working">Hard-working</option>
                <option value="Powerful">Powerful</option>
                <option value="Intelligent">Intelligent</option>
                <option value="Inquisitive">Inquisitive</option>
                <option value="Independent">Independent</option>
                <option value="Clever">Clever</option>
                <option value="Sweet-Tempered">Sweet-Tempered</option>
                <option value="Suspicious">Suspicious</option>
                <option value="Rugged">Rugged</option>
                <option value="Composed">Composed</option>
                <option value="Aggressive">Aggressive</option>
                <option value="Friendly">Friendly</option>
                <option value="Dutiful">Dutiful</option>
                <option value="Rational">Rational</option>
                <option value="Charming">Charming</option>
                <option value="Keen">Keen</option>
                <option value="Good-tempered">Good-tempered</option>
                <option value="Gentle">"Gentle"</option>
                <option value="Quick">Quick</option>
                <option value="Devoted">Devoted</option>
                <option value="Amiable">Amiable</option>
                <option value="Loyal">Loyal</option>
                <option value="Dominant">Dominant</option>
                <option value="Willful">Willful</option>
                <option value="Reserved">Reserved</option>
                <option value="Refined">Refined</option>
                <option value="Feisty">Feisty</option>
                <option value="Outgoing">Outgoing</option>
                <option value="Responsive">Responsive</option>
                <option value="Bossy">Bossy</option>
                <option value="Determined">Determined</option>
                <option value="Trustworthy">Trustworthy</option>
                <option value="Attentive">Attentive</option>
                <option value="Great-hearted">Great-hearted</option>
                <option value="Assertive">Assertive</option>
                <option value="Protective">Protective</option>
                <option value="Hardy">Hardy</option>
                <option value="Playful">Playful</option>
                <option value="Happy">Happy</option>
                <option value="Cunning">Cunning</option>
                <option value="Aloof">Aloof</option>
                <option value="Excitable">Excitable</option>
                <option value="Courageous">Courageous</option>
                <option value="Affectionate">Affectionate</option>
                <option value="Self-confidence">Self-confidence</option>
                <option value="Curious">Curious</option>
                <option value="Dignified">Dignified</option>
                <option value="Calm">Calm</option>
                <option value="Generous">Generous</option>
                <option value="Athletic">Athletic</option>
                <option value="Faithful">Faithful</option>
                <option value="Adventurous">Adventurous</option>
                <option value="Merry">Merry</option>
                <option value="Boisterous">Boisterous</option>
                <option value="Eager">Eager</option>
            </select>
            <select onChange={e => handleFilterCreated(e)}>
                <option value="All">All</option>
                <option value="created">created dogs</option>
                <option value="api">api Dogs</option>
            </select>
            <Pagination
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            pagination= {pagination}/>
            <SearchBar/>
            {
                currentDogs?.map((e)=> {
                    return(
                          <Card name={e.name} temperament={e.temperaments} image={e.image} weight ={e.weight}/>                         
                    )
                })
            }
        </div>
    </div>
)

}