const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const path = require('path')

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*.heroku.com', 'https://dealta.vercel.app/')
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
      res.header(
        'Access-Control-Allow-Headers',
        'Access, Content-Type, Authorization, Acept, Origin, X-Requested-With'
        )
        this.app.use(cors())
        next()
      })
      
       this.app.use(express.static(path.join(__dirname, 'public')))
  }

  routes() {
    this.app.use(routes)
  }
}

module.exports = new App().app
