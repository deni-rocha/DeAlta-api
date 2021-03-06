const  path  = require('path')
const fileName = 'index.html'

class PageController {
  async getHome(req, res) {

    res.sendFile(fileName, getOptions('Home'), function (err) {
      if (err) {
        next(err)
      }
    })

  }

  getArtist(req, res){
    res.sendFile(fileName, getOptions('Artist'), function (err) {
      if (err) {
        next(err)
      }
    })
  }

  getTrack(req, res){
    res.sendFile(fileName, getOptions('Track'), function (err) {
      if (err) {
        next(err)
      }
    })
  }

  getAlbum(req, res){
    res.sendFile(fileName, getOptions('Album'), function (err) {
      if (err) {
        next(err)
      }
    })
  }

  getPlaylist(req, res){
    res.sendFile(fileName, getOptions('Playlist'), function (err) {
      if (err) {
        next(err)
      }
    })
  }

  getPodcast(req, res){
    res.sendFile(fileName, getOptions('Podcast'), function (err) {
      if (err) {
        next(err)
      }
    })
  }
}


function getOptions(namePage) {
  const options = {
    root: path.join(__dirname, `../../../page/${namePage}`),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
      'Content-Type': 'text/html; charset=utf-8'
    }
  }

  return options
}

module.exports = new PageController()
