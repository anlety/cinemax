import React from 'react'
import{BsFillHouseDoorFill} from 'react-icons/bs'
import{AiFillPhone} from 'react-icons/ai'
import{GrMail} from 'react-icons/gr'



const Contact = () => {
  return (
    
      <div className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe excepturi adipisci eligendi maiores nihil fugit commodi provident officia sunt aspernatur pariatur voluptates, tenetur perspiciatis tempora sint quam amet fuga!</p>
        </div>
        <div className='container-contact'>
          <div className='contactInfo'>
            <div className='box'>
              <div className="icon"><BsFillHouseDoorFill size={40}/></div>
              <div className="text">
                <h3>Address</h3>
                <p className='contactNumero'>4567 Compbell avenue, Owatinn, Minesota 5506</p> 
              </div>
            </div>

            <div className='box'>
              <div className="icon"><AiFillPhone size={40}/></div>
              <div className="text">
                <h3>Phone</h3>
                <p className='contactNumero'>(03) 1234 5678</p> 
              </div>
            </div>

            <div className='box'>
              
              <div className="icon">
                <GrMail size={40} />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p className='contactNumero'>compbell@gmail.com</p> 
              </div>
            </div>



          </div>
          <div className='contactForm'>
            <form action="">
              <h2 className='formH2'>Feel free to message us</h2>
              <div className='inputBox'>
                <input type="text" name="" required="required"/>
                <span>Full Name</span>
              </div>
              <div className='inputBox'>
                <input type="text" name="" required="required"/>
                <span>Email</span>
              </div>
              <div className='inputBox'>
                <textarea type="text" name="" required="required"/>
                <span>Type your message...</span>
              </div>
              <div className='inputBoxSend'>
              
              <button  className="btn btn-dark m-1">Send</button>
              </div>

            </form>
          </div>
        </div>
      </div>
      
    
  )
}

export default Contact