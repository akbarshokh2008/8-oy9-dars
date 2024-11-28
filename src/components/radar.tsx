import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface ApexChartState {
  series: Array<{
    name: string;
    data: number[];
  }>;
  options: ApexCharts.ApexOptions;
}

class ApexChart extends React.Component<{}, ApexChartState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Skills',
          data: [80, 90, 70, 85, 60],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'radar',
        },
        dataLabels: {
          enabled: true,
        },
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColors: '#e9e9e9',
              fill: {
                colors: ['#f8f8f8', '#fff'],
              },
            },
          },
        },
        title: {
          text: 'Besh burchakli Radar Chart',
        },
        colors: ['#fff'],
        markers: {
          size: 4,
          colors: ['#fff'],
          strokeWidth: 2,
        },
        tooltip: {
          y: {
            formatter: function (val: number) {
              return `${val} points`; 
            },
          },
        },
        xaxis: {
          categories: [
            'Photoshop',
            'Illustrator',
            'XD',
            'InDesign',
            'Premiere',
            'Premiere',
          ], 
        },
        yaxis: {
          labels: {
            formatter: function (val: number) {
              return val.toString();
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radar"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart;
