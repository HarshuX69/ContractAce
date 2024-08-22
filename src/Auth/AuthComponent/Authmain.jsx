import React from 'react'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom'
const Authmain = ({children}) => {
  return (
    <div id="main-wrapper" class="oxyy-login-register">
 <div class="hero-wrap d-flex align-items-center">
   <div class="hero-mask opacity-4 bg-dark"></div>
   <div class="hero-bg hero-bg-scroll login-background" ></div>
   <div class="hero-content w-100">
     <div class="container">
       <div class="row g-0 min-vh-100"> 
         {/* <!-- Welcome Text
         ========================= --> */}
         <div class="col-md-6 d-flex flex-column">
           <div class="row g-0 my-auto">
             <div class="col-11 col-sm-10 col-lg-9 mx-auto text-center">
               <div class="logo mt-5 mb-3"> <Link to='/' title="Oxyy">
                 <img src='../assets/img/logo-contract.png' alt="Oxyy"/></Link> </div>
               <h2 class="text-white line-height-3 mb-5">HIRE THE BEST TEAM</h2>
             
             </div>
           </div>
         </div>
         {/* <!-- Welcome Text End --> 
         
         <!--  Form
         ========================= --> */}
       <Outlet/>
       {children}
         {/* <!--  Form End -->  */}
       </div>
     </div>
   </div>
 </div>
</div>
  )
}

export default Authmain
