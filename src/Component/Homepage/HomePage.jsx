import React from "react";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import './HomePage.css'
function HomePage(){
     return(
           <div className="home__page">
                <div className="homepage__div">
                    <div className="header">
                          <header>O<span>2</span></header>
                          <h1>chat less be more.</h1>
                          <p className="para">create a space, invite your employees, friends and families. Be kept up to date with how they feel and support them in the only way you know how.</p>
          
                    </div>
                    <Button/>
                    <Footer/>
                
                </div>
           
           </div>
          
     )
}
export default HomePage;