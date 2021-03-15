import React from 'react'
import {Navbar,Button,FormControl,Nav,Form,NavDropdown} from "react-bootstrap"
import UnderHeader from "./UnderHeader"
import Section3 from "./components/section3/section3"
import Section4 from "./components/Section4/Section4"
import Section5 from "./components/section5/section5"
import Section6 from "./components/Section6/Section6"
import image from '../../images/underheader.png';
import './index.css'
import Company from './components/Company_Section/Company'
const HomePage = () => {
  return (

    <div>
        <header className="header-area overlay">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container">
            <a href="#" className="navbar-brand">Bootdey.com</a>
            <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
              <span className="menu-icon-bar" />
              <span className="menu-icon-bar" />
              <span className="menu-icon-bar" />
            </button>
            <div id="main-nav" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li><a href="#" className="nav-item nav-link active">Home</a></li>
                <li><a href="#" className="nav-item nav-link">About Us</a></li>
                <li className="dropdown">
                  <a href="#" className="nav-item nav-link" data-toggle="dropdown">Services</a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">Dropdown Item 1</a>
                    <a href="#" className="dropdown-item">Dropdown Item 2</a>
                    <a href="#" className="dropdown-item">Dropdown Item 3</a>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#" className="nav-item nav-link" data-toggle="dropdown">Portfolio</a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">Dropdown Item 1</a>
                    <a href="#" className="dropdown-item">Dropdown Item 2</a>
                    <a href="#" className="dropdown-item">Dropdown Item 3</a>
                    <a href="#" className="dropdown-item">Dropdown Item 4</a>
                    <a href="#" className="dropdown-item">Dropdown Item 5</a>
                  </div>
                </li>
                <li><a href="#" className="nav-item nav-link">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="banner">
        
        <div style={{flex:.6,textAlign:"center"}}>
                
                <h1 style={{fontSize:"38px"}}>STRIPE PAYMENT</h1>
                <h3>make your software in a easy way</h3>
                <h4>SIGN UP NOW </h4>
        </div>
            <div style={{flex:.6}}>
                
            <img src={image} className="banner__image" alt="Responsive image" />
            
            </div>
        </div>
      </header>
    <Company/>
    <UnderHeader />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />


    </div>
    
  )
}

export default HomePage
