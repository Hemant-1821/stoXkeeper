import React from "react";
import { NavLink } from "react-router-dom";
import './footer.css';

 export default function Footer(){
     return(
         <div className="footer-container">
             <footer class="footer">
              <div class="footer-left">
              <p class="about">
              <span>StoXkeeper</span> StoXkeeper is a Registered trademark for StoXkeeper corporations limited
              StoXkeeper is a Registered trademark for StoXkeeper corporations limited
              Any voilations/forgery would be a subject to Indian Law</p>
              <div class="icons">
              <a href="www.facebook.com" class="fb">f</a>
              <a href="www.linkedin.com" class="linkedin">in</a>
              <a href="www.twitter.com" class="twitter">t</a>
              </div>
              </div>
            <div class="copyright">
              <p style={{textAlign: "center"}}>StoXkeeper©2020</p>
            </div>
            </footer>
         </div>
     )
 }