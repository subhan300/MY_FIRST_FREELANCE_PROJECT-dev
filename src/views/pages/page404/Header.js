import React,{useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-scroll'
import {Navbar,Button,FormControl,Nav,Form,NavDropdown} from "react-bootstrap"
import UnderHeader from "./UnderHeader"
import Section4 from "./components/Section4/Section4"
import Section5 from "./components/section5/section5"
import Section6 from "./components/Section6/Section6"
import image from '../../images/underheader.png';
import './Header.css'
import "./UnderHeader.css"
import Company from './components/Company_Section/Company'
const Header = () => {
  const [open,setOpen] = useState(false);
  return (

    <div>
        <header className="header-area overlay animate-me ">
        <div className="navbar">
            <div className="logo"><span>PIXACT</span></div>
            <div className="click__menu" onClick={()=> setOpen(!open)}><MenuIcon/></div>
            <div className="main__menu" style={{ display: open ? "flex" : "block", top: open ? "0" : "-100%"}}>
                <span className="nav__items"><Link activeClass="active" to="home" spy={true} smooth={true}>About Us</Link></span>
                <span className="nav__items"><Link activeClass="active" to="IT" spy={true} smooth={true}>Clients</Link></span>
                <span className="nav__items"><Link activeClass="active" to="children" spy={true} smooth={true}>Services</Link></span>
                <span className="nav__items"><Link activeClass="active" to="print" spy={true} smooth={true}>Porfolio</Link></span>
                <span className="nav__items"><Link activeClass="active" to="contact" spy={true} smooth={true}>Contact Us</Link></span>
                <div  className="close__menu" onClick={()=> setOpen(false)}><CloseIcon/></div>
            </div>
        </div>
        <div className="banner">
        
        <div style={{flex:.5,textAlign:"center"}}>
                
                <h1 style={{fontSize:"38px"}}>STRIPE PAYMENT</h1>
                <h2>make your software in a easy way</h2>
                <p className="font-weight-bold mt-5">SIGN UP NOW </p>
        </div>
            <div style={{flex:.9}}>
                
            <img  src={image} className="banner__image" alt="Responsive image" />
            
            </div>
        </div>
      </header>
    <Company/>
    <Section4 />
    <Section5 />
    <Section6/>
    </div>
    
  )
}

export default Header
