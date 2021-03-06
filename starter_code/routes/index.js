const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")
/* GET home page */


// router.get("/movies",(req,res)=>{
//   .then(movies=>{
//     console.log(movies)
//     res.render("movies",{movies})
//   })
//   .catch(error => {
//     console.log(error);
//   });
// })

router.get('/index/movie/:id', (req, res, next) => {
  const {id} =  req.params
  Movie.findById(id)
  .then(movie => {
    res.render('movie', movie);
  })
  .catch(e=>res.send(e))
});
router.get('/index/movies', (req, res, next) => {
  Movie.find({image: {$exists: true}})
  .then(movies => {
    console.log({movies})
    res.render('movies', {movies});
  })
  .catch(e=>res.send(e))
});
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
