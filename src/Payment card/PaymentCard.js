import './PaymentCard.css'
import React from 'react'
import visa_icon from '../images/icon _Visa icon_.png'
import masterCard from '../images/icon _MasterCard icon_.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link  } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const PaymentCard = () => {
  return (
  
    <section className="paymentCard-page pt-4">

    <h1 className='  '> Payment Via Card </h1>
    
    <Row className='paymentCard-content justify-content-space-between  mt-5'>

    <Col lg={5} className='d-none d-lg-block '>
    <div className='paymentCard-img '>
    
    </div>
    </Col>

    <Col lg={7} md={8} sm={12} className=' ms-md-auto me-md-auto mt-md-5'>
    <div className='paymentCard '>
    <form>
   
      <input type='text'    placeholder='Card number'/>
     <div className='icons'>
     <img src={masterCard}/>
      <img src={visa_icon}/>
     </div>

      <Row className=''>
        <Col lg={9}  md={8}  className='pe-0'>
      <input     placeholder='Expiration date MM/YY' className=''  />

        </Col>
      <Col lg={2} md={3} sm ={4}className='ps-0 '>
      <input placeholder='CVV'className='p-2 pe-3' />
      </Col>
      </Row>
      <button>Submit payment</button>
      

    </form>
    </div>
    </Col>
   


   
 
    </Row>
    <p className='pay-with'>Or pay with  <Nav.Link as={Link} to='/payment' target='_blanck' className='nav'> Paytm & UPI</Nav.Link> </p>


    </section>
      
   
  )
}

export default PaymentCard;