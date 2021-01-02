import React from "react";
import Chart from "react-apexcharts";
import axios from 'axios';
import './style.css';

class ApexChart extends React.Component {

  switchTimeSeries = async(series, array, button) => {
    console.log(series);
    await this.setState({
      timeSeries: series,
      timeArray: array,
      activeButton: button,
    });
    this.forceUpdate();
    this.getData();
  }

  getData = () => {
    console.log('[GETDATA]',this.state);
    const IEX = [];
    var name = '';
    const API = axios.create({
      baseURL: "https://www.alphavantage.co/query?function=TIME_SERIES_"+this.state.timeSeries+"&symbol="+this.props.companyCode+"&apikey=R96R6264N1DFR7E3",
    });
    API.get("/").then(result => {
      console.log('result', result);
      var count  = 0;
      for(var i in result.data[this.state.timeArray]){
        count = count + 1;
        var temp = {
            date: i,
            close: parseFloat(result.data[this.state.timeArray][i]['4. close']).toFixed(2),
            open: parseFloat(result.data[this.state.timeArray][i]['1. open']).toFixed(2),
        };
        IEX.push({...temp});
        name = this.props.companyName;
    }
    this.setState({
      series:[{
        name: name,
        data: IEX.map((d) => {
          return {
            x: new Date(d.date),
            y: [d.open, d.open, d.close, d.close],
          }
        })
      }]
    })
    console.log(this.state.series)
  }
    )
  }

  componentDidMount() {
    this.getData();
  }

  constructor(props) {
    super(props);

  this.state = {
      timeSeries: 'WEEKLY',
      timeArray: 'Weekly Time Series',
      activeButton: 'w',
      series: [{
        name: '',
        data: [],
      }],
      options: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: 'zoom'
          }
        },
        colors: ['#e1ad01'],
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        title: {
          text: 'Stock Price Movement',
          align: 'left'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val;
            },
          },
          title: {
            text: 'Price'
          },
        },
        xaxis: {
          type: 'datetime',
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return val;
            }
          }
        }
      },
  } }
  render() {
    return (
    <React.Fragment>
      <div id="chart" className="CompanyChartContainer">
      <div className="graphButtons">
        <button className={this.state.activeButton === 'm' ? "graphButton active":"graphButton"} onClick={() => this.switchTimeSeries('MONTHLY', 'Monthly Time Series','m')}>Monthly</button>
        <button className={this.state.activeButton === 'w' ? "graphButton active":"graphButton"} onClick={() => this.switchTimeSeries('WEEKLY', 'Weekly Time Series','w')}>Weekly</button>
        <button className={this.state.activeButton === 'd' ? "graphButton active":"graphButton"} onClick={() => this.switchTimeSeries('DAILY', 'Time Series (Daily)','d')}>Daily</button>
      </div>
        <Chart options={this.state.options} series={this.state.series} type="area" height={400} />
      </div>
    </React.Fragment>
    );
  }
}

export default ApexChart;