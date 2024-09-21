var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');


router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`)
    .then(results => results.json())
    .then(data => res.json({movies: data.results}))          
      
  });


router.get('/upcomingMovies', (req,res) => {
  fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`)
  .then(results => results.json())
  .then(data => res.json({upcomingMovies: data.results}))
})

  
module.exports = router