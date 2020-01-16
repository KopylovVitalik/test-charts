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
    cutoutPercentage: 70,
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

// var img = new Image();
// img.src = './img/donat-chart.png';

// console.log(img);

// img.addEventListener('load', e => {
//   setTimeout(
//     () =>
//       ctx.drawImage(
//         img,
//         0,
//         myDoughnut.chartArea.right,
//         myDoughnut.outerRadius,
//         myDoughnut.outerRadius
//       ),
//     1000
//   );
// });

// console.log(myDoughnut);
// ctx.drawImage(img, 225, 230);
