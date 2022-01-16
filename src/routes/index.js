const { Router } = require('express')

const ChartsController = require('../app/Controllers/ChartsController/ChartsController')
const routes = new Router()

routes.get('/charts', ChartsController.getCharts)

module.exports = routes
