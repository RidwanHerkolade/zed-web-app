import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Routes/Form/Form';
import About from './Routes/About';
import Address from './Routes/Address';
import Contact from './Routes/Contact';
import Space from './Routes/Space/Space';
import Detail from './Routes/Detail/Detail';
import Forget from './Routes/Form/Forget';
import Direct from './Routes/Space/Direct';
import Register from './Routes/Form/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
       <Routes>
          <Route path="/" element={<App />} />
           <Route path="form" element={<Form/>}/>
           <Route path="about" element={<About />} />
           <Route path="contact" element={<Contact />} />
           <Route path="address" element={<Address />} />
           <Route path="space" element={<Space/>}/>
           <Route path="detail" element={<Detail/>}/>
           <Route path="forget" element={<Forget/>}/>
           <Route path="direct" element={<Direct/>}/>
           <Route path="register" element={<Register/>}/>
 
       </Routes>
  
  
  
  </BrowserRouter>,



document.getElementById('root'))
