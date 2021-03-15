import React from 'react'
import "./UnderHeader.css"
function UnderHeader() {
 
    
    return (
        <div className="animate-me" style={{display:"flex",border:"2px solid blue",justifyContent:"center",paddingTop:"7px",alignItems:"center",flexWrap:"wrap"}}>

            <div style={{flex:.6,textAlign:"center"}}>
                
                <h1 style={{fontSize:"38px"}}>STRIPE PAYMENT</h1>
                <h3>make your software in a easy way</h3>
                <h4>SIGN UP NOW </h4>
            </div>
            <div style={{flex:.6,textAlign:"center"}}>
                
            <img src="https://n.foxdsgn.com/deva/wp-content/uploads/2021/02/image-1-1536x894.png" class="img-fluid" alt="Responsive image" />
            
            </div>
           
        </div>
    )
}

export default UnderHeader
