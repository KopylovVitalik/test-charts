import Chart from 'chart.js';

var config = {
  type: 'doughnut',

  data: {
    datasets: [
      {
        data: [0.5, 0.5],
        backgroundColor: ['red', 'orange'],
        label: 'Dataset 1'
      }
    ],
    labels: ['Да', 'Нет']
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: function(context) {
      // var width = context.chart.width;
      // var weight = width < 768 ? 60 : 80;
      // return weight;
      // console.log('sss');
    },
    legend: {
      position: 'right',
      borderWidth: 0,
      labels: {
        boxWidth: 16,
        font: function(context) {
          var width = context.chart.width;
          var size = Math.round(width / 32);

          return {
            weight: 'bold',
            size: size
          };
        }
      },
      onClick: e => e.stopPropagation()
    },

    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
};

var ctx = document.getElementById('donut-chart').getContext('2d');
var myDoughnut = new Chart(ctx, config);
