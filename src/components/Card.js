import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  // const imgPath= "https://image.tmdb.org/t/p/w500"

  const{film} = props
  return (
   <div className ="col s6 m6 l3 card-contenu">
     <div className="card">
       <div className='card-image '>
    

   
            
            
            <div className='card-details'>
              <Link to={`/moviedetails/${film.id}`}>  {
      film.poster_path == null? <img src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'} alt="card" className='imagePoster'  style={{width: "198px", height: 300}} /> : <img className='posterImage' src= {`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="card" />
    } </Link>
              
            </div>

           
       </div>
        <div className='cardTitle'>
          <h6 className='detailsTitle'>{film.title}</h6>
        </div>
            

       </div>

   </div> 


  
  )
}

export default Card