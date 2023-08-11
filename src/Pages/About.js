import React from 'react'
import samuel from '../assets/netflix.jpg'

const About = () => {
  return (


<div className='aboutContainer'>
  <div className='aboutTitle'>
    <h1>About Us</h1>
     </div>
     <div className='aboutContent'>
       <div className='aboutArticle'>
         <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et maxime aliquam laudantium incidunt dolorem aliquid repellendus quod neque, nam iusto?</h2>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ea eius fuga corporis, officiis cumque facilis architecto quis repudiandae odit odio ullam quasi culpa assumenda iure magni. Ipsa, vitae blanditiis.</p>  
         {/* <a href="" className='button'>Read more</a> */}
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ab? Pariatur debitis molestiae neque! Iure, odio voluptatum, natus eius nisi architecto in dolores illum distinctio harum ratione! Eligendi libero praesentium sequi v</p>  
       </div>
       <div className='aboutImage'>
         <img className='samuel' src={samuel} alt="card" />
       </div>

     </div>

</div>
  )
}

export default About