var queryUrl = "https://raw.githubusercontent.com/EdwinVargas22/Project-2-Group-4/main/output/cases_deaths_df.csv";

d3.csv(queryUrl, function(casesDeath) {
    if (casesDeath !== null) {
        console.log(casesDeath); 

        var deaths = [];
        var cases = [];
        var county_name = [];
        
        for (var i = 0; i < casesDeath.length; i++){
            deaths.push(casesDeath.cases);
            cases.push(casesDeath.deaths);
            county_name.push(casesDeath.county);
        }
        // console.log(deaths);
        // console.log(cases);
        // console.log(county_name);


        // // Create Bubble Chart using county, currentSampleValues,
        // // and current OTUsLabels
        // var bubbleChart = [{
        //     x: deaths,
        //     y: cases,
        //     text: county_name,
        //     mode: 'markers',
        //     marker: {
        //         color: county_name,
        //         size: cases 
        //     }
        // }];

        //         // Create Layout for Bubble Chart
        // var bubbleLayout = {
        //     title: `California 2020 by County`,
        //     xaxis: {title: "Deaths"},
        //     yaxis: {title: "Cases"},
        //     height: 600,
        //     width: 1200,
        //     paper_bgcolor: 'rgb (248,248,255)',
        //     plot_bgcolor: 'rgb(248,248,255)',
        //     font: {
        //         family: 'Arial'
        //     }
        // };
        // // Display Bubble Chart
        // Plotly.newPlot("bubble", bubbleChart, bubbleLayout);

    }
});
