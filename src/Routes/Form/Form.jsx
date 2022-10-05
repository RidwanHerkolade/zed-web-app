import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './Form.css'
function Form(){
     //  GETTING THE INPUT VALUE
     const [shown, setShown] = useState(false)
     const [error, setError] = useState([])
     const [input, setInput] = useState({
          email: "",
          passWord: ""
     });
     function handleChange(event){
          const {name, value} = event.target
          setInput(prevInput => {
               return{
                    ...prevInput,
                    [name]: value
                    
               }
          })
     };
     // SETTING AN ALERT INCASE IF AN EMPTY VALUE IS SENT
     function handleError(formValue) {
          const errors = {}
          if(!formValue.email) {
               errors.email = "Please enter your email address"
          }
          if(!formValue.passWord) {
               errors.passWord = "Please enter your password"
          }
          setError(errors)
          return errors;
     };
     // ON SUBMISSION
     const navigate = useNavigate()
     function handleSubmit(event){
          event.preventDefault();
          const validation = handleError(input);
          if (Object.keys(validation).length !== 0){
               return;
          }
          navigate('/detail')

     };
     function handleVisibility(){
          setShown(!shown)
     }
     return(
        <div className="form">
                <div className="form__div">
                    <div className="form__logo">
                          
                          <header>O<span>2</span></header>
                   
                    </div>
                     <form onSubmit={handleSubmit}>
                          <h1>sign in</h1>
                          <div className="inp__div">
                               <label htmlFor="email" className="email__label">email</label>

                               <input 
                                     placeholder="email"
                                     type="text"
                                     name="email"
                                     value={input.email} 
                                     onChange={handleChange}
                                     

                              />
                            
                              <p className="error">{error.email}</p>
                          
                          </div>
                          <div className="inp__div">
                               <label htmlFor="password" className="password__label">password</label>
                              <input 
                                    placeholder="password" 
                                    type= {shown ? "text" : "password"}
                                    name="passWord"
                                    value={input.passWord}
                                    onChange={handleChange}

                                    
                               />
                               {shown ? <VisibilityIcon className="vis__icon" onClick={handleVisibility}/>: <VisibilityOffIcon className="vis__icon" onClick={handleVisibility}/>}
                               <p className="error">{error.passWord}</p>
                          
                          </div>
                          <button type="submit">Sign In</button>
                          <div className="forgot">
                               <Link className="black" to="/forget">forgot password</Link>
                               <Link className="blue" to="/register">sign up</Link>
                          
                          </div>
                     
                     </form>
                
                </div>
        
        </div>
     )
}
export default Form;