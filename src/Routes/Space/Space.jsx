import React, {useState}from "react";
import {  useNavigate } from "react-router-dom";
import './Space.css'
function Space(){
     const [error, setError] = useState([])
     const [input, setInput] = useState({
          fullName: "",
          email: "",
          spaceName: ""

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
     function handleError(formValue){
          const errors = {}
          if(!formValue.fullName){
               errors.fullName = "Please enter your full name"
          }
          if(!formValue.email){
               errors.email = "Please enter your email address"
          }
          if(!formValue.spaceName){
               errors.spaceName = "Please enter your space address"
          }
          setError(errors);
          return errors;
     };
     // SUBMITTING THE FORM
     const navigate = useNavigate();
     function handleSubmit(event){
          event.preventDefault()
          const validation = handleError(input);
          if(Object.keys(validation).length !== 0) {
               return;
          }
          navigate('/direct')
     };
     // FUNCTION FOR NAVIGATING BACK TO THE SPACE PAGE
     function handleClose(){
           navigate('/form');
     };

     return(
          <div className="space__div">
                <small onClick={handleClose}>back</small>
                <form className="form__space" onSubmit={handleSubmit}>
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
                               <label htmlFor="spaceName" className="email__label">space name</label>

                               <input 
                                     placeholder="space name"
                                     type="text"
                                     name="spaceName"
                                     value={input.spaceName} 
                                     onChange={handleChange}
                                   
                              />
                            
                            
                          
                    </div>
                    <p className="error">{error.spaceName}</p>
                    <button type="submit">Create Space</button>
                
                </form>
          </div>
     )
}
export default Space;