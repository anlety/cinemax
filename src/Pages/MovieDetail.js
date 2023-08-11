import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {

  let { id } = useParams();
  const [aMovie, setAMovie] = useState(null);

  useEffect(() => {
    async function getMovieId() {
      const idResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=21f1c36b2bf923f99171a5498f780780`)
      console.log(idResponse.data);
      setAMovie(idResponse.data)
    }

    getMovieId()
  }, [id])



  return (

    <div className='movie-info'   >
        <div className="backgroundImage"  style={{backgroundImage: `url(https://image.tmdb.org/t/p/w185${aMovie && aMovie.backdrop_path})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}> 
          
 
      <div className='movie-detail'>
      
         
         
        
        <h1 className='movie-name'>{aMovie && aMovie.title}</h1>
        <p className='genre'> {aMovie && aMovie.release_date}</p>
        <p className='des'>{aMovie && aMovie.overview}</p>
        <p className='starring'> <span>Popularity:</span> {aMovie && aMovie.popularity}</p>

      </div>

      </div>

     </div >
  )
}

export default MovieDetail
