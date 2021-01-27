// Set queryUrl
var queryUrl = "https://raw.githubusercontent.com/EdwinVargas22/Project-2-Group-4/main/output/cases_deaths_df.json";

// Read in data
d3.json(queryUrl).then((casesDeath) => {
    // console.log(casesDeath);
    if (casesDeath !== null) {

        // Create variables for each object
        var deaths = casesDeath.deaths;
        var cases = casesDeath.cases;
        var countyName = casesDeath.county;

        // Create empty list
        var countyNameList = [];
        var casesList = [];
        var deathsList = [];

        // Loop through object and push value to list
        for (const [key, value] of Object.entries(countyName)) {
            countyNameList.push(value);    
        }

        for (const [key, value] of Object.entries(cases)) {
            casesList.push(value);
            
        }
        for (const [key, value] of Object.entries(deaths)) {
            deathsList.push(value);
            
        }

        // Create Bubble Chart using cases, deaths,and county_name
        var bubbleChart = [{
            x: deathsList,
            y: casesList,
            text: [`<br>${countyNameList}`, `<br>"cases:" ${casesList}`, `<br>"deaths:" ${deathsList}`],
            mode: 'markers',
            marker: {
                color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
                size: 20 
            },
            // sizeref: 2,
            // sizemode: 'area'
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
