const axios = require("axios");
const db = require("../db");
const { Dog, Temperament } = require('../db');

const getApiInfo = async () =>{
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds`)
    const apiInfo = await apiUrl.data.map(e => {
        return {
            id:e.id,
            name: e.name,
            height: e.height.metric,
            weight: e.weight.metric,
            life_span: e.life_span,
            temperament: e.temperament
        }
    })
    return apiInfo;
}

const getDbInfo = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });
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