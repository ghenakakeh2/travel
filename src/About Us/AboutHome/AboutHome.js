import './AboutHome.css'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const AboutHome = () => {
    return (
        <section className="About-page"> 
        
    
    <Row className="w-100  mt-5 ">
        <Col lg={6} md={12} sm={10} className='mb-md-2 ' >
     
        <h1>
    About Us 
    </h1>
    


        </Col>
        <Col lg={6} md={6} sm={5} className='ms-md-auto me-md-auto  ms-auto me-auto'>
        <div className='Content m-4 '> 
    A brief about the company

    </div>
        </Col>
</Row>
   
  
  
      

        </section>


        
     
    )
  }
  
  export default AboutHome;
;
