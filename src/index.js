// import React from 'react';
// import ReactDOM from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);



// N.B. Routes replaces Switch as of V6


// import AboutHome from './About Us/AboutHome/AboutHome'
// import FAQ from './About Us/FAQ/FAQ'
// import Services from './About Us/Services/Services'
// import Payment from './Payment/Payment'
// import Contact from './Contect/Contact';


// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         // Using here keeps the navbar but doesn't display the homepage content
//         <Route path="/" element={<App/>}/>
//         // But using  loses the navbar
//         // Should I have my Navbar component in here somewhere or within the App?
//         <Route path="/About" element= {<AboutHome />} />
//         <Route path="/FAQ" element={ <FAQ />} />
//         <Route path="/services" element={ <Services />} />
//         <Route path="/payment" element={<Payment/>} />
//         <Route path="/contact" element={ <Contact />} />

//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
