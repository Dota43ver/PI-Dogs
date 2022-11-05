const { Router } = require('express');
const router = Router();
const axios = require("axios");
const { Dog, Temperament } = require('../db');
const db = require("../db");



router.get("/", async (req, res) => {
    const temperamentsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=live_9NWZYJNXj04j51L7ColdAKGB31nnpFQp5JNosH1dqQC94yAanCiiTuNTRPXpeoA2`);
    const temperaments = temperamentsApi.data.map(t => t.temperament);
    const temps = temperaments.toString().split(",");
    temps.forEach(el => {
        let i = el.trim()
        Temperament.findOrCreate({
             where: { name: i }
        })
    })

    const allTemp = await Temperament.findAll();    
    res.send(allTemp);
});

module.exports = router;