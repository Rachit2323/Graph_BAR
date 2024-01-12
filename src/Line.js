import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SolarEmploymentChart = () => {
  useEffect(() => {
    const options = {
      title: {
        text: 'Temperature Profile',
        align: 'center'
      },
    //   subtitle: {
    //     text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
    //     align: 'left'
    //   },
      yAxis: {
        title: {
          text: 'Temperatur (C)'
        }
      },
      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2010 to 2020'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },
      series: [
        {
          name: 'Genset',
          data: [43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454, 154610]
        },
      
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }
        ]
      }
    };

    Highcharts.chart('solar-employment-container', options);
  }, []);

  return <div id="solar-employment-container" style={{ width: '40%', height: '300px' }}></div>;
};

export default SolarEmploymentChart;
