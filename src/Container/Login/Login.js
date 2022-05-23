import React, { useState } from 'react';
import { Button , Form , Row , Col , FormGroup , Label , Input } from 'reactstrap';


function Login(props) {

  const [User , setUserType] = useState('login')

    return (
      <section id="appointment" className="appointment">
      <div className="container">
          {
            User === 'login' ?
              <div className="section-title">
                  <h2 className='text-center m-3'>Login</h2>
              </div>
              :  <div className="section-title">
                   <h2 className='text-center m-3'>signup</h2>
                  </div>
          }
         
        <form action method="post" role="form" className="php-email-form">
          {
            User === "signup" ?
            <div className="row justify-content-center"> 
                <div className="col-md-4 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate" />
                </div> 
               </div> 
            :null
          }
        
          <div className="row justify-content-center">  
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validate" />
            </div>
          </div>
          <div className="row justify-content-center"> 
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate" />
            </div>
          </div>
          <div className='row   justify-content-center'>
            <div className='d-flex'>
            <div class="text-center login m-3"><button type="button" onClick={()=> setUserType('login')}>Login</button></div>
            
            <div class="text-center singup m-3"><button type="button" onClick={()=> setUserType('signup')}>Signup</button></div>
            </div>

          </div>
        </form>
      </div>
   </section>
    );
}

export default Login;