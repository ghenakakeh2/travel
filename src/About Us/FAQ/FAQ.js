import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './FAQ.css'

const FAQ = () => {
  return (
    <section className='FAQ-Section'>
      <Row className='justify-content-around  mt-lg-3 '>
        <Col lg={2} className='mt-lg-5 pb-md-2 '>
          <h2 className='mb-sm-3'>Frequently Asked Questions</h2>

        </Col>
        <Col lg={6} md={8} >
          <div className='content_FAQ p-md-4   mt-sm-4 '>
            <div className='Question'>
              <h4>Question no1</h4>
              <p>Answer no1</p>
            </div>

            <div className='Question'>
              <h4>Question no2</h4>
              <p>Answer no2</p>
            </div>


            <div className='Question'>
              <h4>Question no3</h4>
              <p>Answer no3</p>
            </div>


            <div className='Question'>
              <h4>Question no4</h4>
              <p>Answer no4</p>
            </div>

            <div className='Question'>
              <h4>Question no5</h4>
              <p>Answer no5</p>
            </div>

          </div>
        </Col>
      </Row>

    </section>
  )
}

export default FAQ
