import './AboutUs.css'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutHome from './AboutHome/AboutHome'
import  Services from './Services/Services'
import FAQ from './FAQ/FAQ'
import Footer from '../Footer/Footer'
import Navv from '../Nav/Nav';

const AboutPage = () => {
    return (
     
        <>
    

        <AboutHome />
        <Services />
        <FAQ />
        <Footer />
        </>
        
     
    )
  }
  
  export default AboutPage;