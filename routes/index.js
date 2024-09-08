var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');


router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`)
    .then(results => results.json())
    .then(data => res.json({movies: data.results}))          
      
  });

  const url = 'https://api.themoviedb.org/3/movie/upcoming';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.Access_Token_Auth}`
    }
  };
  
  fetch(url, options)
  .then(res => res.json())
  .then(data => res.json({upcomings: data.results}))
  .catch(err => console.error('error:' + err));

    

module.exports = router