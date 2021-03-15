import React from 'react'

export default function Header() {
    return (
        <div>
            
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
    )
}
