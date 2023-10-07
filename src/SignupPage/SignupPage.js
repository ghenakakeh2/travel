import './SignupPage.css'
import React ,{useState}from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Link  } from 'react-router-dom';






const SignUpPage = (props) => {
  return (

    <section className="SignUp-page">
      <Row className='SignUp-content' >
        <Col lg={6} className='d-none d-lg-block'>
          <div className='signup-img'>

          </div>
        </Col>


        <Col lg={6} md={8} sm={10}>
          <div className='SignUp'>
            <div className='persone-icon '>

            </div>
            <form>
              <h5>
                Sign Up
              </h5>
              <input type='text' placeholder='Name' />


              <input type='email' placeholder='Email' />
              <input type='password' placeholder='Password' />
              <input type='password' placeholder='Re-enter Password' />
              <input type='number' placeholder='Phone' />

              <div className='b'>
                <input type="checkbox" id="agree" name="agree" value="agree" />
                <label for="agree">I agree to the terms.</label>
              </div>


              <button id='sign-up' onClick={props.changeButtonText}>Sign Up </button>
              <p> Already have account? <Nav.Link as={Link} to='/login' target='_blanck' className='nav'>login</Nav.Link> </p>
            </form>
          </div>
        </Col>




      </Row>

      <h1 className='w-50 d-none d-lg-block'> WELCOME </h1>


    </section>


  )
}
export default SignUpPage;