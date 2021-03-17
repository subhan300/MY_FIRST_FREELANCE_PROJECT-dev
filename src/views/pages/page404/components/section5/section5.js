import React from 'react'
import './section5.css';
import Card from "./Card_section5"
function section5() {
    return (
        <div className="section5__wrapper" style={{backgroundColor:"white",paddingTop:"10px"}}>
          <div className="container">
              <div className="row d-flex justify-content-center ">
                    <div className="col-md-12 mt-5">
                        <h1 className="heading text-center mt-5">Tool for every kind of business</h1>
                    </div>
              </div>
              <div className="row d-flex justify-content-center ">
                    <div className="col-md-12 mt-5">
                        <p className="text-center">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                    </div>
              </div>
          </div>
          <div className="container" style={{flexWrap:"wrap",display:"flex",paddingTop:"10px",justifyContent:"space-around",textAlign:"center"}}>
              
                    <div className="bg-light" style={{marginTop:"4px"}}><Card  Img="https://n.foxdsgn.com/deva/wp-content/uploads/2021/02/image-4.png" title="Startups" /></div>
                    <div className="bg-light" style={{marginTop:"4px"}}><Card  Img="https://n.foxdsgn.com/deva/wp-content/uploads/2021/02/image-5.png" title="Entrepreneurs" /></div>
                    <div className="bg-light" style={{marginTop:"4px"}}><Card  Img="https://n.foxdsgn.com/deva/wp-content/uploads/2021/02/image-6.png" title="Employees" /></div>
                  

             </div>
             <br></br><br></br>
        </div>
    )
}

export default section5
