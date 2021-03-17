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
          <div className="row pl-5">
            <div className="col-sm-12 col-md-6 " >
              <h6 className="text" style={{color:'black'}}>        Stint<span style={{fontSize:"20px"}}>:</span> Logo</h6>
              <p className="mt-2 text-muted font-weight-light">
      
The right amount of staff, every hour of the day
              </p>
              <div>
            <div style={{display:"flex"}}>
                     
            <div className="social-icons ">
             <li><a href=""><InstagramIcon style={{ fontSize: 36 }}/></a></li>
             </div>
             <div className="social-icons ">
             <li><a href=""><TwitterIcon style={{ fontSize: 36 }}/></a></li>
             </div>
             <div className="social-icons ">
             <li><a className="facebook" href="#"><FacebookIcon style={{ fontSize: 36 }}/></a></li>
             </div>
              <div className="social-icons ">
             <li><a className="facebook" href="#"><LinkedInIcon style={{ fontSize: 36 }}/></a></li>
             
             </div>
            </div>
              </div>
              {/* <div className="row text-center">
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
            </div> */}
            </div>
            <div className="col-sm-12 col-md-2 mt-2">
              <h6 style={{color:'black'}}>About</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/about/">Platform</a></li>
                <li><a href="http://scanfcode.com/contact/">Why stint?</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Pricing</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">FAQS</a></li>
                <li><a href="http://scanfcode.com/sitemap/">Get Started</a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-2 mt-3">
              <h6 style={{color:'black'}}>Categories</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/category/c-language/">For Students</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">Support
</a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">Student Blog
</a></li>
                <li><a href="http://scanfcode.com/category/java-programming-language/">Learn
</a></li>
                <li><a href="http://scanfcode.com/category/android/">Resources
</a></li>
                <li><a href="http://scanfcode.com/category/templates/">From the Blog
</a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-2 mt-3">
              <h6 style={{color:'black'}}>Latest News
</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/about/">Product Features
</a></li>
                <li><a href="http://scanfcode.com/contact/">Company
</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">About Stint
</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">Careers
</a></li>
                <li><a href="http://scanfcode.com/sitemap/">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright © 2017 All Rights Reserved by 
                <a href="#">Scanfcode</a>.
              </p>
            </div>
          <div  className="col-md-3 col-sm-12 ">
            Terms and conditions <span>Privacy Policy</span>

          </div>
          </div>
        </div>
      </footer>
        </div>
    )
}
