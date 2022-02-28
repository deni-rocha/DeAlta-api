const { default: axios } = require("axios")

class DetailsController {


    async getArtist(req, res) {
        try {
            const { id } = req.params
            const responseDeezer = await axios.get(`https://api.deezer.com/artist/${id}/top?limit=5`)
            const data = responseDeezer.data

            // remove propriedade contributors
            const dataFiltered = data.data.filter(obj => delete obj.contributors)                               

            res.status(200).json(dataFiltered)
        } catch (error) {
            res.status(404).json(error)
        }
    }

    async getAlbum(req,res){
        try{

            const { id } = req.params
            const responseDeezer = await axios.get(`https://api.deezer.com/album/${id}/top?limit=5`)
            const data = responseDeezer.data

        } catch (error){

        }
    }
}

module.exports = new DetailsController()