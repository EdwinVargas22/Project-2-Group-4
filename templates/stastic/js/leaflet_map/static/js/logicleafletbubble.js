// Creating map object
var myMap = L.map("map", {
  center: [36.62873356165663, -120.8397582339502],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Store API query variables
var baseURL = "https://raw.githubusercontent.com/EdwinVargas22/Project-2-Group-4/main/output/cali_county.csv";
var date = "$where=created_date between'2020-01-01T00:00:00' and '2020-12-31T00:00:00'";
var county = "county";
var state = "state";
var fips = "fips";
var cases = "&cases";
var limit = "&$limit=10000000";


// Assemble API query URL
var url = baseURL;

// Grab the data with d3
d3.csv(baseURL, function(data) {
 if (data !== null) {
  console.log(data);
  // getData(data)
  var county = [];
  var cases = [];
  var fips = [];
  var latitude = [];
  var longitude = [];

  for (var i = 0; i < data.length; i++) {
    county.push(data[i].county);
    cases.push(+data[i].cases);
    fips.push(+data[i].fips);
    latitude.push(+data[i].latitude);
    longitude.push(+data[i].longitude);

  }
  console.log(county);
  console.log(cases);
  console.log(fips);
  console.log(latitude);
  console.log(longitude);
  }

//Create a new marker cluster group
// //var markers = L.marker([37.647138500000004,-121.91248799999998]).addTo(myMap);

// var circle = L.circle([37.647138500000004,-121.91248799999998], {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.5,
//   radius: 500
// }).addTo(myMap);

// // Add our marker cluster layer to the map
// myMap.addLayer(markers);



// // Set up pop up with place, mag, depth, and time data
//             circle.bindPopup("<h3>" + feature.properties.place + "<h3><p>" +
//             feature.properties.mag + " magnitudes</p><p>" + feature.geometry.coordinates[2] +
//             " depth</p><p>" + new Date(feature.properties.time) + "</p>");   
//         }      
//     }    
//     // Create function for radius to return mag * 2000 for better visualization
//     function radiusMag(mag) { 
//         return mag * 25000;
//     }
// ​
//     // Create function for color scale base on depth value
//     function circleColor(depth) {
//         // if statement to state range and colors
//         if (depth  < -10) {
//             return "#fffb2"
//         }
//         else if (depth < 10) {
//             return "#fed976"
//         }
//         else if (depth < 30) {
//             return "#feb24c"
//         }
//         else if (depth < 50) {
//             return "#fd8d3c"
//         }
//         else if (depth < 70) {
//             return "#f03b20"
//         }
//         else if (depth < 90) {
//             return "#bd0026"
//         }
//     }
//     // Create a GeoJSON layer containing the features array on the earthquakeData object
//     // Run the onEachFeature function once for each piece of data in the array
//     var earthquakes = L.geoJSON(earthquakeDataFeatures, {
//         // function to create cirlces
//         pointToLayer: function(earthquakeDataFeatures, latlng) {
//             // Create circles
//             return L.circle(latlng, {
//                 // Set raidus to magnitude value
//                 radius: radiusMag(earthquakeDataFeatures.properties.mag),
//                 // Set colors to depth
//                 color: circleColor(earthquakeDataFeatures.geometry.coordinates[2]),
//                 fillColor: circleColor(earthquakeDataFeatures.geometry.coordinates[2]),
//                 fillOpacity: 0.7
//             });
//         },
//         onEachFeature: onEachFeature
//     });
//     // Call createMap function with earthquakes 
//     createMap(earthquakes);
//     // console.log(earthquakes);
// ​
});