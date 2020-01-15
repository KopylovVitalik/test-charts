import Chart from 'chart.js';
import { GET_RANDOM_INT } from '../canvas-utils';
import momemt from 'moment';

function generateData() {
  var unit = document.getElementById('unit').value;

  function unitLessThanDay() {
    return unit === 'second' || unit === 'minute' || unit === 'hour';
  }

  function beforeNineThirty(date) {
    return date.hour() < 9 || (date.hour() === 9 && date.minute() < 30);
  }

  // Returns true if outside 9:30am-4pm on a weekday
  function outsideMarketHours(date) {
    if (date.isoWeekday() > 5) {
      return true;
    }
    if (unitLessThanDay() && (beforeNineThirty(date) || date.hour() > 16)) {
      return true;
    }
    return false;
  }

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomBar(date, lastClose) {
    var open = randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
    var close = randomNumber(open * 0.95, open * 1.05).toFixed(2);
    return {
      t: date.valueOf(),
      y: close
    };
  }

  var date = moment('Jan 01 1990', 'MMM DD YYYY');
  var now = moment();
  var data = [];
  var lessThanDay = unitLessThanDay();
  for (
    ;
    data.length < 600 && date.isBefore(now);
    date = date
      .clone()
      .add(1, unit)
      .startOf(unit)
  ) {
    if (outsideMarketHours(date)) {
      if (!lessThanDay || !beforeNineThirty(date)) {
        date = date
          .clone()
          .add(date.isoWeekday() >= 5 ? 8 - date.isoWeekday() : 1, 'day');
      }
      if (lessThanDay) {
        date = date
          .hour(9)
          .minute(30)
          .second(0);
      }
    }
    data.push(randomBar(date, data.length > 0 ? data[data.length - 1].y : 30));
  }

  return data;
}

function newDate(days) {
  return moment()
    .add(days, 'd')
    .toDate();
}
function newDateString(days) {
  return moment()
    .add(days, 'd')
    .format();
}

const randomData = () => GET_RANDOM_INT(40, 55);

const createDataset = (items = 7, labels = null) => {
  const firstDataSet = {
    label: 'My First dataset',
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
    label: 'My Second dataset',
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
  labels = ['05.30', '05.31', '06.01', '06.02', '06.03', '06.04', '06.05'];
  return { firstDataSet, secondDataSet, labels };
};

function createConfig(type = 'week') {
  const weekDataSet = createDataset();
  var config = {
    type: 'line',
    data: {
      labels: weekDataSet.labels,
      datasets: [weekDataSet.firstDataSet, weekDataSet.secondDataSet]
    },
    options: {
      responsive: true,
      legend: {
        display: false
      },
      hover: {
        mode: 'nearest',
        intersect: false
      },
      responsive: true,
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
              lineHeight: 2,
              labelOffset: 14
            }
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
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
  return config;
}

var ctx = document.getElementById('area-chart').getContext('2d');
var myLine = new Chart(ctx, createConfig());

// document.getElementById('randomizeData').addEventListener('click', function() {
//   config.data.datasets.forEach(function(dataset) {
//     dataset.data = dataset.data.map(function() {
//       return randomScalingFactor();
//     });
//   });

//   window.myLine.update();
// });

// var colorNames = Object.keys(window.chartColors);

// document.getElementById('addDataset').addEventListener('click', function() {
//   var colorName = colorNames[config.data.datasets.length % colorNames.length];
//   var newColor = window.chartColors[colorName];
//   var newDataset = {
//     label: 'Dataset ' + config.data.datasets.length,
//     borderColor: newColor,
//     backgroundColor: newColor,
//     data: []
//   };

//   for (var index = 0; index < config.data.labels.length; ++index) {
//     newDataset.data.push(randomScalingFactor());
//   }

//   config.data.datasets.push(newDataset);
//   window.myLine.update();
// });

// document.getElementById('addData').addEventListener('click', function() {
//   if (config.data.datasets.length > 0) {
//     var month = MONTHS[config.data.labels.length % MONTHS.length];
//     config.data.labels.push(month);

//     config.data.datasets.forEach(function(dataset) {
//       dataset.data.push(randomScalingFactor());
//     });

//     window.myLine.update();
//   }
// });

// document.getElementById('removeDataset').addEventListener('click', function() {
//   config.data.datasets.splice(0, 1);
//   window.myLine.update();
// });

// document.getElementById('removeData').addEventListener('click', function() {
//   config.data.labels.splice(-1, 1); // remove the label first

//   config.data.datasets.forEach(function(dataset) {
//     dataset.data.pop();
//   });

//   window.myLine.update();
// });

// Chart.Tooltip.positioners.custom = function(elements, position) {
//   if (!elements.length) {
//     return false;
//   }
//   var offset = 0;
//   //adjust the offset left or right depending on the event position
//   if (elements[0]._chart.width / 2 > position.x) {
//     offset = 20;
//   } else {
//     offset = -20;
//   }
//   return {
//     x: position.x,
//     y: position.y + offset
//   };
// };

// var customTooltips = function(tooltip) {
//   $(this._chart.canvas).css('cursor', 'pointer');

//   var positionY = this._chart.canvas.offsetTop;
//   var positionX = this._chart.canvas.offsetLeft;

//   $('.chartjs-tooltip').css({
//     opacity: 0
//   });

//   if (!tooltip || !tooltip.opacity) {
//     return;
//   }

//   if (tooltip.dataPoints.length > 0) {
//     tooltip.dataPoints.forEach(function(dataPoint) {
//       var content = [dataPoint.label, dataPoint.value].join(': ');
//       var $tooltip = $('#tooltip-' + dataPoint.datasetIndex);

//       $tooltip.html(content);
//       $tooltip.css({
//         opacity: 1,
//         top: positionY + dataPoint.y + 'px',
//         left: positionX + dataPoint.x + 'px'
//       });
//     });
//   }
// };
