import Chart from 'chart.js';

var horizontalBarChartData = {
  labels: ['Всего', 'Закрыто', 'В работе', 'Новый', 'Просрочен'],
  datasets: [
    {
      label: 'Dataset 1',
      fill: false,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderWidth: 1,
      // barPercentage: 0.8,
      // barThickness: 18,
      // maxBarThickness: 20,
      data: [1000, 600, 100, 100, 200]
    }
  ]
};

var ctx = document.getElementById('bar-chart').getContext('2d');
var myHorizontalBar = new Chart(ctx, {
  type: 'horizontalBar',
  data: horizontalBarChartData,
  options: {
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
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
          // offset: true,
          ticks: {
            beginAtZero: true
            // labelOffset: -10
          }
          // gridLines: {
          //   color: 'rgba(51, 51, 51, 0.2)',
          //   lineWidth: 2,
          //   drawBorder: false,
          //   drawTicks: false
          //   // tickMarkLength: 10
          // }
        }
      ]
    }
  }
});
