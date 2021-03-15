import React from 'react'
import Card from "./Card_section5"
function section5() {
    return (
        <div style={{backgroundColor:"white",paddingTop:"10px"}}>
          <div style={{display:"flex",justifyContent:"center",paddingTop:"12px",flexDirection:"column",alignItems:"center"}}>
              <div style={{fontSize:"19px",height:"36px",width:"90px",border:"2px solid black",borderRadius:"50px 50px 50px 50px",color:"black",fontWeight:"bold",textAlign:"center"}}><h4>Basic Features</h4></div>
              <br></br>
              <h1 style={{fontSize:"30px",fontWeight:"bold",textAlign:"center"}}>Tool for every kind of business</h1>
             <p style={{fontSize:"18px"}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minusid</p> 
             <p style={{fontSize:"18px",lineHeight:"0px"}}>quod maxime placeat facere possimus</p>
            
          </div>
          <div style={{flexWrap:"wrap",display:"flex",paddingTop:"10px",justifyContent:"space-around",textAlign:"center"}}>
              
                    <div style={{marginTop:"4px"}}><Card  Img="https://n.foxdsgn.com/deva/wp-content/uploads/2021/02/image-4.png" title="Startups" /></div>
                    <div style={{marginTop:"4px"}}><Card  Img="https://n.foxdsgn.com/deva/wp-content/uploads/2021/02/image-5.png" title="Entrepreneurs" /></div>
                    <div style={{marginTop:"4px"}}><Card  Img="https://n.foxdsgn.com/deva/wp-content/uploads/2021/02/image-6.png" title="Employees" /></div>
                  

             </div>
             <br></br><br></br>
        </div>
    )
}

export default section5
