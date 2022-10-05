import React, { useState} from "react";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from "react-router-dom";  
import './Button.css'

function Button(){

     // LOGIN REDIRECT 
     const [login, setLogin] = useState(false)
     const [space, setSpace] = useState(false)
     const history = useNavigate()
     function handleLogin(e){
          e.preventDefault()
          setLogin(true)
          history('./form')

     }
     // SET SPACE 
     function handleSpace(e){
          e.preventDefault()
          setSpace(true)
          history('./space')

     }
     
     return(
          <div className="btn__display">
                <button className="space" onClick={handleLogin}>Log in</button>
                <button onClick={handleSpace}>Create Space</button>
                <div className="social__icons">

                
                     <div className="icons">
                         <a
                               className="social-icon-link google"
                               href= 'https://web.facebook.com/?_rdc=1&_rdr'
                               target='_blank'
                               rel="noreferrer"
                               aria-label='Google'  
                         >
                          <GoogleIcon/>    
                         </a>
                                          
                     </div>
                     <div className="icons">
                         <a 
                               className="social-icon-link apple"
                               href= 'https://accounts.google.com/v3/signin/identifier?dsh=S-1643465111%3A1663876981045578&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=AddSession'
                               target='_blank'
                               rel="noreferrer"
                               aria-label='Apple'  
                         >
                         <AppleIcon/>
                         
                         </a>
                         
                    
                     </div>
                     <div className="icons">
                          <a
                         
                                class='social-icon-link facebook'
                                href = 'https://web.facebook.com/?_rdc=1&_rdr'
                                 target='_blank'
                                 rel="noreferrer"
                                aria-label='facebook'
                          >
                               <FacebookRoundedIcon className="blue"/>
                         </a>
                        
                    
                     </div>
                  
                </div>
                

          </div>
     )
}
export default Button;