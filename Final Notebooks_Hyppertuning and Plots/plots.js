// // @TODO: YOUR CODE HERE
// var nycTemp = temps['newyork'];
// var houTemp = temps['houston'];
// const dataset1 ={
//     y: nycTemp,
//     type: 'box',
//     name:'newyork',
//     boxpoints : 'all'
// };

// const dataset2 ={
//     y: houTemp,
//     type: 'box',
//     name:'houston',
//     boxpoints : 'all'
// };

// Plotly.newPlot('plot',[dataset1,dataset2]);

// // const traceArr=[];
// Object.defineProperties(temps).forEach(([city,cityRempsArr]) => traceArr.push({
// y: temps['houston'];
// type: 'box'

// }));

var coefficients = [0.2568897423054892,
    0.20451257711131457,
    0.19762628159491794,
    0.15377512309577596,
    0.09892351910984025,
    0.08827275678266217]
var features =  ['AVG_WHP_P','AVG_WHT_P','BORE_WAT_VOL','AVG_CHOKE_SIZE_P','BORE_GAS_VOL','BORE_OIL_VOL'];

const dataset1 ={
    x:features,
    y: coefficients,
    type: 'bar',
};

var layout = {
    title: 'Plot of the feature coefficients - Using Randomized Search CV on Random Forest Regression Model',
    font:{
      family: 'Raleway, sans-serif'
    },
    showlegend: false,
    xaxis: {
      title: 'Feature Names',
      tickangle: -45
    },
    yaxis: {
      title: 'Coefficient Values',
      zeroline: false,
      gridwidth: 2
    },
    bargap :0.05,
    xlabel: 'Feature Names'
  };



Plotly.newPlot('plot',[dataset1],layout);