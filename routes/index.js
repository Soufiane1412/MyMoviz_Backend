var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const fetchFromAPI = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error, status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error whilst fetching the ${url}`, err)
    throw error;
  }
}

router.get('/movies', async (req,res) => {
  try {
    const data = await fetchFromAPI(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`);
    console.log('fetching data')
    res.json({movies: data.results});
    console.log({movies: data.results});
  } catch (error) {
    console.error('Error in /movies route:' ,error)
    res.status(500).json({ error: 'Failed to fetch movies data'})
  } 
});

router.get('/upcomingMovies', async (req,res)=> {
  try {
    const data = await fetchFromAPI(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`);
    res.json({upcomingMovies: data.results})
  } catch (error) {
    console.error('Error in /upcomingMovies route:', error);
    res.status(500).json({error: 'Failed to fetch upcoming movies data'})
  }
});
  
module.exports = router