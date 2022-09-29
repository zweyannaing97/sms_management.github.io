var data = [{
  data: [500, 200, 400, 800, 600],
  backgroundColor: [

    "#ed1b24",
    "#f9bb0e",
    "#ee6c20",
    "#05b8e3",
    "#3a7eed"

  ],
  borderColor: [
    "#ed1b24",
    "#f9bb0e",
    "#ee6c20",
    "#05b8e3",
    "#3a7eed"
  ]

}];

var options = {
  maintainAspectRatio: false,
  respnsive: true,
  tooltips: {
    enabled: true
  },
  plugins: {
    datalabels: {


      formatter: (value, ctx) => {

        const label = ctx.chart.data.labels[ctx.dataIndex];
        return label;


      },


      color: '#fff',



    }
  },

  legend: {
    display: true,
    position: 'right',
    labels: {
      padding: 20,
      usePointStyle: true,
      fontSize: 15,
      fontColor: 'black',




    }
  },

};



var ctx = document.getElementById("on-net").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Ooredoo', 'MPT', 'Mytel', 'Telenor', 'MEC'],
    datasets: data
  },
  options: options
});
/////////////////

var ctx = document.getElementById("off-net").getContext("2d");

var data = {
  labels: ['Ooredoo', 'MPT', 'Mytel', 'Telenor', 'MEC'],
  datasets: [{
      label: "Opening",
      backgroundColor: [

        "#ed1b24",
        "#f9bb0e",
        "#ee6c20",
        "#05b8e3",
        "#3a7eed"



      ],
      borderColor: [

        "#ed1b24",
        "#f9bb0e",
        "#ee6c20",
        "#05b8e3",
        "#3a7eed"

      ],

      data: [500, 200, 400, 800, 600]
    },

  ]
};



var offnetchart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: {
    maintainAspectRatio: false,
    plugins: {
      datalabels: {


        formatter: (value, ctx) => {

          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;


        },



        color: '#fff',
      },


    },

    legend: {
      display: true,

      position: 'right',
      labels: {
        padding: 20,
        usePointStyle: true,
        fontSize: 15,
        fontColor: 'black',

      },


    },

    barValueSpacing: 20,

  }
});
/////

var ctx = document.getElementById("myChart").getContext("2d");

var data = {
  labels: ['On Net  Off Net', 'On Net  Off Net', 'On Net  Off Net', 'On Net  Off Net', 'On Net  Off Net'],
  datasets: [{
      label: ['On Net', 'Total SMS Transaction Count'],
      data: [400, 300, 75, 600, 400],
      backgroundColor: [

        "#ed1b24",

        "#f9bb0e",

        "#ee6c20",

        "#05b8e3",

        "#3a7eed"


      ],
      borderWidth: 1
    },
    {
      label: ['Off Net', 'Total SMS Transaction Count'],
      data: [500, 600, 1000, 800, 500],
      backgroundColor: [

        "#ed1b24",

        "#f9bb0e",

        "#ee6c20",

        "#05b8e3",

        "#3a7eed"


      ],
      borderWidth: 1
    }
  ]
};

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {

    plugins: {
      datalabels: {
        // hide datalabels for all datasets
        display: false
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: 'rgb(150,50,0)',
      callbacks: {
        title: function (item, everything) {
          return;
        }
      }

    },

    legend: {
      display: false
    },
    barValueSpacing: 20,
    scales: {

      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
        }
      }]
    },
    title: {
      display: true,
      text: 'Amount',
      align: 'left'

    }
  }
});

//////
const bctx = document.getElementById('barChart');
const barChart = new Chart(bctx, {
  type: 'bar',
  data: {
    labels: ['CGM', 'OK$', 'One Stop Mart', 'Sugar Mill', 'OK Taxi', 'GAT', 'Custom'],
    datasets: [{
      label: 'Total On Net & Offnet SMS Count',
      data: [1000000, 500000, 250000, 200000, 100000, 90000, 75000],
      backgroundColor: [
        "#ff0f10",
        "#f6c600",
        "#9702fe",
        "#09ff38",
        "#ffe401",
        "#c2342a",
        "#2654ff"

      ],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      datalabels: {
        // hide datalabels for all datasets
        display: false
      }
    },
    maintainAspectRatio: false,


    legend: {
      display: false,
      title: {
        color: '#fff'
      }
    },
    responsive: true,


    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },


    title: {
      display: true,
      text: 'Amount',
      position: 'top'

    }
  },


});