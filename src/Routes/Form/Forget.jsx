import React,{useState} from "react";
import {useForm} from "react-hook-form"
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from "react-router-dom"

function Forget(){
     // VALIDATING THE FORM USING REACT HOOK FORM
     const {register, handleSubmit, formState: {errors}} = useForm()
     const navigate = useNavigate()
     function handleClose(){
          navigate('/form')
     };
     // ON SUBMISSION
     const onSubmit = () => {
          navigate('/form')
     };
     return(
          <div className=" form__divs">
               <CloseIcon className="back" onClick={handleClose}/>
               
                    <form className="form__forget" onSubmit={handleSubmit(onSubmit)}>
                          <div className="inp">
                               <label htmlFor="email" className="label">email:</label>
                               <input 
                                    type="text" 
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
                          <button type="submit">Send</button>
                         
                    </form>
          </div>
     )
}
export default Forget;