import Chart from 'chart.js';
import { GET_RANDOM_INT } from '../canvas-utils';
import SlimSelect from 'slim-select';

const randomData = () => GET_RANDOM_INT(40, 55);

const createWeekDataset = () => {
  const firstDataSet = {
    label: 'First dataset',
    borderColor: 'transparent',
    borderWidth: 0,
    backgroundColor: 'rgba(249, 102, 154, 0.6)',
    data: [
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData()
    ],
    pointRadius: 0,
    pointBorderWidth: 0,
    hoverRadius: 5,
    hoverBorderWidth: 4,
    pointBorderColor: 'black',
    pointBackgroundColor: '#FFF'
  };
  const secondDataSet = {
    label: 'Second dataset',
    borderColor: 'transparent',
    borderWidth: 0,
    backgroundColor: 'rgba(215, 169, 223, 0.6)',
    data: [
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData()
    ],
    pointRadius: 0,
    pointBorderWidth: 0,
    hoverRadius: 5,
    hoverBorderWidth: 4,
    pointBorderColor: 'black',
    pointBackgroundColor: '#FFF'
  };
  const labels = [
    '30.05',
    '31.05',
    '01.06',
    '02.06',
    '03.06',
    '04.06',
    '05.06'
  ];
  return { firstDataSet, secondDataSet, labels };
};

const createYearDataset = () => {
  const firstDataSet = {
    label: 'First dataset',
    borderColor: 'transparent',
    borderWidth: 0,
    backgroundColor: 'rgba(249, 102, 154, 0.6)',
    data: [
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData()
    ],
    pointRadius: 0,
    pointBorderWidth: 0,
    hoverRadius: 5,
    hoverBorderWidth: 4,
    pointBorderColor: 'black',
    pointBackgroundColor: '#FFF'
  };
  const secondDataSet = {
    label: 'Second dataset',
    borderColor: 'transparent',
    borderWidth: 0,
    backgroundColor: 'rgba(215, 169, 223, 0.6)',
    data: [
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData(),
      randomData()
    ],
    pointRadius: 0,
    pointBorderWidth: 0,
    hoverRadius: 5,
    hoverBorderWidth: 4,
    pointBorderColor: 'black',
    pointBackgroundColor: '#FFF'
  };
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return { firstDataSet, secondDataSet, labels };
};

const weekDataSet = createWeekDataset();
const yearDataSet = createYearDataset();

var config = {
  type: 'line',
  data: {
    labels: weekDataSet.labels,
    datasets: [weekDataSet.firstDataSet, weekDataSet.secondDataSet]
  },
  duration: 500,
  easing: 'easeOutBounce',
  options: {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 15,
        bottom: 0
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    hover: {
      mode: 'nearest',
      intersect: false
    },
    title: {
      display: false
    },
    tooltips: {
      mode: 'nearest',
      intersect: false,
      yAlign: 'bottom',
      xAlign: 'center',
      valueY: 20,
      yPadding: 8,
      xPadding: 14,
      displayColors: false,
      callbacks: {
        title: function(tooltipItem, data) {
          return '';
        },
        label: function(tooltipItem, data) {
          var datasetLabel = '';
          var label = data.labels[tooltipItem.index];
          return data.datasets[tooltipItem.datasetIndex].data[
            tooltipItem.index
          ];
        }
      }
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: false
          },
          gridLines: {
            display: false
          },
          ticks: {
            lineHeight: 2.5,
            fontSize: 14
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: false,
            labelString: 'Working hours'
          },
          ticks: {
            beginAtZero: true,
            padding: 12,
            stepSize: 5,
            max: 60,
            fontSize: 14,
            callback: function(value, index, values) {
              if (value % 10 === 0) {
                return value;
              } else {
                return ' ';
              }
            }
          },
          gridLines: {
            color: 'rgba(51, 51, 51, 0.2)',
            lineWidth: 1,
            drawBorder: false,
            drawTicks: false
            // offsetGridLines: 20
          }
        }
      ]
    }
  }
};

// Default for all charts
Chart.defaults.global.defaultFontFamily = '"AvenirNext", Helvetica, sans-serif';
// Chart.defaults.global.defaultFontSize = 11;

var ctx = document.getElementById('area-chart').getContext('2d');
var chart = new Chart(ctx, config);

new SlimSelect({
  select: '#area-chart-select',
  showSearch: false,
  onChange: info => {
    var data = chart.config.data;
    data.labels =
      info.value === 'week' ? weekDataSet.labels : yearDataSet.labels;
    data.datasets =
      info.value === 'week'
        ? [weekDataSet.firstDataSet, weekDataSet.secondDataSet]
        : [yearDataSet.firstDataSet, yearDataSet.secondDataSet];
    chart.update();
  }
});
