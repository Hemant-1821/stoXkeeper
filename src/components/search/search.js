import React from 'react';
import axios from 'axios';
import './search.css';

class search extends React.Component{
    constructor(props) {
        super(props);
    }

    handleSubmit = async() => {
        const input = document.getElementById('search');
        const API = axios.create({
            baseURL: "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords="+input.value+"&apikey=R96R6264N1DFR7E3",
        });
        
        API.get("/").then(result => {
            console.log(result);
        })
    }

    render(){
        return(
            <li className="searchContainer">
                <input type="text" id="search" />
                <button onClick={this.handleSubmit}>Search</button>
            </li>
        )
    }
}

export default search;