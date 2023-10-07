import './Payment.css'
import React from 'react'
import Navv from '../Nav/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link  } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const Payment = () => {
  return (
  
    <section className="payment-page pt-4">
    <h1 > Payment with Paytm & UPI</h1>
    
    <Row className='payment-content justify-content-space-between  mt-5'>

    <Col lg={5} className='d-none d-lg-block '>
    <div className='payment-img '>
   
    </div>
    </Col>

    <Col lg={6} md={8} sm={12} className=' ms-md-auto me-md-auto mt-md-5'>
    <div className='payment '>
    <form>
     <label >Company number</label>
     <br/>
      <input type='text'    placeholder='(225) 555-0118'/>
      

<label>Add screenshot</label>
<br/>
      <input type='email'    placeholder='Upload file'/>
      

    </form>
    </div>
    </Col>



   
 
    </Row>
    <p className='pay-with position-absolute'>Or pay with <Nav.Link as={Link} to='/paymentCard' target='_blanck' className='nav'> Visa card or Mastercard</Nav.Link> </p>


    </section>
      
   
  )
}

export default Payment;