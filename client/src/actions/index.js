import axios from 'axios';

export function getDogs(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogs",{

        });
        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        })
    }
}

export function filterDogsByTemperament(payload){
    console.log(payload)
    return{
        type:'FILTER_BY_TEMPERAMENT',
        payload
    }
}

export function filterCreated(payload){
    return{
        type: 'FILTER_CREATED',
        payload
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function getNameDogs(name){
    return async function(dispatch){
        try{
        var json = await axios.get("http://localhost:3001/dogs?name="+ name);
        return dispatch({
            type: "GET_NAME_DOGS",
            payload: json.data
        })
    } catch(error){
        console.log(error)
    }
    }
}

export function getTemperaments(){
    return async function(dispatch){
        var info = await axios.get("http://localhost:3001/temperament")
        return dispatch({
            type: "GET_TEMPERAMENT",
            payload: info.data
        })
    }
}

export function postDog(payload){
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/dogs",payload)
        console.log(response)
        return response;
    }
}

export function getDetail(id){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/dogs/" + id)
            return dispatch({
                type: "GET_DETAILS",
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}