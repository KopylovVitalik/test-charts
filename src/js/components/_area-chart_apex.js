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


const createDataset = (items) => {

  function monthData() {
    var prevMonth = moment()
      .subtract(1, 'month')
      .startOf('month');
    var prevMonthDays = prevMonth.daysInMonth();

    var prevMonthDates = [];

    for (var i = 0; i < prevMonthDays; i++) {
      var prevMonthDay = prevMonth
        .clone()
        .add(i, 'days')
        .format('MM-DD');
      prevMonthDates.push(prevMonthDay);
    }
  }

  switch (items) {
    case 'week':
  }

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
  const labels = ['05.30', '05.31', '06.01', '06.02', '06.03', '06.04', '06.05'];
  return { firstDataSet, secondDataSet, labels };
};