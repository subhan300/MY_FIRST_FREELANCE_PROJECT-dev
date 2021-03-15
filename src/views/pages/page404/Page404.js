import React from 'react'
import {Navbar,Button,FormControl,Nav,Form,NavDropdown} from "react-bootstrap"
import UnderHeader from "./UnderHeader"
import Section3 from "./components/section3/section3"
import Section4 from "./components/Section4/Section4"
import Section5 from "./components/section5/section5"
const HomePage = () => {
  return (

    <div>
      <div style={{border:"2px solid green",display:"flex",justifyContent:"center",backgroundColor:"white"}}>
     
     <div style={{border:"2px solid blue",flex:.8,backgroundColor:"white"}}>
        
         <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"white",color:"black"}} variant="dark">
           <Navbar.Brand href="#home" style={{color:"black"}}>Stripe</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:"black"}} />
           <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="m-auto ">
               <Nav.Link href="#features" style={{color:"black"}}>Product</Nav.Link>
               <Nav.Link href="#pricing" style={{color:"black"}}>Use cases</Nav.Link>
               <Nav.Link href="#pricing" style={{color:"black"}}>Pricing</Nav.Link>
               <Nav.Link href="#pricing" style={{color:"black"}}>Developer</Nav.Link>
               <Nav.Link href="#pricing" style={{color:"black"}}>Company</Nav.Link>
              
             </Nav>
             <Nav>
               <Nav.Link href="#deets" style={{color:"black"}}>Sign in</Nav.Link>
        
             </Nav>
           </Navbar.Collapse>
         </Navbar>
         
 
 
     </div>
 
     </div>








    <UnderHeader />
    <Section3 />
    <Section4 />
    <Section5 />



    </div>
    
  )
}

export default HomePage
