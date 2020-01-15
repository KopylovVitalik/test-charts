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
    cutoutPercentage: 80,
    responsive: true,
    legend: {
      position: 'right',
      borderWidth: 0,
      labels: {
        boxWidth: 16,
        fontSize: 16
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
