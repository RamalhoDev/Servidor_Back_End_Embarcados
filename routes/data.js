const Router = require('express-promise-router')
const router = new Router()
const data = require('../utils/data')

module.exports = router

router.get('/coordinates', async (req,res)=>{
    let response = await data.getCoordinates()
    res.status(200).send(response.data)
});

router.get('/route', async (req,res)=>{
    let response = await data.getRoute()
    res.status(200).send(response.data)
});

router.get('/run', async (req,res)=>{
    let coordinates = await data.getCoordinates()
    let route = await data.getNewRoute(coordinates.data)
    await data.run(route.data)
    res.status(200).send("The route started !")
});