import express from 'express'
const router = express.Router()

router.get('/', function(req, res) {
  res.send('Express is up')
})

//router.get('/carousel', function (req, res) {
//console.log(renderToString(<slider />))
//const markup = renderToString(<slider />)
//const str = homeTemplate({
//markup: markup,
//title: 'Carousel'
//})

//res.send(str)
//})

export default router
