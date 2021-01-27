// Set queryUrl
var queryUrl = "https://raw.githubusercontent.com/EdwinVargas22/Project-2-Group-4/main/output/cases_deaths_df.csv";

// Read in data
d3.csv(queryUrl, function(casesDeath) {

    if (casesDeath !== null) {
        // console.log(casesDeath); 

        // var deaths = [];
        // var cases = [];
        // var countyName = [];


        // deaths.push(+casesDeath.deaths);
        // cases.push(+casesDeath.cases);
        // countyName.push(casesDeath.county);

        var deaths = +casesDeath.deaths;
        var cases = +casesDeath.cases;
        var countyName = casesDeath.county;
        
        
        // deaths.push(+casesDeath.deaths);
        // cases.push(+casesDeath.cases);
        // countyName.push(casesDeath.county);
    
        // deaths.sort(function(a, b) {
        //     return a - b;
        // });

        console.log(deaths);


        // Create Bubble Chart using cases, deaths,and county_name
        var bubbleChart = [{
            x: deaths,
            y: cases,
            text: [`<br>${countyName}`, `<br>"cases:" ${cases}`, `<br>"deaths:" ${deaths}`],
            mode: 'markers',
            marker: {
                color: countyName,
                size: 20 
            },
            sizeref: 2,
            sizemode: 'area'
        }];
    
        // Create Layout for Bubble Chart
        var bubbleLayout = {
            title: `California 2020 by County`,
            xaxis: {title: "Deaths"},
            yaxis: {title: "Cases"},
            height: 600,
            width: 1200,
            paper_bgcolor: 'rgb (248,248,255)',
            plot_bgcolor: 'rgb(248,248,255)',
            font: {
                family: 'Arial'
            }
        };
        // Display Bubble Chart
        Plotly.newPlot("bubble", bubbleChart, bubbleLayout);

    }
});
