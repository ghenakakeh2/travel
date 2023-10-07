import './SendMassage.css'
import React from 'react'
import Navv from '../Nav/Nav'
import sendMassageImage from '../images/send massage.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SendMessage = () => {
  return (
  
    <section className="sendMessage-page">
    <Navv />
    <h1 className='  '> Send message </h1>
    
    <Row className='sendMessage-content justify-content-space-between  mt-5 pt-5'>

    <Col lg={6} className='d-none d-lg-block '>
    <div className='sendMessage-img '>
    
    </div>
    </Col>

    <Col lg={6} md={8} sm={12} className=' ms-md-auto me-md-auto mt-md-5'>
    <div className='sendMessage '>
    <form>
     
      <input type='text'    placeholder='Full name'/>


      <input type='email'    placeholder='Email'/>
      <input type='text' placeholder='Subject'/>
      <textarea placeholder='Details' />
      
     
      
      <button>Submit</button>
    </form>
    </div>
    </Col>


   
 
    </Row>
  


    </section>
      
   
  )
}

export default SendMessage;