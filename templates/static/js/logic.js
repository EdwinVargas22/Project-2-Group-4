// var queryUrl = "http://127.0.0.1:5000/api/v3.0/nocal_county_cases";

// d3.json(queryUrl, function(norCal) {
//     console.log(norCal.cases);
});
const scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'California COVID-19 Cases vs Death',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});