import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import './CompanyDashboard.css';

const CompanyDetails = (props) => {
    const [Data, updateData] = useState({});
    const API = axios.create({
    baseURL: "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+props.companyCode+"&apikey=R96R6264N1DFR7E3",
    });
    var data = {};

    useEffect(() => {
        async function fetchData() {
            const res = await API.get('/');
            data = {...res.data};
            console.log(data);
            updateData({...data['Global Quote']});
        }
        fetchData();
    }, [])

    return(
        <div>
            <div className="CompanyContainer">
                <div className="CompanyDetails">
                    <h1 className="CompanyHead">{props.companyName}</h1>
                    <div className="CompanyFieldContainer">
                        <div className="CompanyName">Symbol: {Data['01. symbol']}</div>
                        <div className="CompanyName">Price: {Data['05. price']}</div>
                        <div className="CompanyName">Volume: {Data['06. volume']}</div>
                    </div>
                    <div className="CompanyFieldContainer">
                        <div className="CompanyName">Price Date: {Data['07. latest trading day']}</div>
                        <div className="CompanyName">Day Change: {Data['09. change']}</div>
                        <div className="CompanyName">Day Change Percent: {Data['10. change percent']}</div>
                    </div>
                </div>
                <div className="CompanyAbout">
                    <h1 className="CompanyHead">About</h1>
                    <p className="CompanyAboutPara">
                        {props.companyDescription}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default withRouter(CompanyDetails);