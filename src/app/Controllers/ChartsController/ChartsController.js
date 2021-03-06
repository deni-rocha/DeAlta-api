const axios = require('axios')

class ChartsController {
  async getCharts(req, res) {
    try {
      const { data } = await axios.get(`https://api.deezer.com/chart/0`)

      const randomNumber = Math.floor(Math.random() * (data.artists.total - 1))
      const trendingArtist = data.artists.data[randomNumber]

      const newData = {...data, trendingArtist}

      return res.status(200).json(newData)
    } catch (error) {
      return res.status(404).json(error)
    }
  }
}

module.exports = new ChartsController()
