import React from 'react';

import { Link } from 'react-router-dom';

export default Signuppage;



function Signuppage(){
    return(
      <div class="logindivv" id="glassmorphicc">
        <img class="logo" src="https://cdn.shopify.com/s/files/1/0655/6853/products/L_handle2_a96eaa77-2acf-484c-9c13-a0cb0663c8fc_2048x.jpg?v=1594473759" height="120" width="250"/>
        <br/><br/>
        <form action="">
          <div class="form-group">
      <label for="name"><b>Name</b></label>
      <input type="text" class="form-control" id="exampleInputname"  placeholder="Enter Name"/>
     
    </div>
          <br/>
          <div class="form-group">
      <label for="exampleInputEmail1"><b>Phone number</b></label>
      <input type="text" class="form-control" id="exampleInputnum"  placeholder="Enter phone number"/>
     
    </div>
          <br/>
    <div class="form-group">
      <label for="exampleInputEmail1"><b>Email address</b></label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
     
    </div>
          <br/>
    <div class="form-group">
      <label for="exampleInputPassword1"><b>Password</b></label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <br/>
    <Link to="/homepage">
    <button type="submit" class="btn btn-primary">Submit</button>
    </Link>
  </form>
     
        </div>
    )
  }
   
  