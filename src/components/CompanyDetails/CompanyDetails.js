import React from 'react';
import CompanyChart from './Chart/CompanyChart';
import CompanyDashboard from './CompanyDashboard/CompanyDashboard';
import TechnicalMeter from './TechnicalMeter/TechnicalMeter';
import MarketSentiment from './MarketSentiment/MarketSentiment';
import CompanyFinancials from './CompanyFinancials/CompanyFinancials';
import { CODE, DESCRIPTION} from './companyCode.enum';
import './CompanyDetails.css';

const CompanyDetails = (props) => (
    <div>
        <CompanyDashboard companyCode={CODE[props.match.params.companyName]['code']} companyName={CODE[props.match.params.companyName]['name']} companyDescription = {DESCRIPTION[props.match.params.companyName]} />
        <CompanyChart companyCode={CODE[props.match.params.companyName]['code']} companyName={CODE[props.match.params.companyName]['name']}/>
        {/* <div className="Fin">
            <CompanyFinancials code={CODE[props.match.params.companyName]['tradingView']} />
        </div> */}
        <div className="analysisMeter">
            <div className="meterGraph">
                <TechnicalMeter code={CODE[props.match.params.companyName]['tradingView']} />
            </div>
            <div className="pie">
                <p className="pieHead">Twitter Sentiment Analysis of {CODE[props.match.params.companyName]['name']}</p>
                <MarketSentiment />
            </div>
        </div>
    </div>
);

export default CompanyDetails;