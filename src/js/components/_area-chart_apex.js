import ApexCharts from 'apexcharts';

var options = {
  title: { text: 'Wavy lines' },
  series: [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 55, 52]
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ],
  colors: ['#e9448d', '#d7a9df'],
  fill: {
    type: 'solid'
  },
  stroke: {
    width: 1
  },
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    // offsetX: 32,
    // offsetY: 32,
    background: '#fff',
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },

  xaxis: {
    type: 'datetime',
    categories: [
      '2019-05-30',
      '2019-05-31',
      '2019-06-01',
      '2019-06-02',
      '2019-06-03',
      '2019-06-04',
      '2019-06-05'
      
    ]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    }
  },
  yaxis: {
    tickAmount: 4
  }
};

// var options = {
//   chart: {
//     type: 'bar'
//   },
//   series: [
//     {
//       name: 'sales',
//       data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
//     }
//   ],
//   xaxis: {
//     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//   }
// };

var chart = new ApexCharts(document.querySelector('#area-chart'), options);
chart.render();
