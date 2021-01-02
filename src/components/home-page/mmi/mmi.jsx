import React, { Component } from 'react';
import "./mmi.css";
class MMI extends Component {
    constructor(props) {
        super(props);
        this.mmi = React.createRef();
    }
    componentDidMount() {
        const script = document.createElement('script');
        script.src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js" 
        script.async= true;
        script.innerHTML= 
        `{
            "interval": "1m",
            "width": 425,
            "isTransparent": true,
            "height": 450,
            "symbol": "NASDAQ:AMZN",
            "showIntervalTabs": true,
            "locale": "in",
            "colorTheme": "dark"
          }`
    this.mmi.current.appendChild(script);
}
render() {
    return (
      <>
      <hr class="hr-text" data-content="📊MMI" />
      <div className="inactiveLink ">
     <div className="meter">
        <div className="tradingview-widget-container" ref={this.mmi}>
            <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
      </div>
      </>
    )
}
};
export default MMI;

// <!-- TradingView Widget BEGIN -->
// <div class="tradingview-widget-container">
//   <div class="tradingview-widget-container__widget"></div>
//   <div class="tradingview-widget-copyright"><a href="https://in.tradingview.com/symbols/NASDAQ-AAPL/technicals/" rel="noopener" target="_blank"><span class="blue-text">Technical Analysis for AAPL</span></a> by TradingView</div>
//   <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js" async>
//   {
//   "interval": "1m",
//   "width": 425,
//   "isTransparent": false,
//   "height": 450,
//   "symbol": "NASDAQ:AAPL",
//   "showIntervalTabs": true,
//   "locale": "in",
//   "colorTheme": "dark"
// }
//   </script>
// </div>
// <!-- TradingView Widget END -->