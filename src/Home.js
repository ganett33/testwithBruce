import { header } from 'jquery';
import React, { Component } from "react";

class Home extends Component 
{
         render ()
         {
             return(
               <header className="">
                  <div className="p-5 text-center bg-light text-dark">
                     <h1 className="mb-3 fs-1 fw-bolder">SCP-Foundation</h1>
                     <img className="logo mb-3" src={process.env.PUBLIC_URL + '/images/logo.png'} alt="SCP Logo" />
                     <p className="mb-1 fs-7 fw-bold"><small>WARNING: THE FOUNDATION DATABASE IS</small></p>
                     <p className="mb-3 fs-1 fw-bolder text-danger">CLASSIFIED</p>
                     <p><small>ACCESS BY UNAUTHORIZED PERSONNEL IS STRICTLY PROHIBITED
                     <br/>PERPETRATORS WILL BE TRACKED, LOCATED, AND DETAINED</small></p>                   
                  </div>
                  <br></br>
               </header>
             );
         }
}
export default Home;