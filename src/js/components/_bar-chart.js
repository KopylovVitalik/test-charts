import Chart from 'chart.js';

var horizontalBarChartData = {
  labels: ['Всего', 'Закрыто', 'В работе', 'Новый', 'Просрочен'],
  datasets: [
    {
      label: 'Projects',
      fill: false,
      backgroundColor: [
        'rgba(255, 135, 160, 0.5)',
        'rgba(111, 194, 245, 0.5)',
        'rgba(255, 218, 110, 0.5)',
        'rgba(107, 210, 211, 0.5)',
        'rgba(189, 144, 255, 0.5)'
      ],
      borderWidth: 2,
      data: [1000, 600, 100, 100, 200]
    }
  ]
};

var ctx = document.getElementById('bar-chart').getContext('2d');
var myHorizontalBar = new Chart(ctx, {
  type: 'horizontalBar',
  data: horizontalBarChartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      rectangle: {
        borderWidth: 2
      }
    },
    responsive: true,
    legend: {
      position: 'left',
      display: false
    },
    title: {
      display: false
    },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 2000,
            fontSize: 12
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontSize: 11
          }
        }
      ]
    }
  }
});
