var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Desarrolladores en Europa', 'Desarrolladores en America', 'Desarrolladores en Asia', 'Desarrolladores en Oceania'],
        datasets: [{
            label: 'Millones de desarrolladores',
            data: [6.3, 5.25, 7.14, 0.42],
            scaleStepWidth: 0,
            backgroundColor: [
                'rgba(168, 31, 74, 1)',
                'rgba(138, 18, 56, 1)',
                'rgba(168, 31, 74, 1)',
                'rgba(138, 18, 56, 1)',
            ],
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: "white"
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    stepSize: 1,
                    beginAtZero: true
                }
            }]
        }
    }
});