import './contact.css'
import React from 'react'
import Navv from '../Nav/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import callImage from '../images/call.png'
import insgramImage from '../images/instgram.png'
import emailImage from '../images/email.png'
import locationImage from '../images/location.png'

const Contact = () => {
  return (
  
    <section className="Contact-page pt-4">

    
    <Row className='Contact-content justify-content-space-between  '>

    <Col lg={6} className='d-none d-lg-block '>
    <div className='Contact-img '>
    
    </div>
    </Col>

    <Col lg={5} md={8} sm={12} className=' ms-md-auto me-md-auto mt-md-5'>
    <div className='Contact '>
     <form>
     <h2>Contact us</h2>
      <ul>
        <li>
          <img src={callImage}/>
          
          <span className=''>(225) 555-0118  </span>
          <br/>
          <span className='ms-lg-5 ms-sm-5 '> (808) 555-0111 </span>
          
        </li>
        <li>
          <img src={locationImage}/>
          <span>2715 Ash Dr. San Jose, South Dakota 83475  </span>
        </li>
        <li>
          <img src={emailImage}/>
          <span>curtis.weaver@example.com    </span>
          {/* <br/> */}
          <span className='ms-lg-2'>jackson.graham@example.com</span>
        </li>
        <li>
          <img src={insgramImage}/>
          <span>@username</span>
        </li>
      </ul>
     </form>
      

    </div>
    </Col>
   


   
 
    </Row>



    </section>
      
   
  )
}

export default Contact;