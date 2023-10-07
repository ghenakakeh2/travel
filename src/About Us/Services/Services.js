import React from 'react'
import './Services.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuIcon from '../../images/icon _menu icon_.png'
import arrowImage1 from '../../images/icon _arrow right alt_ (1).png'
import arrowImage2 from '../../images/icon _arrow right alt_.png'
import img1 from '../../images/services-1.png'
import img2 from '../../images/services-2.png'
import img3 from '../../images/services-3.png'
import img4 from '../../images/services-4.png'




const Services = () => {
  return (
    <div className='service-page'>
      <div className='title'>
        <img src={MenuIcon} />
        <h2>Our services</h2>


      </div>
      <div className='content_service'>
        <Row >
          <Col lg={12}>

            <Row className='item justify-content-space-between align-items-center '>
              <Col lg={3} md={4} sm={8} className='ps-2 '>
                <p>Airplane ticket</p>

              </Col>
              <Col lg={2} md={2} className=''>
                <img src={arrowImage2} className='arrow' />

              </Col>
              <Col lg={4} md={4}  className='img-right '>
                <img src={img1} className='image-content w-75' />

              </Col>

            </Row>

          </Col>

          <Col lg={12}>
            <Row className='item justify-content-space-between align-items-center'>
            <Col lg={4} md={4} className='img-left'>


<img src={img2} className='image-content w-75' />

</Col>
              <Col lg={2} md={2}  >
                <img src={arrowImage1} className='arrow' />

              </Col>
             
              <Col lg={3} md={4} sm={8}> 
                <p className='ps-3 pe-3'>Hotel reservation</p>


              </Col>

            </Row>





          </Col>

          <Col lg={12}>
            <Row className='item justify-content-space-between align-items-center'>
              <Col lg={3} md={4} sm={8} >
                <p className='ps-3 pe-3'>Visa exportation</p>



              </Col>
              <Col lg={2} md={2} >
                <img src={arrowImage2} className='arrow' />

              </Col>
              <Col lg={4} md={4} className='img-right'>


                <img src={img3} className='image-content w-75' />

              </Col>

            </Row>


          </Col>

          <Col lg={12}>
            <Row className='item justify-content-space-between align-items-center'>
            <Col lg={4} md={4} className='img-left'>


<img src={img4} className=' w-75' />

</Col>
              <Col lg={2} md={2} >
                <img src={arrowImage1} className='arrow' />

              </Col>
             

              <Col lg={3} md={4} sm={8}>
                <p>Tourism trips</p>




              </Col>

            </Row>





          </Col>
        </Row>









      </div>
    </div>
  )
}

export default Services
