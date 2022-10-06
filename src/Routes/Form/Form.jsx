import React, {useState} from "react";
import {useForm} from "react-hook-form"
import {Link, useNavigate} from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// <p className="error">{error.passWord}</p>
// <p className="error">{error.email}</p>
import './Form.css'
function Form(){
     // VALIDATING THE FORM USING REACT HOOK FORM
     const {register, handleSubmit, formState: {errors}} = useForm();
     
     // ON SUBMISSION
      const navigate = useNavigate()
      const onSubmit = () => {
          navigate('/detail')
      }

     //  SETTING THE VISIBILITY OF THE PASSWORD
     const [shown, setShown] = useState(false);
     function handleVisibility(){
          setShown(!shown)
     }
     return(
        <div className="form">
                <div className="form__div">
                    <div className="form__logo">
                          
                          <header>O<span>2</span></header>
                   
                    </div>
                     <form onSubmit={handleSubmit(onSubmit)}>
                          <h1>sign in</h1>
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
                          {errors.email && <p className="error">{errors.email?.message}</p>}
                          <div className="inp__div">
                               <label htmlFor="password" className="password__label">password</label>
                              <input 
                                    placeholder="password" 
                                    type= {shown ? "text" : "password"}
                                    name="passWord"
                                    {...register("passWord", {required: "please enter your password", maxLength:{value: 6, message: "your password should be 6 character"}})} 
                                  
                               />
                               {shown ? <VisibilityIcon className="vis__icon" onClick={handleVisibility}/>: <VisibilityOffIcon className="vis__icon" onClick={handleVisibility}/>}
                              
                          
                          </div>
                          {errors.passWord && <p className="error">{errors.passWord.message}</p>}
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