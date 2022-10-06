import React, {useState}from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import {  useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Register(){
      // VALIDATING THE FORM USING REACT HOOK FORM
      const {register, handleSubmit, watch, formState: {errors}} = useForm();
     
      // VISIBILITY OF PASSWORD
     const [shown, setShown] = useState(false);
     function handleVisibility(){
          setShown(!shown)
     };

     // GETTING THE INPUT VALUE

   
       // ON SUBMISSION
       const navigate = useNavigate()
       const onSubmit = () => {
           navigate('/direct');
       };
     // FUNCTION FOR NAVIGATING BACK TO THE SPACE PAGE
     function handleClose(){
          navigate('/form')
     };
     const passWord = useRef({});
     passWord.current = watch("passWord", "");

     return(
          <div className="space__div">
                <small onClick={handleClose}>back</small>
                <form className="form__space" onSubmit={handleSubmit(onSubmit)}>
                     <div className="register">Register</div>
                     <div className="inp__div">
                               <label htmlFor="fullName" className="email__label">full name</label>

                               <input 
                                     placeholder="full name"
                                     type="text"
                                     name="fullName"
                                     {...register("fullName", {required: "please enter your full name", maxLength:{value: 15, message: "your full name should not exceed 15 character"}})} 

                              />
                                                       
                    </div>
                    {errors.fullName && <p className="error">{errors.fullName.message}</p> }
                    <div className="inp__div">
                               <label htmlFor="email" className="email__label">email</label>

                               <input 
                                     placeholder="email"
                                     type="email"
                                     name="email"
                                     {...register("email", {required: "please enter your email address",
                                       pattern: {
                                              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                              message: 'Please enter a valid email',
                                    } ,
                                   
                                   })}
                              />                     
                    </div>
                    {errors.email && <p className="error">{errors.email.message}</p> }
                   <div className="inp__div">
                               <label htmlFor="passWord" className="email__label">password</label>
                               {shown ? <VisibilityIcon className="vis__icon" onClick={handleVisibility}/>: <VisibilityOffIcon className="vis__icon" onClick={handleVisibility}/>}
                               <input 
                                     placeholder="password"
                                     type= {shown ? "text" : "password"}
                                     name="passWord"
                                     {...register("passWord", {required: "please enter your password", maxLength:{value: 6, message: "your password should be 6 character"}
                                      
                                   })} 
                                   
                              />

                            
                    </div>
                    {errors.passWord && <p className="error">{errors.passWord?.message}</p> }
                    <div className="inp__div">
                           <label htmlFor="passWord" className="email__label">confirm password</label>
                           {shown ? <VisibilityIcon className="vis__icon" onClick={handleVisibility}/>: <VisibilityOffIcon className="vis__icon" onClick={handleVisibility}/>}

                          <input 
                               placeholder="confirm password"
                               type= {shown ? "text" : "password"}
                               name="confirmPassWord"
                               {...register("confirmPassWord", {required: "please confirm your password", maxLength:{value: 6, message: "invalid password"},
                               validate: value =>
                               value === passWord.current || "The passwords do not match"
                            
                              })} 
                             
                         />
                 
                      </div>
                      {errors.confirmPassWord && <p className="error">{errors.confirmPassWord?.message}</p> }
                      <button type="submit">Sign Up</button>
                
                </form>
          </div>
     )
}
export default Register;