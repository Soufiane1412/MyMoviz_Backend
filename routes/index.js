var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');


router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`)
    .then(results => results.json())
    .then(data => res.json({movies: data.results}))          
      
  });

  router.get('/upcoming', (req,res) => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming';
    const options = {
      method:'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.Access_Token_Auth}`
      }
    }

    fetch(url,options)
    .then(res => res.json())
    .then(data => res.json({upcomingMovies: data.results}))
    .catch(err => {
      console.error('Failed To Fetch the Upcoming Movies', err)
      res.status(500).json({error: 'Failed To Fetch The Upcoming Movies'})
    })
  
  })

module.exports = router