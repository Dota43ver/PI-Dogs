const axios = require("axios");
const db = require("../db");
const { Dog, Temperament } = require('../db');

const getApiInfo = async () =>{
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds`)
    const apiInfo = await apiUrl.data.map(e => {
        let temperament = []
        if(e.temperament){
            temperament=e.temperament.split(", "); 
        }
        return {
            id:e.id,
            name: e.name,
            height: e.height.metric,
            weight: e.weight.metric,
            life_span: e.life_span,
            temperaments: temperament,
            image: e.image.url,
            createdInDb: e.createdInDb
        }
    })
    return apiInfo;
}

const getDbInfo = async () => {
    let datachota = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });
const dataFilter = datachota.map((e) =>{
    return {
        id : e.id,
        name : e.name,
        height: e.height,
        weight: e.weight,
        image: e.image,
        life_span : e.life_span,
        createdInDb: e.createdInDb,
        temperaments: e.temperaments.map((e)=> e.name)

    }
})
return dataFilter
}

const getAllDogs = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const totalInfo = apiInfo.concat(dbInfo);
    
    return totalInfo;
}

module.exports = {
    getApiInfo,
    getDbInfo,
    getAllDogs,
}