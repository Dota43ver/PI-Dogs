import React, {useState, useEffect} from 'react';
import {Link , useHistory} from 'react-router-dom';
import {postDog, getTemperaments} from '../actions/index'
import {useDispatch, useSelector} from 'react-redux'


function validate(input){
    let errors = {}
    if(!input.name){
        errors.name = 'Se requiere nombre'
    } else if(!input.height){
        errors.height = 'Se requiere altura'
    } else if(!input.weight){
        errors.weight = 'se requiere peso'
    } else if (input.name && input.height && input.weight){
        errors = false
    }

    return errors
}


export default function DogCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const temperaments = useSelector((state) => state.temperaments)
    const [errors,setErrors] = useState({})

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
    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
    }))
    console.log("esto es error:",errors)
}

function handleSelect(e){
    setInput({
        ...input,
        temperaments:[...input.temperaments,e.target.value]
    })
}

function handleDelete(el){
    setInput({
        ...input,
        temperaments: input.temperaments.filter(e => e !== el)
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
                {errors.name && (
                    <p className='error'>{errors.name}</p>
                )}
            </div>
            <div>
                <label>height</label>
                <input
                type = "text"
                value={input.height}
                name="height"
                onChange={(e)=>handleChange(e)}
                />
                {errors.height && (
                    <p className='error'>{errors.height}</p>
                )}
            </div>
            <div>
                <label>weight</label>
                <input
                type="text"
                value={input.weight}
                name="weight"
                onChange={(e)=>handleChange(e)}
                />
                {errors.weight && (
                    <p className='error'>{errors.weight}</p>
                )}
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
            {/* <ul><li>{input.temperaments.map(el => el + " ,")}</li></ul> */}
            <button type='submit' disabled={!!errors}>Crear dog</button>
        </form>
        {input.temperaments.map(el=>
            <div className='divTemp'>
                <p>{el}</p>
                <button className='buttonX' onClick={()=> handleDelete(el)}>x</button>
            </div>
            )}

    </div>
)

}