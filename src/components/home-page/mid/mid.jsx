import React from "react";
import "./mid.css";
import analysis from "../../../images/analysis.jpg";
import prediction from "../../../images/Prediction.png";
import news from "../../../images/news.jpg";
import { NavLink } from "react-router-dom";
export default function Mid(){
    return(
        <div>
            <div class="mid"></div>
            <hr class="hr-text" data-content="📈Stocks" />
				<div class="analysisHead">
					<h4>Analysis</h4>
				</div>
				<div class="performance">
					<h4>Performance Graphs</h4>
				</div>
				<div class="news">
					<h4>News and events</h4>
				</div>
			<div class="pictures">
			<figure class="snip0023">
				<img src={analysis} alt="sample26"/>
				<div>		
					<i class="ion-ios-play-outline">➡️</i>	
					<div class="curl"></div>
					<NavLink to="www.google.com"></NavLink>
				</div>				
			</figure>
			<figure class="snip0023">
				<img src={prediction} alt="sample26" />
				<div>		
					<i class="ion-ios-play-outline">➡️</i>	
					<div class="curl"></div>
					<NavLink to="www.google.com"></NavLink>
				</div>				
			</figure>
			<figure class="snip0023">
				<img src={news} alt="sample26" />
				<div>		
					<i class="ion-ios-play-outline">➡️</i>	
					<div class="curl"></div>
					<NavLink to="www.google.com"></NavLink>
				</div>				
			</figure>
			</div>
        </div>
    )

}