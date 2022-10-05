import React,{useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from "react-router-dom"

function Forget(){
     const [forgetInput, setForgetInput] = useState({
          email: "",
     });
     function handleChange(event){
           setForgetInput(event.target.value)
     };
     const navigate = useNavigate()
     function handleClose(){
          navigate('/form')
     };
     function handleSubmit(){
          navigate('/form')
     }
     return(
          <div className=" form__divs">
               <CloseIcon className="back" onClick={handleClose}/>
               
                    <form className="form__forget" onSubmit={handleSubmit}>
                          <div className="inp">
                               <label htmlFor="email" className="label">email:</label>
                               <input 
                                    type="text" 
                                    placeholder="email"
                                    value={forgetInput.email}
                                    onChange={handleChange}
                              />
                              
                          
                          </div>
                          <button type="submit">Send</button>
                         
                    </form>
          </div>
     )
}
export default Forget;