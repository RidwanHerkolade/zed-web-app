import React from "react";
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer(){
     return(
           <footer>
               <div className="footer__link">
                     <Link to='/about' className="footer__link li">About us.</Link>
                     <Link to='/contact' className="footer__link li">Contact us.</Link>
                     <Link to='/address' className="footer__link li">Address.</Link>
               
               </div>
               <div className="footer__right">copyright 2022 o2zed.</div>
           
           </footer>
     )
}
export default Footer;