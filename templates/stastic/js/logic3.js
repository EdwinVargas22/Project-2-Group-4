Plotly.d3.csv('https://github.com/EdwinVargas22/Project-2-Group-4/blob/main/clean_covid_df.csv', function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    var citydate = unpack(rows, 'dates')
        citycounty = unpack(rows, 'county'),
        citystate = unpack(rows, 'state')
        citycases = unpack(rows, 'cases'),
        cityfips = unpack(rows, 'fips'),
        citydeath = unpack(rows, 'deaths'),
        color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"],
        citySize = [],
        hoverText = [],
        scale = 50000;
    for ( var i = 0 ; i < citycases.length; i++) {
        var currentSize = citycases[i] / scale;
        var currentText = citycounty[i] + " pop: " + citycases[i];
        citySize.push(currentSize);
        hoverText.push(currentText);
    }
    var data = [{
        type: 'scattergeo',
        locationmode: 'USA-states-California',
        lat: cityfips, 'northern'
        lon: cityfips, 'southern'
        hoverinfo: 'text',
        text: hoverText,
        marker: {
            size: citySize,
            line: {
                color: 'black',
                width: 2
            },
        }
    }];
    var layout = {
        title: '2020 California COVID-19 Data: Northern vs. Southern California',
        showlegend: false,
        geo: {
            scope: 'california',
            projection: {
                type: 'california'
            },
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            subunitwidth: 1,
            countrywidth: 1,
            subunitcolor: 'rgb(255,255,255)',
            countrycolor: 'rgb(255,255,255)'
        },
    };
    Plotly.newPlot("myDiv", data, layout, {showLink: false});
});