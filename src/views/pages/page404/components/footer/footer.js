import React from 'react';
import './footer.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
    return (
        <div>
      <footer className="site-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <h6 className="text" style={{color:'black'}}>About</h6>
              <p className="mt-2 text-muted font-weight-light">
              Scanfcode.com CODE WANTS TO BE SIMPLE is an initiative to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. 
              </p>
              <div className="row">
             <div className="social-icons col-md-2 col-xm-2">
             <li><a href=""><InstagramIcon style={{ fontSize: 36 }}/></a></li>
             </div>
             <div className="social-icons col-md-2 col-xm-2">
             <li><a href=""><TwitterIcon style={{ fontSize: 36 }}/></a></li>
             </div>
             <div className="social-icons col-md-2 col-xm-2">
             <li><a className="facebook" href="#"><FacebookIcon style={{ fontSize: 36 }}/></a></li>
             </div>
              <div className="social-icons col-md-2 col-xm-2">
             <li><a className="facebook" href="#"><LinkedInIcon style={{ fontSize: 36 }}/></a></li>
             
             </div>
            </div>
            </div>
            <div className="col-sm-12 col-md-3 mt-2">
              <h6 style={{color:'black'}}>About</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3 mt-3">
              <h6 style={{color:'black'}}>Categories</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3 mt-3">
              <h6 style={{color:'black'}}>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright © 2017 All Rights Reserved by 
                <a href="#">Scanfcode</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
        </div>
    )
}
