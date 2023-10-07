import './Nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route,Link  } from 'react-router-dom';





import AboutUs from '../About Us/AboutUs'
import FAQ from '../About Us/FAQ/FAQ'
import Services from '../About Us/Services/Services'
import Contact from '../Contect/Contact';
import HomePage from '../HomePage/HomePage'
import SignUpPage from '../SignupPage/SignupPage'
import PaymentCard from '../Payment card/PaymentCard'
import Payment  from '../Payment/Payment'

function Navv(props) {
 const  changeButtonText = props.changeButtonText;
  return (
   
  <>
  <Navbar expand="lg" className="navbar position-absolute">
      <Container>
        <Navbar.Brand  className='Logo' to="/"as={Link} ><div className='logo_div '>Logo Here</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='mb-4' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
          <Nav.Link  as={Link} to="/" className='nav'></Nav.Link>
            <Nav.Link  as={Link} to="/About" className='nav'>About us</Nav.Link>
            <Nav.Link  as={Link} to="/FAQ" className='nav'>FAQ’S</Nav.Link>
            <Nav.Link  as={Link} to='/services' className='nav'>Our services</Nav.Link>
            <Nav.Link  as={Link} to="/payment" target='_blanck' className='nav'>Payment</Nav.Link>
            <Nav.Link  as={Link} to="/contact" target='_blanck' className='nav'>Contact us</Nav.Link>
            
            <Nav.Link as={Link} to={`/${props.signup}`} target='_blanck' className='nav'>{props.signup}</Nav.Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <Routes>
             <Route path="/" element= {<AboutUs/>} />
             <Route path="/Sign Up" element= {<SignUpPage changeButtonText={changeButtonText}/>} />
             <Route path="/login" element= {<HomePage changeButtonText={changeButtonText}/>} />
             <Route path="/paymentCard" element= {<PaymentCard/>} />
             <Route path="/payment" element= {<Payment/>} />



  
             <Route path="/About" element= {<AboutUs/>} />
             <Route path="/FAQ" element={ <FAQ />} />
             <Route path="/services" element={ <Services />} />
             <Route path="/payment" element={<Payment/>} />
             <Route path="/contact" element={ <Contact />} />
     
           </Routes>
  
  </>



    
  
  );
}

export default Navv;












