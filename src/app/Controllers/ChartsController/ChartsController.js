const axios = require('axios')

class ChartsController {
  async getCharts(req, res) {
    try {
      const { data } = await axios.get(`https://api.deezer.com/chart/`)

      return res.status(200).json({
        error: false,
        data,
      })
    } catch (error) {
      return res.status(404).json({
        error: 'true',
        message: 'erro ao obter os charts, endereço não encontrado',
      })
    }
  }
}

module.exports = new ChartsController()
