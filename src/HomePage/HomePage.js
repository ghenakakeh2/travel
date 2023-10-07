import './HomePage.css'
import React,{useState} from 'react'
import Navv from '../Nav/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 const HomePage= (props)=>  {

  return (
  
    <section className="home-page">
    <Row className='home-content'>

  <Col lg={5} md={3}>
  <div className='home-login  ms-md-auto me-md-auto mt-md-5'>
    <form>
      <h5>
      Log in
      </h5>
      <input type='email'    placeholder='Email'/>
      <input type='password' placeholder='Password'/>
      <button onClick={props.changeButtonText} >log in </button>
      <p> new here? <span>sign up</span></p>
    </form>
    </div>
  </Col>


  <Col lg={5} className='d-none d-lg-block'>
  <div className='home-img'>
    
    </div>
  </Col>
    <h1> WELCOME <br/><span className=' '>To (agency name) </span> </h1>

    </Row>
  


    </section>
      
   
  )
}
export default HomePage


