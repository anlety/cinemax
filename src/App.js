
import React from 'react';
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import axios from 'axios'


// Import component
import Header from './components/Header';
import Footer from './components/Footer'

// Import Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import PageNotFound from './Pages/PageNotFound'
import MovieDetail from './Pages/MovieDetail'


function App() {
// useState
  const [results, setResults] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  

// useEffect
  useEffect(() => {
    async function getMovies() {
      try {
        
         const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY_SECRET}&language=en-US&sort_by=popularity.desc&page=${page}`)

         

        //  &page=

        //  const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_SECRET}&sort_by=popularity.desc&page=${page}`)

      console.log(response.data.results)
      setResults(response.data.results)
      } catch (err) {
        console.log(err)
      }
     
    }
    getMovies()
  }, [page])  

   // Input validation

   const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value)
   
  }

  // search movie
  

 const searchMovies = async(e) => {

  e.preventDefault()
    
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY_SECRET}&query=${query}&page=${page}`)
       
    console.log(response.data.results)
    setResults(response.data.results)
    } catch (e) {
      console.log(e)
    }
   
  }
  

  // Pagination handler

  const handleNext = () => {
    setPage(page+1)
  }

  const handlePrevious = () => {
    if(page>1) {
      setPage(page-1)}
    
  }
  // const handleSubmit = (e) => {
  //      e.prevent.default()
  //     searchMovies()
  // }

  return (
    <div className="App">
    
          <Header />

           <Routes>
           
             <Route path='/' element={<Home movies = {results} onNext={handleNext} onPrevious = {handlePrevious} page={page}   onChange={handleChange}  query={query}  onSubmit= {searchMovies}/>} />

            
             <Route path="/moviedetails/:id" element={<MovieDetail />} />
             <Route path='/about' element={<About/>} />
             <Route path='/contact' element={<Contact/>} />
             <Route path='*' element={<PageNotFound />} />
             
           </Routes>

       <Footer/>

      
    </div>
  );
}

export default App;
