const { Router } = require('express')

const ChartsController = require('../app/Controllers/ChartsController/ChartsController')
const DetailsController = require('../app/Controllers/DetailsController/DetailsController')
const PageController = require('../app/Controllers/PageController/PageController')
const routes = new Router()

routes.get('/', PageController.getHome)

routes.get('/charts', ChartsController.getCharts)

routes.get('/artist/:id?', (req, res, next) => {

    const { id } = req.params

    if(!id){
        PageController.getArtist(req, res)
    } else {
        next()
    }


} ,DetailsController.getArtist)

routes.get('/track/:id?',(req, res, next) => {

    const { id } = req.params

    if(!id){
        PageController.getTrack(req, res)
    } else {
        next()
    }


} ,DetailsController.getTrack)

module.exports = routes
