import React,{Component} from 'react';
import { NewsDesign } from './news-card';

class News extends Component{
    constructor(){
        super()

        this.state = {
            news : []
        }
    };

    async componentDidMount()
  {
    const url = 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news/AAPL';
    const response = await fetch(url,{
      method:'GET',
      headers : new Headers({
        'Content-type': 'application/json',
        'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_YAHOO,
      })
    });
    const data = await response.json();
    console.log(data);
    this.setState({news: data.item})
  }
  render()
  {
    return(
      <div className="NewsContainer">
        <h1 className="stoxnews">News Feed</h1>
        <NewsDesign news={this.state.news} />
      </div>
    )
  }
}

export default News;