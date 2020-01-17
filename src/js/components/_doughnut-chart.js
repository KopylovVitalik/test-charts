import Chart from 'chart.js';

var config = {
  type: 'doughnut',

  data: {
    datasets: [
      {
        data: [0.5, 0.5],
        backgroundColor: ['#f2651e', '#ffe401'],
        label: 'Dataset 1'
      }
    ],
    labels: ['Да', 'Нет']
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 80,
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

var ctx = document.getElementById('doughnut-chart').getContext('2d');
var myDoughnut = new Chart(ctx, config);

