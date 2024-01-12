import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Power Consumption Profile',
        align: 'center'
      },
      xAxis: {
        categories: ['a', 'b', 'c', 'd', 'e', 'f'],
        title: {
          text: "left"
        },
        gridLineWidth: 0,
        lineWidth: 2
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Power (KW)',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        },
        gridLineWidth: 0
      },
      tooltip: {
        valueSuffix: ' millions'
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          dataLabels: {
            enabled: true
          },
          groupPadding: 0.1
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -50,
        y: 80,
        floating: false,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Genset',
          data: [631, 814, 1276, 631, 814, 1276,1222]
        },

      ]
    };

    Highcharts.chart('container', options);
  }, []);

  return (
    <div id="container" style={{ width: '40%', height: '300px' }}></div>
  );
};

export default BarChart;
