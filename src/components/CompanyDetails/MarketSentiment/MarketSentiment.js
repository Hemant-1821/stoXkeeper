import React from 'react';
import Chart from "react-apexcharts";

class MarketSentiment extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [60, 10, 30],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Positive', 'Neutral', 'Negative'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      };
    }
    render() {
      return (
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="pie" width={380} />
        </div>
      );
    }
}
export default MarketSentiment;