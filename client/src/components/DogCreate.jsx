import React, {useState, useEffect} from 'react';
import {Link , useHistory} from 'react-router-dom';
import {postDog, getTemperaments} from '../actions/index'
import {useDispatch, useSelector} from 'react-redux'

export default function DogCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const temperaments = useSelector((state) => state.temperaments)

    const [input,setInput] = useState({
        name: "",
        height:"",
        weight:"",
        life_span:"",
        temperaments:[]

    })

function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    console.log(input)
}

function handleSelect(e){
    setInput({
        ...input,
        temperaments:[...input.temperaments,e.target.value]
    })
}

function handleSubmit(e){
    e.preventDefault()
    console.log(input)
    dispatch(postDog(input))
    alert("dog creado!")
    setInput({
        name: "",
        height:"",
        weight:"",
        life_span:"",
        temperaments:[]
    })
    history.push('/home')
}

useEffect(()=>{
dispatch(getTemperaments());
},[]);


return(
    <div>
        <Link to= '/home'><button>Volver</button></Link>
        <h1>Crea tu Dog!</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <label>Name:</label>
                <input
                type= "text"
                value={input.name}
                name="name"
                onChange={(e)=>handleChange(e)}
                />
            </div>
            <div>
                <label>height</label>
                <input
                type = "text"
                value={input.height}
                name="height"
                onChange={(e)=>handleChange(e)}
                />
            </div>
            <div>
                <label>weight</label>
                <input
                type="text"
                value={input.weight}
                name="weight"
                onChange={(e)=>handleChange(e)}
                />
            </div>
            <div>
                <label>image</label>
                <input
                type="text"
                value={input.image}
                name="image"
                onChange={(e)=>handleChange(e)}
                />
            </div>
            <div>
                <label>life_span</label>
                <input
                type="text"
                value={input.life_span}
                name="life_span"
                onChange={(e)=>handleChange(e)}
                />
            </div>
            <select onChange={(e)=> handleSelect(e)}>
                {temperaments.map((e)=>(
                    <option value={e.name}>{e.name}</option>
                ))}
            </select>
            <ul><li>{input.temperaments.map(el => el + " ,")}</li></ul>
            <button type='submit'>Crear dog</button>
        </form>
    </div>
)

}