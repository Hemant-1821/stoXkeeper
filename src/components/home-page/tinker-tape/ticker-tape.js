import React, { Component } from 'react';

class TinkerTape extends Component {
    constructor(props) {
        super(props);
        this.tinker = React.createRef();
    }
    componentDidMount() {
        const script = document.createElement('script');
        script.src='https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async= true;
        script.innerHTML= 
        `
        {
            "symbols": [
              {
                "description": "APPLE",
                "proName": "NASDAQ:AAPL"
              },
              {
                "description": "MICROSOFT",
                "proName": "NASDAQ:MSFT"
              },
              {
                "description": "RELIANCE",
                "proName": "BSE:RELIANCE"
              },
              {
                "description": "AMAZON",
                "proName": "NASDAQ:AMZN"
              },
              {
                "description": "ALPHABET",
                "proName": "NASDAQ:GOOG"
              },
              {
                "description": "FACEBOOK",
                "proName": "NASDAQ:FB"
              },
              {
                "description": "INTEL",
                "proName": "NASDAQ:INTC"
              },
              {
                "description": "ADOBE",
                "proName": "NASDAQ:ADBE"
              },
              {
                "description": "NETFLIX",
                "proName": "NASDAQ:NFLX"
              },
              {
                "description": "AIRTEL",
                "proName": "BSE:BHARTIARTL"
              },
              {
                "description": "HCL",
                "proName": "BSE:HCLTECH"
              },
              {
                "description": "INFOSYS",
                "proName": "BSE:INFY"
              },
              {
                "description": "TCS",
                "proName": "BSE:TCS"
              },
              {
                "description": "SBI",
                "proName": "BSE:SBICARD"
              },
              {
                "description": "LT",
                "proName": "BSE:LT"
              }
            ],
            "showSymbolLogo": true,
            "colorTheme": "dark",
            "isTransparent": false,
            "displayMode": "adaptive",
            "locale": "in"
          } 
        `
        this.tinker.current.appendChild(script);
    }
    render() {
        return (
          <>
          <div className="inactiveLink ">
            <div className="tradingview-widget-container" ref={this.tinker}>
                <div className="tradingview-widget-container__widget"></div>
            </div>
          </div>
          </>
        )
    }
};

export default TinkerTape;

