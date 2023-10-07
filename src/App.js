
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Navv from './Nav/Nav';
import {useState} from 'react'




function App() {
  
    const [buttonText,setButtonText]=useState('login')
    const changeButtonText=(event) => {
      event.preventDefault()
      if(buttonText==='login'){
        setButtonText('Sign Up')
      }
      else{
          setButtonText('login')
      }
    }
  

  // const [buttonText='login',setButtonText]=useState('Sign Up')
  // const changeButtonText=(event) => {
  //   event.preventDefault()
  //   if(buttonText==='Sign Up'){
  //     setButtonText('login')
  //   }
  //   else{
  //       setButtonText('Sign Up')
  //   }
  

  return (
    <Router >
     <div className="App">
     <Navv signup={buttonText} changeButtonText={changeButtonText}/>

    {/* <AboutPage /> */}


     </div>
    {/* <HomePage/> */}
    {/* <SignUpPage /> */}
    {/* <SendMessage /> */}
    {/* <Payment/> */}
    {/* <PaymentCard/> */}
    {/* <Contact /> */}
    </Router>
  );
}

export default App;
