const { Router } = require('express')

const ChartsController = require('../app/Controllers/ChartsController/ChartsController')
const routes = new Router()

routes.get('/', (req, res) => {
  res.send(
    `<h1>funcionalidade ainda não aplicada, tente <a href="/charts"> /charts </a></h1>`
  )
})

routes.get('/charts', ChartsController.getCharts)

module.exports = routes
