import React,{useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-scroll'
import Footer from './components/footer/footer'
import Section4 from "./components/Section4/Section4"
import Section5 from "./components/section5/section5"
import Section6 from "./components/Section6/Section6"
import image from '../../images/underheader.png';
import './Header.css'
import "./UnderHeader.css"
import Company from './components/Company_Section/Company'
import HEADER2 from "../page404/components/HEADER2/HEADER2"
const Header = () => {
  const [open,setOpen] = useState(false);
  return (


    <div>
      {/* <HEADER2 /> */}
        <header className="header-area overlay animate-me ">
        <div className="navbar container" >
            <div className="logo" style={{flex:.3}}><span>Stripe</span></div>
            <div className="click__menu" onClick={()=> setOpen(!open)}><MenuIcon/></div>
            <div className="main__menu" style={{ display: open ? "flex" : "block",flex:.8, top: open ? "0" : "-100%"}}>
                <span className="nav__items"><Link activeClass="active" to="home" spy={true} smooth={true}>Products</Link></span>
                <span className="nav__items"><Link activeClass="active" to="IT" spy={true} smooth={true}>Use cases</Link></span>
                <span className="nav__items"><Link activeClass="active" to="children" spy={true} smooth={true}>Developers</Link></span>
                <span className="nav__items"><Link activeClass="active" to="print" spy={true} smooth={true}>Company</Link></span>
                <span className="nav__items"><Link activeClass="active" to="contact" spy={true} smooth={true}>Pricing</Link></span>
                <span className="nav__items"><Link className="RightSign" activeClass="active RightSign" style={{marginLeft:"120px"}} to="contact" spy={true} smooth={true}>Sign in</Link></span>
                {/* <span id="rightSignIn" className="nav__items right" >Sign in</span> */}
                <div  className="close__menu" onClick={()=> setOpen(false)}><CloseIcon/></div>
               
            </div>
         
         
  
        </div>
       <div className="container-fluid py-5" style={{backgroundColor:"white"}}>
       <div className="row banner  py-5 text-center" style={{backgroundColor:"white"}}>
        
        <div className="col-12 col-md-6 py-5" style={{flexDirection:"column",backgroundColor:"white"}} >
             
            <div> <h1  className="header_heading_size"  style={{fontSize:"8rem"}}>PAYMENTS</h1></div>
            <div >  <h1  className="header_heading_size"   style={{fontSize:"8rem",display:"flex",flexDirection:"column",alignItems:"flex-end"}}>infrastructure</h1></div>
            <div  ><h1  className="header_heading_size"  style={{fontSize:"7rem",display:"flex",flexDirection:"column",alignItems:"flex-end"}}>for the internet</h1></div>

         </div> 

        <div className="col-12 col-md-6 d-flex  py-4" style={{flexDirection:"column"}} >
             
             <img  src={image} className="banner__image" alt="Responsive image" />
         
         </div>
     
     </div>
       </div>
      
      </header>
   
    <Company/>
    <Section4 />
    <Section5 />
    <Section6/>
  
    <Footer/>
    </div>
    
  )
}

export default Header
