import React from "react";
import Typical from 'react-typical';
import './heading.css';

import graphs from "../../../images/graphs.gif";
// import Typo from "./Typo";
class Heading extends React.Component { 
    render () {
      return (
          <div>
            <div className="HeadingContainer">
              {/* <div class="logo"><img  class="coin"src={coin} alt="coin" srcset=""/><h1 class="brand">StoXkeeper</h1></div>  */}
              <img class="graph"src={graphs} alt="" srcset=""/>
              <h1 class="name">StoXkeeper</h1>
              <h3 className="tagline">The X factor in your Trade</h3>
              {/* <p className="head-para">Modern investing tools and data for everyone.</p> */}
              <div> 
                <button class="explore">Start Today!</button>
              </div>
            </div>
            {/* <Typo /> */}
            <div className="heading-anim">
              <p class="typical"><Typical
                steps={['Stocks analysis 📈', 800, 'Latest news 📰', 800,'Prediction🔮',800]}
                loop={Infinity}
                wrapper="p"
              /></p>
            </div>
          </div>
      )
      }
      }
  
  export default Heading;