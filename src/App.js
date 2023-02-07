import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import Joi from 'joi'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import MovieDetail from './pages/MovieDetail';

function App() {
  const [results, setResults] = useState([])
  
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

 
  

 

  useEffect(()=>{
    async function getMovies() {
      try {
        
         const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY_SECRET}&sort_by=popularity.desc&page=${page}`)
      console.log(response.data.results)
      setResults(response.data.results)
      } catch (err) {
        console.log(err)
      }
     
    }
    getMovies()
  }, [page, ])

  // Input validation

  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value)
   
  }
  // search movie
  

    async function searchMovies() {
      try {
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY_SECRET}&query=${query}&page=${page}`)
         
      console.log(response.data.results)
      setResults(response.data.results)
      } catch (err) {
        console.log(err)
      }
     
    }
    searchMovies()

  
 
  


  // Pagination handler

  const handleNext = () => {
    setPage(page+1)
  }

  const handlePrevious = () => {
    if(page>1) {
      setPage(page-1)}
    
  }
  const handleSubmit = (e) => {
       e.prevent.default()
  }

  
  
  

  return (
    <div className="App">
      
      
      <Router>

        < Header onChange={handleChange}  query={query} onSubmit= {handleSubmit}  />
        <Routes>
          <Route path='/' element = {<Home movies = {results} onNext={handleNext} onPrevious = {handlePrevious} page={page}   onChange={handleChange}  query={query} onSubmit= {handleSubmit} />}/>
          <Route path="/moviedetails/:id" element={<MovieDetail />} />
          <Route path='/about' element={<About />} /> 
          <Route path='/contact' element={<Contact />} /> 
          <Route path='*' element={<PageNotFound />} />
        </ Routes >
          < Footer />
      </ Router>

      
     
      
    </div>
  );
}

export default App;
