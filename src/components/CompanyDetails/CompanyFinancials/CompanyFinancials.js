import React from 'react';
import './CompanyFinancials.css';

class CompanyFinancials extends React.Component{
    constructor(props){
        super(props);
        this._ref = React.createRef();
    }
    componentDidMount() {
        const script = document.createElement('script');
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
        script.async = true;
        script.innerHTML = `
              {
                "symbol":  "`+this.props.code+`",
                "colorTheme": "dark",
                "isTransparent": true,
                "largeChartUrl": "",
                "displayMode": "regular",
                "width": "1000",
                "height": "800",
                "locale": "in"
              }`
        this._ref.current.appendChild(script);
    }
    render() {
        return(
            <div className="fin-container">
            <div class="tradingview-widget-container" ref={this._ref}>
                <div class="tradingview-widget-container__widget"></div> 
            </div>
            </div>
        )
    }    
}

export default CompanyFinancials;
