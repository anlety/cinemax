import React from 'react'
import { Form} from 'react-bootstrap'

import Card from '../components/Card'

const Home = (props) => {
  
  const{onChange, query, onSubmit} = props
  const {movies,onNext, onPrevious, page} = props

  return (
    <div className='container'>

      
<Form className="homeForm" onSubmit={onSubmit}>
        <input
          type="search"
          placeholder="Search movie"
          className="me-2"
          aria-label="Search"
          value={query}
          
          onChange={onChange}
        />
        {/* <p className='text-light'>{errors}</p> */}
        
      </Form>
      
      <div className="row carte">
        {/* Mapping */}
        
         {movies&&movies.map(film => (<Card key = {film.id} film = {film} />))}  

          
        </div>
        <div className="row my-4 bottomBar">
          <button className="btn  previous  btn-dark col " onClick={() => onPrevious()}>Previous</button>
          <div className="col text-light text-center">{page}</div>
          <button className="btn btn-dark col next" onClick={() => onNext()}>Next</button>
        </div>
        
      </div>

    

    
   
   
  )
}

export default Home