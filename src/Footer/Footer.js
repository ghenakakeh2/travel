import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import facebook from '../images/icon _facebook icon_.png';
import Instgram from '../images/icon _instagram with circle icon_.png';
import twitter from '../images/icon _twitter circle icon_.png';
import phone from '../images/icon _phone alt_.png'
import massage from '../images/massage.png'


import './Footer.css'

const Footer = () => {
  return (
    <footer>
         <Row className="justify-content-space-between ">
        <Col lg={4} md={6} sm={12} className='social-media mb-md-3' >
     
    <img src={facebook}/>
    <img src={Instgram}/>
    <img src={twitter}/>
    <span>@username</span>


        </Col>

 <Col lg={4} md={6} sm={12 } className='number'>
       
    <img src={phone}/>
    
    <span> (225) 555-0118</span>

</Col>


 <Col lg={4} md={6} sm={12} className='email'>
       
    <img src={massage}/>
    
    <span> mail@example.com</span>

 
 </Col>
      </Row>

 


    </footer>
  )
}

export default Footer
