import React from "react";
import { NavLink } from "react-router-dom";
import './footer.css';




 export default function Footer(){
     return(
         <div className="footer-container">
             <footer class="footer">
              {/* <div class="footer-left col-md-4 col-sm-6">
              <p class="about">
              <span>StoXkeeper</span> StoXkeeper is a Registered trademark for StoXkeeper corporations limited
              StoXkeeper is a Registered trademark for StoXkeeper corporations limited
              Any voilations/forgery would be a subject to Indian Law</p>
              <div class="icons">
              <a href="www.facebook.com" class="fb">f</a>
              <a href="www.linkedin.com" class="linkedin">in</a>
              <a href="www.twitter.com" class="twitter">t</a>
              
              <a href="www.facebook.com" class="contact"><span class="emoji">✉️</span></a>
              </div>
              </div>
            <div class="copyright">
              <p>StoXkeeper©2020</p>
            </div>
            </footer>
     </div> */}
  <div>
    <hr class="hr-text" data-content="📈Stoxkeeper" />
    <p class="about">
       <strong>StoXkeeper is a Registered trademark for StoXkeeper corporations limited
    StoXkeeper is a <br/><br/> registered trademark for StoXkeeper corporations limited
      any voilations/forgery would be a subject <br/><br/> to Indian Law</strong>
      </p>
      
  
    <div class="icons">
    <NavLink  to="www.facebook.com" class="fb">f</NavLink>
     <NavLink to="www.linkedin.com" class="linkedin">in</NavLink>
     <NavLink to="www.twitter.com" class="twitter">t</NavLink>
    <NavLink to="www.facebook.com" class="contact"><span class="emoji">✉️</span></NavLink>
    
    </div>
  </div>
  
  <div class="copyright">
      <p style={{color: "white", textAlign: "center"}}>StoXkeeper©2020</p>
  </div>
   
</footer>
             
    
</div>

     )
 }