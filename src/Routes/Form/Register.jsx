import React, {useState}from "react";
import {  useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Register(){
     const [shown, setShown] = useState(false);
     const [error, setError] = useState([]);
     const [input, setInput] = useState({
          fullName: "",
          email: "",
          passWord: "",
          confirmPassword: ""
     });
     // GETTING THE INPUT VALUE
     function handleChange(event){
          const {name, value} = event.target
          setInput(prevInput => {
               return {
                    ...prevInput,
                    [name]: value
               }
          })
     };
     // SETTING AN ERROR INCASE IF AN EMPTY INPUT IS SUBMITTED
     function handleRegError(formValue){
          const errors = {}
          if(!formValue.fullName){
               errors.fullName = "Please enter your full name"
          }
          if(!formValue.email){
               errors.email = "Please enter your email address"
          }
          if(!formValue.passWord){
               errors.passWord = "Please enter your password"
          }
          if(!formValue.confirmPassWord){
               errors.confirmPassWord = "Please enter your confirm your password"
          }
          setError(errors);
          return errors;
     };
     // SUBMITTING THE FORM
     const navigate = useNavigate()
     function handleSubmit(event){
          event.preventDefault();
          const validation = handleRegError(input)
          if(Object.keys(validation).length !== 0) {
               return;
     
          }
          if(error.passWord !== error.confirmPassWord) {
               return;
          }
          navigate('/direct');
        
     };
     // FUNCTION FOR NAVIGATING BACK TO THE SPACE PAGE
     function handleClose(){
          navigate('/form')
     };
     // VISIBILITY OF PASSWORD
     function handleVisibility(){
          setShown(!shown)
     };
     return(
          <div className="space__div">
                <small onClick={handleClose}>back</small>
                <form className="form__space" onSubmit={handleSubmit}>
                     <div className="register">Register</div>
                     <div className="inp__div">
                               <label htmlFor="fullName" className="email__label">full name</label>

                               <input 
                                     placeholder="full name"
                                     type="text"
                                     name="fullName"
                                     value={input.fullName} 
                                     onChange={handleChange}
                              />
                            
                                                       
                    </div>
                     <p className="error">{error.fullName}</p>
                    <div className="inp__div">
                               <label htmlFor="email" className="email__label">email</label>

                               <input 
                                     placeholder="email"
                                     type="text"
                                     name="email"
                                     value={input.email} 
                                     onChange={handleChange}
                              />                     
                    </div>
                    <p className="error">{error.email}</p>
                    
                   <div className="inp__div">
                               <label htmlFor="passWord" className="email__label">password</label>
                               {shown ? <VisibilityIcon className="vis__icon" onClick={handleVisibility}/>: <VisibilityOffIcon className="vis__icon" onClick={handleVisibility}/>}
                               <input 
                                     placeholder="password"
                                     type= {shown ? "text" : "password"}
                                     name="passWord"
                                     value={input.passWord} 
                                     onChange={handleChange}
                                   
                              />

                            
                    </div>

                    <p className="error">{error.passWord}</p>
                    <div className="inp__div">
                           <label htmlFor="passWord" className="email__label">confirm password</label>
                           {shown ? <VisibilityIcon className="vis__icon" onClick={handleVisibility}/>: <VisibilityOffIcon className="vis__icon" onClick={handleVisibility}/>}

                          <input 
                               placeholder="confirm password"
                               type= {shown ? "text" : "password"}
                               name="confirmPassWord"
                               value={input.confirmPassWord} 
                               onChange={handleChange}
                        
                         />
                 
                      </div>
                      <p className="error">{error.confirmPassWord}</p>
                      <button type="submit">Sign Up</button>
                
                </form>
          </div>
     )
}
export default Register;