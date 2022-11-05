const { Router } = require('express');
const router = Router();
const axios = require("axios");
const { getAllDogs } = require('../functions/getApi.js')
require('dotenv').config();
const { Dog, Temperament } = require('../db');

router.get('/', async (req,res) => {
    const name = req.query.name
    let dogsTotal = await getAllDogs();
    if(name){
        let dogsName = await dogsTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        dogsName.length ?
        res.status(200).send(dogsName) :
        res.status(404).send('there is no dog with that name')
    } else{
        res.status(200).send(dogsTotal)
    }
})


router.post('/', async (req, res) => {
    let {name , height , weight, life_span, temperament} = req.body

    let dogCreated = await Dog.create({
        name , height , weight, life_span
    })

    let temperamentDb = await Temperament.findAll({
        where: {name : temperament}
    })
    dogCreated.addTemperament(temperamentDb)
    res.send('successfully created dog!')
})

router.get('/:id', async (req, res) => {
    const name = req.params.id;
    const dogTotal = await getAllDogs()
    if (name){
        let dogId = await dogTotal.filter(el => el.name == name)
        dogId.length?
        res.status(200).json(dogId):
        res.status(404).send('I didnt find that dog')

    }
})

module.exports = router;