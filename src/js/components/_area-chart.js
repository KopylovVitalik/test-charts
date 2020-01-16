import Chart from 'chart.js';
import { GET_RANDOM_INT } from '../canvas-utils';
import SlimSelect from 'slim-select';

const randomData = () => GET_RANDOM_INT(40, 55);

const createWeekDataset = () => {
  const firstDataSet = {
    label: 'First dataset',
    borderColor: 'transparent',
    borderWidth: 0,
    backgroundColor: 'rgba(249, 102, 154, 0.7)',
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
    backgroundColor: 'rgba(215, 169, 223, 0.7)',
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
    '05.30',
    '05.31',
    '06.01',
    '06.02',
    '06.03',
    '06.04',
    '06.05'
  ];
  return { firstDataSet, secondDataSet, labels };
};

const createYearDataset = () => {
  const firstDataSet = {
    label: 'First dataset',
    borderColor: 'transparent',
    borderWidth: 0,
    backgroundColor: 'rgba(249, 102, 154, 0.7)',
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
    backgroundColor: 'rgba(215, 169, 223, 0.7)',
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
          console.log(tooltipItem);
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
            lineHeight: 2
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
            padding: 10
          },
          gridLines: {
            color: 'rgba(51, 51, 51, 0.2)',
            lineWidth: 2,
            drawBorder: false,
            drawTicks: false
          }
        }
      ]
    }
  }
};

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
    console.log(info.value, data.label);
    chart.update();
  }
});
